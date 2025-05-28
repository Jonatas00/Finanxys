import { Transaction, TransactionCategory } from '@/types/transaction';
import { colors } from '@/utils/colors';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function TransacaoItem(transaction: Transaction) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.title} numberOfLines={1}>
          {transaction.title}
        </Text>
        <Text style={styles.date}>
          {transaction.date.toLocaleDateString("pt-br")}
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={[
          styles.amount,
          transaction.category === TransactionCategory.EXPENSE && { color: colors.danger }
        ]} numberOfLines={1}>
          R${transaction.amount.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}