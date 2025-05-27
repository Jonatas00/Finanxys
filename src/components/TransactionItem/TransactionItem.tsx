import { colors } from '@/styles/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type transactionProps = {
  id: number;
  title: string;
  amount: number;
  date: string;

};


export default function TransacaoItem(transaction: transactionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >{transaction.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonDefault,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    height: 50,
    boxShadow: colors.boxShadow
  },
  title: {
    color: colors.textPrimary,
  }
});
