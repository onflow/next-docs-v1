import { ReactComponent as CheckboxChecked } from '../../Images/toggles/checkbox-checked.svg';
import { ReactComponent as CheckboxUnchecked } from '../../Images/toggles/checkbox-unchecked.svg';

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  asInternalChecklist?: boolean;
};

export function StaticCheckbox({
  checked,
  asInternalChecklist,
  ...props
}: InputProps) {
  return (
    <div className={asInternalChecklist ? 'absolute left-0' : ''}>
      {checked ? <CheckboxChecked /> : <CheckboxUnchecked />}
      <input checked={checked} {...props} className="invisible" />
    </div>
  );
}
