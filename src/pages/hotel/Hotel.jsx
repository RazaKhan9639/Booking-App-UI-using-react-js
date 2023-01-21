import React from "react";
import "./hotel.css";
import NavBar from "./../../components/navbar/NavBar";
import Header from "./../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "./../../components/mailList/MailList";
import Footer from "./../../components/footer/Footer";

const Hotel = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (i) => {
    setOpen(true);
    setSlideIndex(i);
  };
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/296399887.webp?k=b462a1954cf254a1f45e35e9cd0590a1469c2090f3fe030203ad84d0223ae93c&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/278448042.webp?k=fd6d16996c69a9b735b8fdc6b2651f8f0f9c0c8d6a07fe8d736104b45b7bfda9&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/279313309.webp?k=a54d32af037b44786f48e4e95b5e6be8093addb10e138be1411bc868a551a883&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/215362763.webp?k=b7213849756b9568e546e9b137fd65dff567974572208a2d1154315840bbfb11&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/417781105.webp?k=ba6dff1c7aee01df3850a372330d69ae3afbf4b1b3ec2c6cd0eb4b7901d7d3e4&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/183065428.webp?k=998315e11238fdf8c745b6c4fa3de6328dc3a3d8cf0b4618504f8d258e5cd63b&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/296399887.webp?k=b462a1954cf254a1f45e35e9cd0590a1469c2090f3fe030203ad84d0223ae93c&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/183065428.webp?k=998315e11238fdf8c745b6c4fa3de6328dc3a3d8cf0b4618504f8d258e5cd63b&o=&s=1",
    },
  ];
  const handleMove = (dir) => {
    if (dir === "l") {
      if (slideIndex === 0) {
        setSlideIndex(photos.length - 1);
      } else {
        setSlideIndex(slideIndex - 1);
      }
    } else {
      if (slideIndex === photos.length - 1) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }
  };
  return (
    <div>
      <NavBar />
      <Header type="List" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideIndex].src}
                alt=""
                srcset=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} className="hotelIcon" />
            <span>Elton St 123 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a over $114 at this property and get a free airport
            shuttle,Taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImageWrapper">
                <img
                  onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt="hotel_img"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                tempora pariatur esse cupiditate quia magni modi fuga fugiat
                exercitationem ab accusamus, provident commodi ipsum! Numquam
                omnis quos hic minima consectetur. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nihil numquam iure praesentium quo
                quisquam pariatur mollitia adipisci eos, eum officiis, molestias
                a odio quis. Molestiae sequi temporibus natus illum dolor.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
