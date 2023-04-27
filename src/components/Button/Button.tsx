import classNames from "classnames";

type Props = { 
    type?: 'button' | 'submit' | 'reset';
    variant?: 'default' | 'primary' | 'light' | 'dark';
    children: React.ReactNode;
    colorScheme?: string;
}

export function Button({type = 'button', variant, children, colorScheme}: Props) {
    let bgColor = 'text-black'
    if (variant === 'light') bgColor = 'bg-primaryLight hover:bg-primary transition-all text-dark';
    if (variant === 'primary') bgColor = 'bg-primary hover:bg-primaryDark transition-all text-white';
    if (variant === 'dark') bgColor = 'bg-primaryDark hover:bg-primary transition-all text-white';
    
    return (
        <button 
            type={type}
            className={classNames('py-2 px-4 rounded-md', bgColor) } 
        >
            {children}
        </button>
    )
}