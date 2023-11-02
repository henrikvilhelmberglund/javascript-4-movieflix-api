import fetch from "node-fetch";

const response = {
  status: "Not found",
  statusCode: 404,
  data: null,
  error: null,
};

export const fetchData = async (endpoint, page = 1, query = null) => {
  let url = `${process.env.BASE_URL}${endpoint}?page=1&language=sv-SE&sort_by=popularity.desc&page=${page}`;

  if (query) {
    url += `&query=${query}`;
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };
  const result = await fetch(url, options);
  if (result.status === 200) {
    const data = await result.json();
    response.status = "Success";
    response.statusCode = 200;
    response.data = data;
    return response;
  } else if (result.status === 404) {
    response.status = "Error";
    response.error = `Could not find any movies (endpoint ${endpoint})`;
    return response;
  } else {
    console.log(result.status);
    return response;
  }
};

export default fetchData;
