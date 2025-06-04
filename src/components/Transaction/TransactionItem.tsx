import { Transaction, TransactionCategory } from '@/types/transaction';
import { colors } from '@/utils/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  transaction: Transaction;
  onPress: () => void;
}

export default function TransactionItem({ transaction, onPress }: Props) {
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
        <Text style={styles.amount} numberOfLines={1}>
          {transaction.category === TransactionCategory.EXPENSE ? "-" : ""}
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
    height: 72,
    paddingHorizontal: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  view: {
    flex: 1,
    flexWrap: "nowrap",
    justifyContent: "center",
    minWidth: "25%"
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
    color: colors.textPrimary,
    fontFamily: "roboto-regular"
  }
});
