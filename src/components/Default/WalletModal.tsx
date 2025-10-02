import React from 'react';
import './WalletModal.css';
import { WalletModalProps } from '../../types/default.types';
import { useWallet } from '../../context/MainContext';
import WalletModalDisconnected from './WalletModalDisconnected';
import WalletModalConnected from './WalletModalConnected';

const WalletModal: React.FC<WalletModalProps> = ({ onClose, wallets }) => {
    const { walletConnected } = useWallet();

    return (
        <div className="wallet-modal-backdrop">
            <div className="wallet-modal">
                <div className="wallet-modal-header">
                    <h2>{walletConnected ? 'You are connected at:' : 'Choose Your Wallet'}</h2>
                    <button className="wallet-close" onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                </div>

                {walletConnected ? (
                    <WalletModalConnected onClose={onClose} />
                ) : (
                    <WalletModalDisconnected onClose={onClose} wallets={wallets} />
                )}
            </div>
        </div>
    );
};

export default WalletModal;
