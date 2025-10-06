import React, { useEffect, useState } from 'react';
import './WalletModalConnected.css';
import { useWallet } from '../../context/MainContext';
import { BrowserProvider, formatEther } from "ethers";

type Props = {
    onClose: () => void;
};

const WalletModalConnected: React.FC<Props> = ({ onClose }) => {
    const { address, walletName, setAddress, setWalletName } = useWallet();
    const [balanceEth, setBalanceEth] = useState<string | null>(null);

    const handleDisconnect = () => {
        setAddress(null);
        setWalletName(null);
        onClose();
    };

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const ethereum = (window as any).ethereum;
                if (!ethereum || !address) {
                    console.log('❌ ethereum not available or address missing');
                    return;
                }

                const provider = new BrowserProvider(ethereum);
                const balance = await provider.getBalance(address);
                const balanceInEth = formatEther(balance);

                setBalanceEth(balanceInEth);
            } catch (err) {
                console.log('❌ erro ao obter saldo:', err);
            }
        };

        fetchBalance();
    }, [address]);

    return (
        <div className="wallet-connected-container">
            <p className="wallet-name">
                {walletName} {balanceEth ? `- ${balanceEth} ETH` : ''}
            </p>
            <p className="wallet-address">{address}</p>

            <div className="wallet-disconnect-wrapper">
                <button className="wallet-disconnect-button" onClick={handleDisconnect}>
                    Disconnect
                </button>
            </div>
        </div>
    );
};

export default WalletModalConnected;
