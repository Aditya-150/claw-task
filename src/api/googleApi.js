import { gapi } from "gapi-script";

const API_KEY = "AIzaSyDwYje_t5kyGRm_t5PzJTMzgz8U-BgfhOU";

const initClient = () => {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId:
        "1001998067971-ug2f1dqiiodhod5rlo7fau3n6noksua6.apps.googleusercontent.com",
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
      ],
      scope: "https://www.googleapis.com/auth/calendar.events",
    })
    .then(() => {
      // Ensure the client is signed in
      const authInstance = gapi.auth2.getAuthInstance();
      if (!authInstance.isSignedIn.get()) {
        authInstance.signIn();
      }
    })
    .catch((error) => {
      console.error("Error initializing Google API client: ", error);
    });
};

export const loadClient = () => {
  gapi.load("client:auth2", initClient);
};
