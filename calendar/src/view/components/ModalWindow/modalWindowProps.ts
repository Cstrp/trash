import { ReactNode } from 'react';

export interface ModalWindowProps {
  open: boolean;
  onClose: () => void;
  title: string;
  submitButtonLabel: string;
  onSubmit: () => void;
  children: ReactNode;
}
