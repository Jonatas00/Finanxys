import { AddTransactionButton } from "@/components/Button/AddTransactionButton";
import { useModalStore } from "@/store/useModalStore";
import { useTransactionStore } from "@/store/useTransactionStore";
import { Transaction, TransactionCategory } from "@/types/transaction";
import { colors } from "@/utils/colors";
import DateTimePicker from '@react-native-community/datetimepicker';
import { BlurView } from "expo-blur";
import * as Crypto from "expo-crypto";
import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RadioButton, TextInput, TextInputProps } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";

export default function AddTransactionModal() {
  const { isModalOpen, closeModal } = useModalStore();
  const { addTransaction } = useTransactionStore();

  const [type, setType] = useState<TransactionCategory>(TransactionCategory.EXPENSE);
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setTitle("");
      setAmount(0);
      setType(TransactionCategory.EXPENSE);
      setDate(new Date());
      setShowDatePicker(false);
    }
  }, [isModalOpen]);

  const handleAddTransaction = () => {
    const transaction: Transaction = {
      id: Crypto.randomUUID(),
      title: title.trim(),
      amount: amount,
      date: date,
      category: type,
    };
    addTransaction(transaction);
    closeModal();
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const formattedDate = date.toLocaleDateString("pt-br");

  const formatAmount = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleAmountChange = (text: string) => {
    const numeric = Number(text.replace(/\D/g, "")) / 100;
    setAmount(numeric);
  };

  const isFormValid = title.trim() !== "" && amount > 0.01;

  return (
    <Modal animationType="fade" transparent={true} visible={isModalOpen}>
      <BlurView intensity={100} tint="dark" style={styles.centerView}>
        <View style={styles.modal}>
          <Text style={styles.title}>Adicionar Transação</Text>
          <Icon style={styles.closeButton} name="x" onPress={closeModal} />

          <View style={{ gap: 24 }}>
            <TextInput
              {...textInputProps}
              label="Nome"
              value={title}
              onChangeText={setTitle}
              keyboardType="default"
            />
            <TextInput
              {...textInputProps}
              label="Valor"
              value={amount === 0 ? "R$0,00" : formatAmount(amount)}
              onChangeText={handleAmountChange}
              keyboardType="numeric"
            />

            <View>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={styles.datePickerButton}
              >
                <Text style={styles.datePickerText}>{formattedDate}</Text>
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  minimumDate={new Date(2000, 0, 1)}
                  maximumDate={new Date()}
                  value={date}
                  onChange={onChangeDate}
                  display="spinner"
                  negativeButton={{ textColor: colors.titleText }}
                  positiveButton={{ textColor: colors.titleText }}
                />
              )}
            </View>

            <RadioButton.Group
              onValueChange={(value) => setType(value as TransactionCategory)}
              value={type}
            >
              <TouchableOpacity
                onPress={() => setType(TransactionCategory.EXPENSE)}
                style={styles.radioOption}
              >
                <RadioButton value={TransactionCategory.EXPENSE} color={colors.buttonDefault} />
                <Text style={styles.radioLabel}>Despesa</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setType(TransactionCategory.INCOME)}
                style={styles.radioOption}
              >
                <RadioButton value={TransactionCategory.INCOME} color={colors.buttonDefault} />
                <Text style={styles.radioLabel}>Receita</Text>
              </TouchableOpacity>
            </RadioButton.Group>

            <AddTransactionButton onPress={handleAddTransaction} disabled={!isFormValid} />
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

const textInputProps: TextInputProps = {
  mode: "flat",
  underlineColor: colors.textPrimary,
  activeUnderlineColor: colors.textPrimary,
  textColor: colors.textPrimary,
  placeholderTextColor: colors.textPrimary,
  style: { backgroundColor: "transparent" }
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: 360,
    backgroundColor: colors.modalPrimary,
    borderRadius: 8,
    padding: 16,
  },
  title: {
    color: colors.titleText,
    textAlign: "center",
    fontSize: 24,
    marginBottom: 8,
  },
  closeButton: {
    color: colors.textPrimary,
    fontSize: 40,
    position: "absolute",
    right: 0,
    padding: 8,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "transparent",
  },
  datePickerButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.textPrimary,
  },
  datePickerText: {
    color: colors.textPrimary,
    fontSize: 16,
  },
});
