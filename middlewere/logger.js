// logger middlewere
export default function logger(req, res, next) {
  // log request api route
  console.log(req.method + "- " + req.path);

  // response data
  // keep reference of original res.json
  const originalJson = res.json;

  res.json = function (data) {
    console.log("Response Data:", data); // log the response
    return originalJson.call(this, data); // send response to client
  };

  // console.log("Logger middlewere");
  next();
}
