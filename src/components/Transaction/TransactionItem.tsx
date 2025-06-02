import { Transaction, TransactionCategory } from '@/types/transaction';
import { colors } from '@/utils/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  transaction: Transaction;
  onPress: () => void;
}

export default function TransacaoItem({ transaction, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.view}>
        <Text style={styles.title} numberOfLines={1}>
          {transaction.title}
        </Text>
        <Text style={styles.date}>
          <Text>{new Date(transaction.date).toLocaleDateString("pt-br")}</Text>
        </Text>
      </View>
      <View style={styles.amountView}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.buttonDefault,
    height: 80,
    paddingHorizontal: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  view: {
    flex: 1,
    flexWrap: "nowrap",
    justifyContent: "center",
  },
  amountView: {
    alignItems: "flex-end",
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  date: {
    color: colors.textSecondary,
    fontFamily: "roboto-light"
  },
  amount: {
    fontSize: 20,
    color: colors.light,
    fontFamily: "roboto-regular"
  }
});
