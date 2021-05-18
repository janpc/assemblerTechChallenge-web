import axios from "axios";

export async function request({
  url = "/",
  method = "GET",
  body = {},
  headers = {},
}) {
  return await axios({
    url: process.env.REACT_APP_API_BASE_URL + url,
    method: method,
    data: body,
    headers: {
      Accept: "application/json",
      ...headers,
    },
  });
}
