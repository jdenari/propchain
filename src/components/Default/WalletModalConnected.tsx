import React from 'react';
import './WalletModalConnected.css';
import { useWallet } from '../../context/MainContext';

type Props = {
    onClose: () => void;
};

const WalletModalConnected: React.FC<Props> = ({ onClose }) => {
    const { address, walletName, setAddress, setWalletName } = useWallet();

    const handleDisconnect = () => {
        setAddress(null);
        setWalletName(null);
        onClose();
    };

    return (
        <div className="wallet-connected-container">
            <p className="wallet-name">{walletName}</p>
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
