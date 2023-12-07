export type SortListItemType = {
  name: string;
  sort: string;
}

export const sortList:SortListItemType[] = [
  {name: 'популярности', sort: 'rating'},
  {name: 'цене', sort: 'price'},
  {name: 'алфавиту', sort: 'title'},
];
