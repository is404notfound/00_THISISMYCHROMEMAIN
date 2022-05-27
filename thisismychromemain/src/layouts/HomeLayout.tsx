import React, { FC, useState } from 'react';
import HeaderComponent from 'components/HeaderComponent';
import { IItem } from 'components/ItemCardComponent';
import ItemList from '../views/ItemList';

const HomeLayout: FC = () => {
  const [itemList, setItemList] = useState<IItem[]>([]);
  const updateItems: Function = (items: IItem[]) => setItemList(items);

  return (
    <div className="home">
      <HeaderComponent updateItem={updateItems} />
      <ItemList itemList={itemList} />
    </div>
  );
};

export default HomeLayout;
