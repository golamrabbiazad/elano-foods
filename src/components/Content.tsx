import React from 'react';
import ImageOne from '../../public/images/elanjo-1.jpeg';
import ImageTwo from '../../public/images/elanjo-2.jpeg';

const Content = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-inter py-40">
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Elanjo Egg</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$19.99</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-inter py-40">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Elanjo Pizza</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$21.99</span>
        </div>
      </div>
    </>
  );
};

export default Content;
