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
import logo from "../../assets/images/logo.png";
import { horseData } from "../Form/horseData";

const EventEmail = ({
  horse,
  date,
  time,
  location,
  eventLink,
  name,
  barcodeImage,
}) => {
    const horseObject = (horseData.filter((horseData) => horseData.name === horse));
    return (
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
        <Container className="bg-gradient-to-br from-secondary to-primary">
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2rem",
              gap: "2rem",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Text className="uppercase font-semibold text-lg">{name}</Text>
                <div>
                  <Text className="font-regular text-base uppercase">
                    {time + " - " + date}
                  </Text>
                  <Text className="font-regular text-sm">{">" + location}</Text>
                </div>
              </div>
              <Img src={logo} alt="logo" style={{ height: "100%" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Img
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                  src={horseObject.image}
                  alt="Image Description"
                />
                <p>{horse}</p>
              </div>
              <Img
                src={barcodeImage}
                alt="Barcode"
                style={{ width: "12rem", height: "fit-content" }}
              />
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
}

export default EventEmail;
