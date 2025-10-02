import { Wallet } from './db.types';

export type WalletModalProps = {
    onClose: () => void;
    wallets: Wallet[];
};

// alert types
export type AlertType = 'success' | 'error' | 'info' | 'warning';

export type AlertMessageProps = {
    type: AlertType;
    message: string | null;
    onClose: () => void;
    autoClose?: boolean;
    linkText?: string;
    linkUrl?: string;
};