import { Transaction } from '@/types/transaction';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

type Props = {
  transaction: Transaction
}

export default function TransacaoItem(transaction: Transaction) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title} >{transaction.title}</Text>
        <Text style={styles.date}>{transaction.date.toLocaleDateString("pt-br")}</Text>
      </View>
      <View>
        <Text style={styles.amount}>R${transaction.amount.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}