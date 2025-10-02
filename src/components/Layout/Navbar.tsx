import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wallet } from 'lucide-react';
import { useWallet } from '../../context/MainContext';

interface NavbarProps {
    onConnectWallet: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConnectWallet }) => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    const { address } = useWallet();
    const walletConnected = !!address;

    return (
        <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                <Home className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                                PropChain
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {['/', '/listings', '/favorites', '/dashboard'].map((path) => (
                        <Link
                            key={path}
                            to={path}
                            className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                            isActive(path)
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            {path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, c => c.toUpperCase())}
                        </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onConnectWallet}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                walletConnected
                                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                : 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white hover:from-blue-700 hover:to-emerald-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                            }`}
                        >
                            <Wallet className="w-4 h-4" />
                            <span className="hidden sm:block">
                                {walletConnected
                                ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                                : 'Connect Wallet'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
