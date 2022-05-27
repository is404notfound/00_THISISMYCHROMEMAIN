import React, { FC, ReactEventHandler } from 'react';

export interface IItem {
    link: string,
    title: string,
    snippet: string,
    pagemap: any
}

export interface IProps {
    item: IItem
}

const DEFAULT_IMG = { src: 'https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg' };

const ItemCardComponent: FC<IProps> = (props: IProps) => {
  const { item } = props;
  const {
    title, link, snippet, pagemap,
  } = item;
  const itemImg: Function = ({ cse_thumbnail, cse_image }: any) => {
    const FIRST_IDX = 0;
    const imgSrcObj = cse_thumbnail || cse_image;
    const imgSrc = imgSrcObj ? imgSrcObj[FIRST_IDX] : DEFAULT_IMG;
    const { src } = imgSrc;
    return src;
  };
  const handleImgError: ReactEventHandler = (e: any) => { e.target.src = DEFAULT_IMG; };

  return (
    <li className="item-card-wrap">
      <div className="item-image">
        <img className="item-image" src={itemImg(pagemap)} alt={title} onError={handleImgError} />
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="item-description">
          <h5 className="item-title">{title}</h5>
          <p className="item-snippet">{snippet}</p>
        </div>
      </a>
    </li>
  );
};

export default ItemCardComponent;
