const { decorateElement, decorateCollection } = require("./response-decorator");
const { getById } = require("./get-by-property");
const { paginate, count } = require("./handler-data");

const getMiddlewareCreateELementOptions = () => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  return {
    middleware: (req, res, next, core) => {
      console.log("getMiddlewareCreateELementOptions");
      res.status(200);
      res.send(
        decorateElement({
          ...req.body,
          id: getRandomInt(1000),
          createdAt: new Date(),
        })
      );
    },
  };
};

const getMiddlewareUpdateELementOptions = (DATA_SOURCE) => {
  return {
    middleware: (req, res, next, core) => {
      console.log("getMiddlewareUpdateELementOptions");
      let data = getById(req, DATA_SOURCE);
      if (data) {
        const { id } = req.params;
        res.status(200);
        res.send(
          decorateElement({
            ...data,
            updatedAt: new Date(),
          })
        );
      } else {
        res.status(404);
        res.send();
      }
    },
  };
};

const getMiddlewareDeleteELementOptions = (DATA_SOURCE) => {
  return {
    middleware: (req, res, next, core) => {
      console.log("getMiddlewareDeleteELementOptions");
      let data = getById(req, DATA_SOURCE);
      if (data) {
        const { id } = req.params;
        res.status(200);
        res.send(
          decorateElement({
            id,
            updatedAt: new Date(),
          })
        );
      } else {
        res.status(404);
        res.send();
      }
    },
  };
};

const getMiddlewareFindELementOptions = (DATA_SOURCE) => {
  return {
    middleware: (req, res, next, core) => {
      console.log("getMiddlewareFindELementOptions");
      let data = getById(req, DATA_SOURCE);
      if (data) {
        res.status(200);
        res.send(decorateElement(data));
      } else {
        res.status(404);
        res.send();
      }
    },
  };
};

const getMiddlewareCollectionOptions = (DATA_SOURCE, filter, searcher) => {
  return {
    middleware: (req, res, next, core) => {
      console.log("getMiddlewareCollectionOptions");
      let data = filter(req, DATA_SOURCE);
      data = searcher(req, data);
      res.status(200);
      res.send(
        decorateCollection(paginate(req, data), data.length, count(req, data))
      );
    },
  };
};

const getMiddlewareDefaultJsonOptions = (DATA_SOURCE) => {
  1;
  return {
    middleware: (req, res, next, core) => {
      console.log("getMiddlewareDefaultJsonOptions");
      res.status(200);
      res.send(decorateCollection(DATA_SOURCE));
    },
  };
};

module.exports = {
  getMiddlewareFindELementOptions,
  getMiddlewareCollectionOptions,
  getMiddlewareDefaultJsonOptions,
  getMiddlewareDeleteELementOptions,
  getMiddlewareUpdateELementOptions,
  getMiddlewareCreateELementOptions,
};
