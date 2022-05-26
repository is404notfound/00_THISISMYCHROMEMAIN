import React, { FC } from 'react';
import ItemCardComponent, { IItem } from 'components/ItemCardComponent';

export interface IProps {
    itemList: IItem[] | [];
}

const ItemList: FC<IProps> = (props: IProps) => {
  const { itemList } = props;

  return (
    <ul className="item-list horizontal-list">
      {itemList.map((item) => (<ItemCardComponent item={item} />))}
    </ul>
  );
};
export default ItemList;
