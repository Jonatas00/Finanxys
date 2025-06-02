import { Transaction } from "@/types/transaction";
import { create } from 'zustand';

export enum ModalType {
  ADD = "add",
  EDIT = "edit"
}

type ModalStore = {
  isModalOpen: boolean;
  openModal: (type: ModalType, transaction?: Transaction) => void;
  closeModal: () => void;
  type: ModalType;
  transaction?: Transaction;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  type: ModalType.ADD,
  transaction: undefined,
  openModal: (type, transaction) => set({ isModalOpen: true, type, transaction }),
  closeModal: () => set({ isModalOpen: false, transaction: undefined })
}));