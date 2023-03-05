import React, { FC } from 'react';
import s from './Selector.module.scss';
import { useOutsideClose } from '../../hooks/useOutsideClose';
import { useCloseByEscPress } from '../../hooks/useCloseByEscPress';

interface IProps {
  options: Array<string>;
  style?: any;
  icon?: string;
  setSelector: (filter: string) => void;
  defaultOptions: string;
}

const Selector: FC<IProps> = ({
  options,
  style,
  setSelector,
  defaultOptions,
}) => {
  const [currency, setCurrency] = React.useState(defaultOptions);
  const [isSelectorOpen, setSelectorOpen] = React.useState(false);
  const selectRef = React.useRef(null);

  const handleClose = () => setSelectorOpen(false);

  const handleChangeCurrency = (e: any) => {
    const category = e.currentTarget.getAttribute('data-currency');
    setCurrency(category);
    category === defaultOptions ? setSelector('') : setSelector(category);
    handleClose();
  };
  useOutsideClose(selectRef, handleClose);
  useCloseByEscPress(handleClose);

  return (
    <div className={s.container} ref={selectRef}>
      <span
        className={s.select}
        role="textbox"
        aria-readonly="true"
        onClick={() => setSelectorOpen(!isSelectorOpen)}
        style={style}
      >
        <span style={{ display: 'block' }}> {currency}</span>{' '}
        <i className="fa fa-chevron-down" style={{ fontSize: '10px' }}></i>
      </span>

      {isSelectorOpen && (
        <ul className={s.list}>
          {options.map((el, i) => (
            <li
              key={i}
              className={s.item}
              data-currency={el}
              onClick={handleChangeCurrency}
            >
              <span>{el}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(Selector, () => true);
