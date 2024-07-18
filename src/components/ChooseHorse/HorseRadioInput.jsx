import React from "react";
import { Drawer } from "vaul";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HorseRadioInput = ({ horse, selectedHorse, onSelect }) => {
  return (
    <div
      className={`p-6 bg-white rounded-lg flex items-center mb-4 transition-all border-2 hover:scale-95 hover:border-primary ${
        selectedHorse === horse.name
          ? "border-primary shadow-lg shadow-primary/30"
          : "border-gray-200"
      }`}
      onClick={() => onSelect(horse.name)}
    >
      <input
        type="radio"
        name="horse"
        value={horse.name}
        checked={selectedHorse === horse.name}
        onChange={() => onSelect(horse.name)}
        className="hidden"
      />
      <img
        src={horse.image}
        alt={horse.name}
        className="size-14 rounded-xl mr-4"
      />
      <div className="flex-1 space-y-1">
        <p className="font-semibold text-base">{horse.name}</p>
        <ViewDetails horse={horse} />
      </div>
      <p className="text-base font-medium">
        ₹{horse.price} <span className="text-xs text-gray-500">/ hr</span>
      </p>
    </div>
  );
};

const ViewDetails = ({ horse }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={horse.carousel[i].image}
            alt={`Thumbnail ${i + 1}`}
            style={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Drawer.Root>
      <Drawer.Trigger className="text-primary cursor-pointer hover:text-primary-dark text-sm font-medium">
        View Details
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 border-none bg-black bg-opacity-50 z-50" />
        <Drawer.Content className="fixed inset-0 border-none bg-white p-4 rounded-lg shadow-lg z-50 overflow-y-auto touch-pan-y h-[calc(200vh)]">
          <Drawer.Handle className="w-full h-8 bg-gray-300 rounded-t-lg" />
          <div className="mx-auto sm:max-w-xl max-w-fit slider-container pt-4">
            <Slider {...settings}>
              {horse.carousel.map((image) => (
                <div
                  key={image.id}
                  className="w-full h-96 rounded-lg overflow-hidden"
                >
                  <img
                    src={image.image}
                    alt={`Image ${image.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
            <div className="flex flex-row items-center justify-between  mb-4">
              <h2 className="font-bold text-lg">{horse.name}</h2>
              <p className="text-lg font-medium">
                ₹{horse.price}{" "}
                <span className="text-xs text-gray-500">/ hr</span>
              </p>
            </div>
            <div className="space-y-2">
              <p>{horse.description}</p>
              <p>
                <span className="font-semibold">Color: </span>
                {horse.color}
              </p>
              <p>
                <span className="font-semibold">Height: </span>
                {horse.height}
              </p>
              <p>
                <span className="font-semibold">Temperament: </span>
                {horse.temperament}
              </p>
              <p>
                <span className="font-semibold">Unique Characteristics: </span>
                {horse.uniqueTraits}
              </p>
              <p>
                <span className="font-semibold">Ideal For: </span>
                {horse.idealFor}
              </p>
              <p className="italic">
                **Please note that color, height, temperament and traits may
                vary depending on availability and conditions.
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
      <style jsx global>{`
        .slick-slider {
          padding-bottom: 40px;
        }
        .slick-dots {
          position: relative;
          bottom: 0;
          margin-top: 20px;
        }
        .slick-thumb {
          display: flex !important;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .slick-thumb li {
          width: 100px;
          height: 100px;
          margin: 0 5px;
        }
        .slick-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      `}</style>
    </Drawer.Root>
  );
};

export default HorseRadioInput;
