import { ComponentPropsWithRef } from 'react';
import cls from 'classnames';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: React.ReactNode;
}

const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cls(
        className,
        'rounded-lg px-4 py-2 text-sm font-bold uppercase transition-colors duration-200 ease-in'
      )}
      {...rest}
    />
  );
};

export default Button;
