import { useTransactionStore } from '@/store/useTransactionStore';
import { TransactionCategory } from '@/types/transaction';
import { colors } from '@/utils/colors';
import React from 'react';
import { Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function MonthChart() {
  const transactions = useTransactionStore((state) => state.transactions);

  // Agrupando por ano-mês e somando receitas e despesas
  const grouped: Record<
    string,
    { income: number; expense: number; label: string }
  > = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const year = date.getFullYear();
    const month = date.getMonth(); // 0–11
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

  // Ordenar por ano-mês (chave)
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    const [aYear, aMonth] = a.split('-').map(Number);
    const [bYear, bMonth] = b.split('-').map(Number);
    return new Date(aYear, aMonth).getTime() - new Date(bYear, bMonth).getTime();
  });

  // Gerar os dados para o gráfico
  const barData = sortedKeys.flatMap((key) => {
    const { income, expense, label } = grouped[key];
    return [
      {
        value: income,
        label,
        spacing: 2,
        labelWidth: 50,
        labelTextStyle: { color: colors.textPrimary, fontSize: 10 },
        frontColor: '#177AD5',
      },
      {
        value: expense,
        frontColor: '#ED6665',
      },
    ];
  });

  function renderLegend() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#177AD5',
              marginRight: 8,
            }}
          />
          <Text style={{ color: colors.textPrimary }}>Receitas</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#ED6665',
              marginRight: 8,
            }}
          />
          <Text style={{ color: colors.textPrimary }}>Despesas</Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: colors.cardPrimary,
        margin: 16,
        borderRadius: 10,
        padding: 16,
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 8,
        }}
      >
        Receita vs Despesa Mensal
      </Text>

      {renderLegend()}

      <BarChart
        data={barData}
        barWidth={8}
        spacing={40}
        roundedTop
        roundedBottom
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{ color: colors.textPrimary }}
        noOfSections={4}
        maxValue={Math.max(...barData.map((d) => d.value), 100)}
        isAnimated
      />
    </View>
  );
}
