import React from "react";
import Form from "../Form/Form";
import CardPass from "../CardPass/CardPass";
import image from "../../assets/images/manipuri.jpg";

export default function BookRide() {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mt-24 mb-4 mx-auto max-w-[1500px]">
      <div
        className="col-span-1 h-[900px] hidden xl:flex rounded-xl relative p-12"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1620652151853-29b1cd304981?q=80)",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 right-0 lg:h-32 h-12 rounded-xl bg-gradient-to-b from-black to-transparent opacity-60 pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 lg:h-32 h-12 rounded-xl bg-gradient-to-t from-black to-transparent opacity-60 pointer-events-none z-10"></div>
        <div className="sticky top-36 h-max flex w-full">
          <CardPass
            name="Raghav Vyas"
            time="14:00"
            date="16 JUL 2024"
            location="101, Lucknow, Uttar Pradesh"
            horseName="Manipuri Horse"
            image={image}
          />
        </div>
      </div>
      <Form className="col-span-1" />
    </div>
  );
}
