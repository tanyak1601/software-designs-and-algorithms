export interface Image {
  userID: string
  url: string
}

export interface User {
  userID: string
  username: string
  country: string
  name: string
}

interface Payment {
  totalSum: number
  date: string
}

export interface Account {
  userID: string;
  posts: number;
  payments: Payment[];
}

export enum SortBy {
  ASC = 'asc',
  DESC = 'desc'
}

export enum FilterBy {
  WITHOUT_POSTS = 'Without posts',
  MORE_THAN_HUNDRED_POSTS = 'More than 100 posts',
}

export interface TableParams {
  filter?: FilterBy[];
  sortBy?: SortBy;
  search?: string
};

export enum TableParamsTypes { 
  FILTER = 'FILTER',
  SORT_BY = 'SORT_BY',
  SEARCH = 'SEARCH',
}

export interface TableParamsAction {
  type: TableParamsTypes;
  payload: FilterBy[] | SortBy | string;
}

export interface CommonProps {
  dispatch: (val: TableParamsAction) => void;
}