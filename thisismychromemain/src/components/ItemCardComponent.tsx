import React, { FC } from 'react';

export interface IItem {
    link: string,
    title: string,
    snippet: string,
    pagemap: any
}

export interface IProps {
    item: IItem
}

const ItemCardComponent: FC<IProps> = (props: IProps) => {
  const { item } = props;
  const {
    title, link, snippet, pagemap,
  } = item;
  const imgSrc = pagemap?.cse_image?.pop()?.src ?? '';
  console.log('mageSrc', imgSrc);

  return (
    <li className="item-card-wrap">
      <a href={link}>
        <div className="item-image">
          <div className="item-image-title" />
          <img className="item-image-title" src={imgSrc} alt={title} />
        </div>
      </a>
      <div className="item-description">
        <h5>{title}</h5>
        <p>{snippet}</p>
      </div>
    </li>
  );
};

export default ItemCardComponent;
