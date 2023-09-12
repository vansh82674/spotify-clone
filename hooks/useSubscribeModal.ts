import { create } from "zustand";

interface SubscribeModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const userSubscribeModal = create<SubscribeModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default userSubscribeModal;
