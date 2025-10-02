import React, { useState, useEffect } from 'react';
import { WalletProvider } from './context/MainContext';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { HomePage } from './pages/HomePage';
import { ListingsPage } from './pages/ListingsPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { DashboardPage } from './pages/DashboardPage';
import WalletModal from './components/Default/WalletModal';
import { Wallet } from './types/db.types';

const AppContent: React.FC = () => {
    const [walletConnected] = useState(false);
    const [favorites, setFavorites] = useState(['1', '4']);
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const navigate = useNavigate();

    const handleConnectWallet = () => setShowWalletModal(true);
    const handleCloseWalletModal = () => setShowWalletModal(false);

    useEffect(() => {
        fetch('/db/wallets.json')
        .then((res) => res.json())
        .then((data: Wallet[]) => {
            setWallets(data);
        });
    }, []);

    const handleToggleFavorite = (propertyId: string) => {
        setFavorites(prev =>
        prev.includes(propertyId)
            ? prev.filter(id => id !== propertyId)
            : [...prev, propertyId]
        );
    };

    const handlePropertyClick = (propertyId: string) => {
        navigate(`/property/${propertyId}`);
    };

    return (
        <>
            <Navbar
                onConnectWallet={handleConnectWallet}
            />

            {showWalletModal && (
                <WalletModal
                    onClose={handleCloseWalletModal}
                    wallets={wallets}
                />
            )}

            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            onToggleFavorite={handleToggleFavorite}
                            onPropertyClick={handlePropertyClick}
                        />
                    }
                />
                <Route
                    path="/listings"
                    element={
                        <ListingsPage
                            onToggleFavorite={handleToggleFavorite}
                            onPropertyClick={handlePropertyClick}
                        />
                    }
                    />
                <Route
                    path="/property/:id"
                    element={<PropertyDetailPage onToggleFavorite={handleToggleFavorite} />}
                />
                <Route
                    path="/favorites"
                    element={
                        <FavoritesPage
                        favorites={favorites}
                        onToggleFavorite={handleToggleFavorite}
                        onPropertyClick={handlePropertyClick}
                        />
                    }
                    />
                <Route
                    path="/dashboard"
                    element={
                        <DashboardPage
                        walletConnected={walletConnected}
                        onConnectWallet={handleConnectWallet}
                        />
                    }
                />
            </Routes>
        </>
    );
};

function App() {
    return (
        <WalletProvider>
            <Router>
                <AppContent />
            </Router>
        </WalletProvider>
    );
}

export default App;
