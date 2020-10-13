import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />; //vamos ao console log, e ai conseguimos ver q as img q queremos tao nos urls e escolhemos um
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;