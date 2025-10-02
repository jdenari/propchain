import React, { useEffect } from 'react';
import './AlertMessage.css';
import { AlertMessageProps } from '../../types/default.types';

const AlertMessage: React.FC<AlertMessageProps> = ({ type, message, onClose, autoClose = true, linkText, linkUrl }) => {
    useEffect(() => {
        if (!autoClose) return;
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose, autoClose]);

    return (
        <div className={`alert-message ${type}`}>
            <span>{message}</span>
            {linkText && linkUrl && (
                <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: '8px', textDecoration: 'underline', fontWeight: 600 }}
                >
                    {linkText}
                </a>
            )}
        </div>
    );
};

export default AlertMessage;
