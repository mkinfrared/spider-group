import axios from "axios";

const api = axios.create({
  baseURL: "http://example.spider.ru",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default api;
