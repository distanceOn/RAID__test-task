const noop = () => {};

export const request = ({
  method = "GET",
  url = "https://api.npoint.io/3f762a68ac9529488098",
  path,
  type = "json",
  onSuccess = noop,
  onError = noop,
}) => {
  const req = new XMLHttpRequest();
  req.open(method, `${url}/${path}`);
  req.responseType = type;
  req.addEventListener("load", (event) => {
    const target = event.target;
    onError();
    onSuccess(target.response);
  });

  req.send();
};
