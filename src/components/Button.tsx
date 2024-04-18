import { ReactNode } from "react";

interface BtnProps {
    children: ReactNode;
    onClick(): void;
}

const Button = ({ children, onClick }: BtnProps) => {
    return (
        <button
            className="px-4 py-2 bg-neutral-900 border-2 border-neutral-100 rounded-lg font-bold hover:bg-neutral-700 bg-opacity-70 hover:bg-opacity-70 focus: outline-none transition-colors text-white"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
