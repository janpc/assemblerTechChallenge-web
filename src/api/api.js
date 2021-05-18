import { request } from "./api-utils";

function getAllMemes(headers, type = "") {
  return request({
    url: `/${type}`,
    method: "GET",
    headers: headers,
  });
}

function getMeme(headers, id) {
  return request({
    url: `/meme/${id}`,
    method: "GET",
    headers: headers,
  });
}
function searchByTextInput(headers, data) {
  return request({
    url: `/search/${data}`,
    method: "GET",
    headers: headers,
  });
}

function searchByReference(headers, data, reference) {
  return request({
    url: `/search/${reference}/${data}`,
    method: "GET",
    headers: headers,
  });
}

export { getAllMemes, getMeme, searchByTextInput, searchByReference };
