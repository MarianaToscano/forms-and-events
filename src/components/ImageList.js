import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img src={image.urls.regular} /> //vamos ao console log, e ai conseguimos ver q as img q queremos tao nos urls e escolhemos um
  });

  return <div>{images}</div>;
};

export default ImageList;