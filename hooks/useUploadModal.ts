import { create } from "zustand";

interface UploadModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const userUploadModal = create<UploadModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default userUploadModal;
