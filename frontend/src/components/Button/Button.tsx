import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, style, ...props }) => {
    return (
        <button
            style={{
                backgroundColor: '#244F99',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 20px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background 0.2s',
                ...style,
            }}
            className="custom-button"
            {...props}
        >
            {children}
            <style>
                {`
                    .custom-button:hover {
                        background-color: #3A6FCC;
                    }
                `}
            </style>
        </button>
    );
};

export default Button;