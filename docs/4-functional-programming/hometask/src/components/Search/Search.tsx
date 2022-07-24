import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { CommonProps, TableParamsTypes } from '../../types';

import styles from './Search.module.scss';


export function Search(props: CommonProps) {
  const { dispatch } = props;
  const [searchedValue, setSearchedValue] = useState<string>('');

  const onChange = (value = '') => {
    setSearchedValue(value);
    dispatch({ type: TableParamsTypes.SEARCH, payload: value });
  }

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={searchedValue}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
