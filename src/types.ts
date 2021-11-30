import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLAttributes,
  RefObject,
} from 'react';

export interface authContextTypes {
  login: (token: string, isAdmin: boolean, expiresOn: string) => void;
  logout: () => void;
  token: string | null;
  isAdmin: boolean;
}

export interface InputProps {
  label: string | undefined;
  style: HTMLAttributes<HTMLInputElement> | undefined;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  placeholder: string;
  hasError: boolean;
  errorMessage: string;
  ref: RefObject<HTMLInputElement>;
}
