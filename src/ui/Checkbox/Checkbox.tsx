import { InputHTMLAttributes } from 'react';
import { CheckIcon } from '@/assets/icons/general';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  className?: string;
  toggleCheckbox: () => void;
}

const Checkbox = ({ checked, toggleCheckbox, className, ...props }: CheckboxProps) => {
  return (
    <div
      role="checkbox"
      tabIndex={0}
      aria-checked={checked}
      className={`custom-checkbox ${checked && 'custom-checkbox-checked'} ${className}`}
      onClick={toggleCheckbox}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleCheckbox();
        }
      }}
      {...props}
    >
      <span className="custom-checkbox-icon">
        <CheckIcon />
      </span>
    </div>
  );
};

export default Checkbox;
