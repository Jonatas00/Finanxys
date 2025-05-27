import { colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type transactionProps = {
  title: string;
};


export default function TransacaoItem(transaction: transactionProps) {
  return (
    <View style={styles.container}>
      <Text>{transaction.title}</Text>
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
  }
});
