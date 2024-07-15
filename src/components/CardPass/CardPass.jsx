/* eslint-disable react/prop-types */
import React from "react";
import logo from "../../assets/images/logo.svg";
import Barcode from "react-barcode";
import Tilt from "react-parallax-tilt";

export default function CardPass ({name, time, date, image, horseName, location}) {
    return (
      <Tilt
        glareEnable={true}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        glareColor={"rgb(0,0,0)"}
        glareBorderRadius={"12px"}
        className="w-full h-full"
      >
        <div
          className="bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-200
 rounded-xl flex flex-col justify-between p-8 gap-32 text-white w-full"
        >
          <div className="flex-shrink-0 flex row items-start justify-between">
            <div className="flex flex-col items-start gap-3">
              <h2 className="uppercase font-semibold text-lg">{name}</h2>
              <div>
                <p className="font-regular text-base">{time + " - " + date}</p>
                <p className="font-regular text-sm">{">" + location}</p>
              </div>
            </div>
            <img src={logo} alt="logo" className="h-full" />
          </div>
          <div className="flex-shrink-0 flex row items-end justify-between">
            <div className="flex row items-center justify-between gap-2">
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white"
                src={image}
                alt="Image Description"
              />
              <p>{horseName}</p>
            </div>
            <Barcode
              value={time + " " + date}
              background="transparent"
              lineColor="white"
              className="w-48 h-fit"
            />
          </div>
        </div>
      </Tilt>
    );
}