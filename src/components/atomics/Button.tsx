type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  variant,
  size,
  disabled,
  onClick,
}: ButtonProps) => {
  const classes = `
     rounded-[5px] font-medium inline-block max-w-fit max-h-fit transition-all font-extralight shadow-md hover:shadow-sm
    ${size === 'small' ? 'text-sm px-2 py-1' : ''}
    ${size === 'medium' ? 'text-md px-6 py-[10px]' : ''}
    ${size === 'large' ? 'text-xl px-10 py-[12px]' : ''}
    ${
      variant === 'primary'
        ? 'bg-primary text-white'
        : 'bg-white text-primary border border-primary'
    }
    ${
      disabled
        ? 'cursor-default opacity-50 filter saturate-0 pointer-events-none'
        : ''
    }
  `;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
