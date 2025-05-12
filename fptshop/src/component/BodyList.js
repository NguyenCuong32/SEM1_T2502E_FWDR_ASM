import React from 'react';

const BodyList = ({ data }) => {
  return (
    <div className="music-item">
      <img src={data.image} alt={data.title} style={{ width: '100%', borderRadius: '10px' }} />
      <h4 style={{ margin: '10px 0 5px' }}>{data.title}</h4>
      <div>
        {'★'.repeat(data.rating)}{'☆'.repeat(5 - data.rating)}
      </div>
    </div>
  );
};

export default BodyList;
