import React from 'react';
import Carousel from "../carousel/carousel";

const BigCard = () => {
  // вынести на отдельны слой
  const models = [
    {
      photo:"https://firebasestorage.googleapis.com/v0/b/furniture-store-530bc.appspot.com/o/armchairs%2F2.4.png?alt=media&token=a01eff67-7031-4a56-ad88-e36014a4d79d",
      color:"#2B3B47"
    },
    {
      photo:"https://firebasestorage.googleapis.com/v0/b/furniture-store-530bc.appspot.com/o/armchairs%2F7.1.png?alt=media&token=58ec527c-5b62-4e45-b33e-741d64519416",
      color:"#afa264"
    }
  ];

  return (
    <div className="big-card">
      <div>
        <Carousel models={models}/>
      </div>
      <div>
        name
        stars
        description
      </div>
      <div>
        price
        btn
      </div>
    </div>
  );
};

export default BigCard;
