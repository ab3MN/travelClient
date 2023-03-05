import React, { FC } from 'react';
import s from './NewsFilter.module.scss';
import Selector from '../../../shared/Selector/Selector';

const selectorOptions = [
  'Categories',
  'ThaiLand',
  'Vietnam',
  'Cambodia',
  'Indonesia',
];
interface IProps {
  setFilter: (filter: string) => void;
  filter: string;
  setSelector: (filter: string) => void;
}
const NewsFilter: FC<IProps> = ({ setFilter, filter, setSelector }) => {
  const handleChangeFilter = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value);
    },
    [setFilter],
  );

  return (
    <article className={s.container}>
      <div>
        <input
          type="text"
          className={s.input}
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
          placeholder="Search ..."
        />
      </div>{' '}
      <Selector
        options={selectorOptions}
        setSelector={setSelector}
        defaultOptions="Categories"
      />
    </article>
  );
};

export default React.memo(NewsFilter);
