import { request } from "./request.js";

request({
  path: "data",
  onSuccess: (data) => {
    console.log(data);
  },
});
