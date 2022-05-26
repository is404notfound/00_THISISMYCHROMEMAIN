import React, { FC, KeyboardEventHandler } from 'react';
import axios from 'axios';

export interface IProps {
  updateItem: Function;
}

export interface ISearchParam {
  searchEngine: string,
  googleAPIKey: string,
  query: string
}
const HeaderComponent: FC<IProps> = (props: IProps) => {
  const fetchData: Function = (param: ISearchParam) => {
    const { searchEngine, googleAPIKey, query } = param;
    const RequestURL = `https://www.googleapis.com/customsearch/v1?key=${googleAPIKey}&cx=${searchEngine}`;

    axios.get(`${RequestURL}&q=${query}`)
      .then((res) => {
        const { data } = res;
        const { items } = data;
        const { updateItem } = props;
        console.log('items', items);
        updateItem(items);
      });
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { keyCode, target } = event;
    const isEnter: boolean = keyCode === 13;
    const { value } = target as HTMLInputElement;

    if (!isEnter || !value) { return; }

    const param: ISearchParam = {
      searchEngine: '24b8a11152b02f6da',
      googleAPIKey: 'AIzaSyAL66B72BiRoxxDmAqQtlvRmPQuKulShrU',
      query: value,
    };

    fetchData(param);
  };

  return (
    <div className="header">
      <span className="input">
        <input
          className="search"
          type="text"
          placeholder="search keyword..."
          onKeyDown={onKeyDown}
        />
        <span />
      </span>
    </div>
  );
};

export default HeaderComponent;
