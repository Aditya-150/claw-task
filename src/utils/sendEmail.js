import Plunk from "@plunk/node";
import { render } from "@react-email/render";
import html2canvas from "html2canvas";
import JsBarcode from "jsbarcode";
import EventEmail from "../components/email/EventEmail";
import { createElement } from "react";

const generateBarcodeImage = async (text) => {
  try {
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
  } catch (error) {
    console.error("Error generating barcode image:", error);
    throw error;
  }
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
  try {
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
      "sk_edd90823deaba804366d670752aa5f00be00d7118f61ee48"
    );

    const success = await plunk.emails.send({
      to: to,
      subject: "Your Horse Ride Booking Details",
      body: emailHtml,
    });

    console.log("Email sent successfully:", success);
    return success;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
