import React, { FC } from 'react';
import s from './MyInput.module.scss';

interface IProps {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  setState: (email: string) => void;
  style?: any;
  id?: string;
}

const MyInput: FC<IProps> = ({
  value,
  setState,
  name,
  type,
  placeholder,
  style,
}) => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setState(e.target.value);
    },
    [setState],
  );

  return (
    <input
      type={type}
      className={s.input}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      style={style}
    />
  );
};

export default React.memo(MyInput, () => true);
