// src/components/email/EventEmail.jsx
import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Link,
  Tailwind,
  Img,
} from "@react-email/components";
import logo from "../../assets/images/logo.svg";

const EventEmail = ({
  horse,
  date,
  time,
  location,
  eventLink,
  name,
  barcodeImage,
}) => (
  <Tailwind
    config={{
      theme: {
        extend: {},
      },
    }}
  >
    <Html>
      <Head />
      <Preview>Horse Ride Booking Details</Preview>
      <Body>
        <Heading>Your Horse Ride Booking Details</Heading>
        <Container>
          <div className="bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-200 rounded-xl flex flex-col justify-between p-8 gap-32 text-white w-full">
            <div className="flex-shrink-0 flex row items-start justify-between">
              <div className="flex flex-col items-start gap-3">
                <Text className="uppercase font-semibold text-lg">{name}</Text>
                <div>
                  <Text className="font-regular text-base uppercase">
                    {time + " - " + date}
                  </Text>
                  <Text className="font-regular text-sm">{">" + location}</Text>
                </div>
              </div>
              <Img src={logo} alt="logo" className="h-full" />
            </div>
            <div className="flex-shrink-0 flex row items-end justify-between">
              <div className="flex row items-center justify-between gap-2">
                <Img
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                  src={logo}
                  alt="Image Description"
                />
                <p>{horse}</p>
              </div>
              <Img src={barcodeImage} alt="Barcode" className="w-48 h-fit" />
            </div>
          </div>
        </Container>
        <Container>
          {eventLink && <Link href={eventLink}>View Event in Calendar</Link>}
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default EventEmail;
