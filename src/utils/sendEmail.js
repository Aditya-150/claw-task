import Plunk from "@plunk/node";
import { render } from "@react-email/render";
import html2canvas from "html2canvas";
import JsBarcode from "jsbarcode";
import EventEmail from "../components/email/EventEmail";
import { createElement } from "react";
import ReactDOMServer from "react-dom/server";

const generateBarcodeImage = async (text) => {
  const canvas = document.createElement("canvas");
  JsBarcode(canvas, text, {
    format: "CODE128",
    background: "transparent",
    lineColor: "black",
  });

  const barcodeContainer = document.createElement("div");
  barcodeContainer.appendChild(canvas);
  document.body.appendChild(barcodeContainer);

  const barcodeImage = await html2canvas(barcodeContainer).then((canvas) => {
    const dataURL = canvas.toDataURL("image/png");
    document.body.removeChild(barcodeContainer);
    return dataURL;
  });

  return barcodeImage;
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
  const barcodeImage = await generateBarcodeImage(`${time} ${date}`);

  const emailHtml = render(
    createElement(EventEmail, {
      horse,
      date,
      time,
      location,
      eventLink,
      name,
      barcodeImage,
    })
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
