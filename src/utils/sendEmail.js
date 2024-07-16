// src/utils/sendEmail.js
import Plunk from "@plunk/node";
import { render } from "@react-email/render";
import { createCanvas } from "canvas";
import JsBarcode from "jsbarcode";
import EventEmail from "../components/email/EventEmail";

const generateBarcode = (text) => {
  const canvas = createCanvas();
  JsBarcode(canvas, text, {
    format: "CODE128",
    background: "transparent",
    lineColor: "black",
  });
  return canvas.toDataURL("image/png");
};

const sendEmail = async ({
  horse,
  date,
  time,
  location,
  eventLink,
  name,
  to,
}) => {
  const barcodeImage = generateBarcode(`${time} ${date}`);

  const emailHtml = render(
    <EventEmail
      horse={horse}
      date={date}
      time={time}
      location={location}
      eventLink={eventLink}
      name={name}
      barcodeImage={barcodeImage}
    />
  );

  const plunk = new Plunk(
    "pk_4231496fe30f4ad6b21a7f275990004618f0003654445c30"
  );

  try {
    const success = await plunk.emails.send({
      to: to,
      subject: "Your Horse Ride Booking Details",
      body: emailHtml,
    });
    console.log("Email sent successfully:", success);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
