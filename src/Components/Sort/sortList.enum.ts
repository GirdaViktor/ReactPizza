export type SortListItemType = {
  name: string;
  sort: 'rating' | 'title' | 'price';
}

export const sortList:SortListItemType[] = [
  {name: 'популярности', sort: 'rating'},
  {name: 'цене', sort: 'price'},
  {name: 'алфавиту', sort: 'title'},
];
