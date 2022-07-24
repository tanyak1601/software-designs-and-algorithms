import { TableParams, TableParamsAction, TableParamsTypes, SortBy, FilterBy } from './types';


export const tableParamsReducer = (state: TableParams, action: TableParamsAction): TableParams => {
  switch (action.type) {
    case TableParamsTypes.FILTER:
      return { ...state, filter: action.payload as FilterBy[] };
    case TableParamsTypes.SORT_BY:
      return { ...state, sortBy: action.payload as SortBy};
    case TableParamsTypes.SEARCH:
      return { ...state, search: action.payload as string };
    default:
      throw new Error('Invalid TableParams type');
  }
}