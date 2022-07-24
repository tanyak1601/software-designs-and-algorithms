import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import { CommonProps, TableParamsTypes, FilterBy } from '../../types';

import styles from './Filters.module.scss';


const OPTIONS = [
  {
    title: FilterBy.WITHOUT_POSTS,
  },
  {
    title: FilterBy.MORE_THAN_HUNDRED_POSTS,
  },
];

export function Filters(props: CommonProps) {
  const { dispatch } = props;
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  
  const onChange = ({ title }) => {
    let updatedFilters;
    if (selectedFilter.find((filter) => filter === title)) {
      updatedFilters = selectedFilter.filter(
        (filter) => filter !== title
      );
    } else {
      updatedFilters = [...selectedFilter, title];
    }

    setSelectedFilter(updatedFilters);
    dispatch({ type: TableParamsTypes.FILTER, payload: updatedFilters });
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={!!selectedFilter.find(filter => filter === option.title)}
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
