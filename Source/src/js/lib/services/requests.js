import $ from "../core";

$.prototype.get = async function (url, dataTypeAnswer = "json") {
  let res = fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case "json":
      return await res.json();
    case "text":
      return await await res.text();
    case "blob":
      return await await res.blob();
  }
};

$.prototype.post = async function (url, data, dataTypeAnswer = "text") {
  let res = fetch(url, {
    method: "POST",
    body: data,
  });

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case "json":
      return await res.json();
    case "text":
      return await await res.text();
    case "blob":
      return await await res.blob();
  }
};
