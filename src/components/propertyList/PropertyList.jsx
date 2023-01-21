import React from "react";
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o="
          alt="property_Image"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cottage</h1>
          <h2>233 Resort</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o="
          alt="property_Image"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Glamping</h1>
          <h2>233 Palace</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt="property_Image"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>233 Tourist place</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
          alt="property_Image"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
          alt="property_Image"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
