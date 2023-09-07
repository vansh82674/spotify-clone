import { create } from "zustand";

interface AuthModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const userAuthModal = create<AuthModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default userAuthModal;
