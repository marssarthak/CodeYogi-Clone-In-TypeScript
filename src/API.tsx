import axios from "axios";
import { LecturesType } from "./models/lectures";
import { AssignmentType, AssignmentDetailsType } from "./models/assignment";
import { profileType } from "./models/profile";

const API_BASE_URL = "https://api.codeyogi.io/";
const USERS_API_URL = "https://randomuser.me/api/?results=";

export const getLectures = async () => {
  const response = await axios.get<LecturesType[]>(
    API_BASE_URL + "batches/1/sessions",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const getAssignment = async () => {
  const response = await axios.get<AssignmentType[]>(
    API_BASE_URL + "batches/1/assignments",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const getAssignmentDetails = async (id) => {
  const response = await axios.get<AssignmentDetailsType>(
    API_BASE_URL + "assignments/" + id,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const submitAssignment = (submissionLink, id) => {
  const responsePromise = axios.put(
    API_BASE_URL + `assignment/${id}/submit`,
    { submissionLink: submissionLink },
    { withCredentials: true }
  );

  return responsePromise
    .then((response) => {
      return response.data.submission_link;
    })
    .catch((e) => {
      console.log("Submitting Assignment failed with error ", e);
      return "";
    });
};

export const getUsers = () => {
  const responsePromise = axios.get(USERS_API_URL + "9");

  return responsePromise
    .then((response) => {
      return response.data.results;
    })
    .catch(handelError);
};

export const getProfile = async () => {
  const response = await axios.get<{ data: profileType }>(API_BASE_URL + "me", {
    withCredentials: true,
  });
  return response.data.data;
};

const handelError = (e) => {
  console.log("Error in Fetching data with error ", e);
  return [];
};
