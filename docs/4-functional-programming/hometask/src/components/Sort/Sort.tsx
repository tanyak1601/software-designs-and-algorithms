import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { CommonProps, TableParamsTypes, SortBy } from '../../types';

import styles from './Sort.module.scss'


export function Sort(props: CommonProps) {
  const { dispatch } = props;

  const handleChange = (value: SortBy) => {
    dispatch({ type: TableParamsTypes.SORT_BY, payload: value });
  };

  return (
    <FormControl className={styles.control} component="fieldset">
      <FormLabel className={styles.label}>
        Sort by payments
      </FormLabel>
      <RadioGroup
        className={styles.group}
        aria-label="sorting"
        name="radio-buttons-group"
        onChange={(e) => handleChange(e.target.value as SortBy)}
      >
        <FormControlLabel value={SortBy.DESC} control={<Radio />} label={SortBy.DESC} />
        <FormControlLabel value={SortBy.ASC} control={<Radio />} label={SortBy.ASC} />
      </RadioGroup>
    </FormControl>
  );
}
