import React from 'react';
import { useOutsideClose } from '../../../../../hooks/useOutsideClose';
import s from './FooterSelector.module.scss';
import { useCloseByEscPress } from '../../../../../hooks/useCloseByEscPress';

const FooterSelector = () => {
  const [currency, setCurrency] = React.useState('EUR');
  const [isSelectorOpen, setSelectorOpen] = React.useState(false);
  const selectRef = React.useRef(null);

  const handleClose = () => setSelectorOpen(false);

  const handleChangeCurrency = (e: any) => {
    setCurrency(e.currentTarget.getAttribute('data-currency'));
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
      >
        <span style={{ width: '100px', display: 'block' }}> {currency}</span>
        <span className={s.arrow}>
          <b role="presentation"></b>
        </span>
      </span>
      {isSelectorOpen && (
        <ul className={s.list}>
          <li
            className={s.item}
            data-currency="USD"
            onClick={handleChangeCurrency}
          >
            <span>USD</span>
          </li>
          <li
            className={s.item}
            data-currency="EUR"
            onClick={handleChangeCurrency}
          >
            <span>EUR</span>
          </li>
          <li
            className={s.item}
            data-currency="AUD"
            onClick={handleChangeCurrency}
          >
            <span>AUD</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default React.memo(FooterSelector);
