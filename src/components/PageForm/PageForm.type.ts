export interface PageFormState {
  active: boolean;
  text: string;
  city: string;
  title: string;
}

export interface PageFormProps {
  close: () => void;
}
