import React, { useState } from 'react';
import './WalletModalDisconnected.css';
import AlertMessage from './AlertMessage';
import { Wallet } from '../../types/db.types';
import { WalletModalProps } from '../../types/default.types';
import { useWallet } from '../../context/MainContext';

const WalletModalDisconnected: React.FC<WalletModalProps> = ({ onClose, wallets }) => {
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertWalletName, setAlertWalletName] = useState<string | null>(null);
    const [showLink, setShowLink] = useState<boolean>(false);
    const [link, setLink] = useState<string | null>(null);

    const { setAddress, setWalletName } = useWallet();

    // clear any install link and wallet alert
    const clearInstallLink = () => {
        setAlertWalletName(null);
        setShowLink(false);
        setLink(null);
    };

    // check if wallet is available and detected in browser
    const validateWallet = (wallet: Wallet): boolean => {
        if (!wallet.enabled) {
            setAlertMessage(`${wallet.name} is not available yet.`);
            clearInstallLink();
            return false;
        }

        const ethereum = (window as any).ethereum;
        if (!ethereum) {
            setAlertMessage(`${wallet.name} not detected.`);
            setAlertWalletName(wallet.name);
            setShowLink(true);
            setLink(wallet.install_url);
            return false;
        }

        return true;
    };

    // request wallet connection and return address
    const connectToWallet = async (): Promise<string | null> => {
        const ethereum = (window as any).ethereum;

        try {
            const accounts: string[] = await ethereum.request({ method: 'eth_requestAccounts' });

            if (!accounts || accounts.length === 0) {
                setAlertMessage('Connected to wallet but no account was returned.');
                return null;
            }

            const address = accounts[0];
            if (!address || typeof address !== 'string') {
                setAlertMessage('Invalid account address received.');
                return null;
            }

            return address;
        } catch (err) {
            console.error('Wallet connection error:', err);
            setAlertMessage('Connection was rejected or failed.');
            return null;
        }
    };

    // main click handler
    const handleWalletClick = async (wallet: Wallet) => {
        if (!validateWallet(wallet)) return;

        const address = await connectToWallet();

        if (address) {
            setAddress(address);
            setWalletName(wallet.name);
            clearInstallLink();
            onClose();
        }
    };

    return (
        <>
            <div className="wallet-alert-placeholder">
                {alertMessage && (
                    <AlertMessage
                        type="warning"
                        message={alertMessage}
                        onClose={() => {
                            setAlertMessage(null);
                            clearInstallLink();
                        }}
                        linkText={showLink && alertWalletName ? `Install ${alertWalletName}` : undefined}
                        linkUrl={showLink ? link ?? undefined : undefined}
                    />
                )}
            </div>

            <div className="wallet-scroll-container">
                {wallets.map(wallet => (
                <button
                    key={wallet.id}
                    className="wallet-option"
                    onClick={() => handleWalletClick(wallet)}
                >
                    {wallet.name}
                </button>
                ))}
            </div>
        </>
    );
};

export default WalletModalDisconnected;
