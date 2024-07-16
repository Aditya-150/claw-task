import { render } from "@react-email/components";
import EventEmail from "../components/email/EventEmail";

const sendEmail = async ({
  horse,
  date,
  time,
  location,
  eventLink,
  name,
  to,
}) => {
  const emailHtml = render(
    <EventEmail
      horse={horse}
      date={date}
      time={time}
      location={location}
      eventLink={eventLink}
      name={name}
    />
  );

  const REACT_APP_SENDGRID_API_KEY = "re_2nYxVCe6_LV4mQjmmU8J5eTQFkSssPanL";

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${REACT_APP_SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: to }],
          subject: "Your Horse Ride Booking Details",
        },
      ],
      from: {
        email: "adiityacreates@gmail.com",
      },
      content: [
        {
          type: "text/html",
          value: emailHtml,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Error sending email");
  }

  return response.json();
};

export default sendEmail;
