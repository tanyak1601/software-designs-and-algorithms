import { cloneDeep } from 'lodash';

import { Image, User, Account, TableParams, SortBy, FilterBy } from './types';
import { Row } from './components';


type FnToCompose = (data: Row[]) => Row[];

export const dataConverter = (images: Image[], users: User[], accounts: Account[]): Row[] => {
  return users?.map(user => {
    const { userID, username, country, name} = user;
    const avatar = images?.find(el => el.userID === userID)?.url;
    const account = accounts?.find(el => el.userID === user.userID);
    const lastPayments = account?.payments?.reduce((acc, el) => acc + el.totalSum, 0);
    const posts = account.posts;

    return ({
      avatar,
      username,
      country,
      name,
      lastPayments,
      posts,
    });
  });
};

const searchByValue = (value: string): FnToCompose  => (data: Row[]) => {
  return data.filter(el => {
    const values = Object.values(el).map(item => {
      if (typeof item === 'string') {
        return item.toLowerCase();
      }
      return item;
    });

    return values.includes(value.toLowerCase());
  });
};

const findWithNumberOfPosts = (params: FilterBy[]): FnToCompose => (data: Row[]) => {
  const withoutPosts = params.includes(FilterBy.WITHOUT_POSTS) ? data.filter(el => el.posts === 0): [];
  const moreThanHundredPosts = params.includes(FilterBy.MORE_THAN_HUNDRED_POSTS) ? data.filter(el => el.posts >= 100): [];
  return [...withoutPosts, ...moreThanHundredPosts];
};

const sortByLastPayments = (data: Row[], sortBy?: SortBy): Row[] => {
  if(!sortBy) return data;
  const newData = cloneDeep(data);
  if (sortBy === SortBy.ASC) {
    return newData.sort((a, b) => a.lastPayments - b.lastPayments);
  }

  return newData.sort((a, b) => b.lastPayments - a.lastPayments);
};

const compose = (...funcs: FnToCompose[]): FnToCompose => {
  return (data: Row[]) => {
    return funcs.reduce((acc: Row[], cur: FnToCompose) => acc.concat(...cur(data)), []);
  };
};

const filterByUnicUserName = (data: Row[]): Row[] => data.filter((el, index, arr) => {
  return arr.findIndex(v => v.username === el.username) === index;
})

export const sortAndFilter = (data: Row[], tableParams: TableParams): Row[] => {
  const { filter, sortBy, search } = tableParams;
  const funcs = [];

  if (filter && filter.length) {
    funcs.push(findWithNumberOfPosts(tableParams.filter));
  }

  if (search) {
    funcs.push(searchByValue(search));
  }

  const resData = funcs.length ? filterByUnicUserName(compose(...funcs)(data)) : data;

  return sortByLastPayments(resData, sortBy);
};