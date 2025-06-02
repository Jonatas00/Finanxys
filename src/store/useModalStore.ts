import { Transaction } from '@/types/transaction';
import { create } from 'zustand';

export enum ModalType {
  ADD = "add",
  EDIT = "edit"
}

type ModalStore = {
  isModalOpen: boolean;
  type: ModalType;
  openModal: (type: ModalType, transaction?: Transaction) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  type: ModalType.ADD,
  openModal: (type) => set({ isModalOpen: true, type }),
  closeModal: () => set({ isModalOpen: false })
}));