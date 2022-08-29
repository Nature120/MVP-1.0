export interface ITogglerProps {
  switchLabel: React.ReactNode;
  value: boolean;
  onChange: (value: boolean) => void;
}
