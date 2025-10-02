import React, { createContext, useState, useContext } from 'react';

type WalletContextType = {
    address: string | null;
    setAddress: (address: string | null) => void;
    walletName: string | null;
    setWalletName: (name: string | null) => void;
    walletConnected: boolean;
};

// valor inicial do contexto
const WalletContext = createContext<WalletContextType>({
    address: null,
    setAddress: () => {},
    walletName: null,
    setWalletName: () => {},
    walletConnected: false,
});

// hook para usar o contexto
export const useWallet = () => useContext(WalletContext);

// provider que envolve toda a aplicação
export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [address, setAddress] = useState<string | null>(null);
    const [walletName, setWalletName] = useState<string | null>(null);

    // derivado automaticamente
    const walletConnected = !!address;

    return (
        <WalletContext.Provider
            value={{
                address,
                setAddress,
                walletName,
                setWalletName,
                walletConnected,
            }}
            >
            {children}
        </WalletContext.Provider>
    );
};
