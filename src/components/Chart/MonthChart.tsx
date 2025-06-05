import { useTransactionStore } from '@/store/useTransactionStore';
import { TransactionCategory } from '@/types/transaction';
import { colors } from '@/utils/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function MonthChart() {
  const transactions = useTransactionStore((state) => state.transactions);

  const grouped: Record<string, { income: number; expense: number; label: string }> = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const key = `${year}-${month}`;

    if (!grouped[key]) {
      grouped[key] = {
        income: 0,
        expense: 0,
        label: `${monthLabels[month]} ${year}`,
      };
    }

    if (transaction.category === TransactionCategory.INCOME) {
      grouped[key].income += transaction.amount;
    } else if (transaction.category === TransactionCategory.EXPENSE) {
      grouped[key].expense += transaction.amount;
    }
  });

  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    const [aYear, aMonth] = a.split('-').map(Number);
    const [bYear, bMonth] = b.split('-').map(Number);
    return new Date(aYear, aMonth).getTime() - new Date(bYear, bMonth).getTime();
  });

  const barData = sortedKeys.flatMap((key) => {
    const { income, expense, label } = grouped[key];
    return [
      {
        value: income,
        label,
        spacing: 2,
        labelWidth: 50,
        labelTextStyle: styles.barLabelText,
        frontColor: styles.incomeBar.color,
      },
      {
        value: expense,
        frontColor: styles.expenseBar.color,
      },
    ];
  });

  function renderLegend() {
    return (
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, styles.incomeBar]} />
          <Text style={styles.legendText}>Receitas</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, styles.expenseBar]} />
          <Text style={styles.legendText}>Despesas</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receita x Despesa Mensal</Text>
      {renderLegend()}
      <BarChart
        data={barData}
        barWidth={8}
        spacing={40}
        roundedTop
        hideRules
        xAxisThickness={0}
        yAxisThickness={0.0}
        yAxisTextStyle={{ color: colors.textPrimary }}
        noOfSections={4}
        maxValue={Math.max(...barData.map((d) => d.value), 100)}
        isAnimated
        onPress={() => console.warn(barData)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardPrimary,
    margin: 16,
    borderRadius: 10,
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    color: colors.textPrimary,
  },
  barLabelText: {
    color: colors.textPrimary,
    fontSize: 10,
  },
  incomeBar: {
    color: colors.light,
    backgroundColor: colors.light,
  },
  expenseBar: {
    color: colors.danger,
    backgroundColor: colors.danger,
  },
});
