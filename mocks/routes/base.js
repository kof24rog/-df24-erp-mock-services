module.exports = [
  {
    id: "default-log-post",
    url: "**",
    method: ["POST", "PUT"],
    variants: [
      {
        id: "all-logger",
        type: "middleware", // variant of type "middleware"
        options: {
          middleware: (req, res, next, core) => {
            console.log(
              "REQUEST:",
              req.method,
              req.url,
              JSON.stringify(req.body, null, 2)
            );
            next();
          },
        },
      },
    ],
  },
  {
    id: "default-log-post-get",
    url: "**",
    method: ["GET"],
    variants: [
      {
        id: "all-logger",
        type: "middleware", // variant of type "middleware"
        options: {
          middleware: (req, res, next, core) => {
            console.log("REQUEST:", req.method, req.url, req.query);
            next();
          },
        },
      },
    ],
  },
];
