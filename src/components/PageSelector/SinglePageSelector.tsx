import { Checkbox } from '@/ui';

type SinglePageSelectorProps = {
  children: React.ReactNode;
  state: boolean;
  toggoleState: () => void;
};

const SinglePageSelector = ({ children, state, toggoleState }: SinglePageSelectorProps) => {
  return (
    <div className="font-montserrat-normal single-page-selector-container">
      <span>{children}</span>
      <Checkbox checked={state} toggleCheckbox={toggoleState} />
    </div>
  );
};

export default SinglePageSelector;
