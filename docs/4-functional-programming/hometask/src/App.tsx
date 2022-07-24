import { useState, useEffect, useReducer } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
import { dataConverter, sortAndFilter } from './helpers';
import { tableParamsReducer } from './reducers';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from './types';


function App() {
  const [data, setData] = useState<Row[]>([]);
  const [filteredData, setFilteredData] = useState<Row[]>([]);
  const [tableParams, dispatch] = useReducer(tableParamsReducer, {});

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]): void => {
      const data = dataConverter(images, users, accounts);
      setData(data)
      setFilteredData(data)
    });
  }, [])

  useEffect(() => {
    const filteredData = sortAndFilter(data, tableParams);
    setFilteredData(filteredData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableParams.filter, tableParams.search, tableParams.sortBy])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters dispatch={dispatch} />
            <Sort dispatch={dispatch} />
          </div>
          <Search dispatch={dispatch} />
        </div>
        <Table rows={filteredData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
