const decorateCollection = (data, total, count) => {
  return {
    status: "ok",
    total,
    count,
    data,
  };
};

const decorateElement = (data) => {
  return {
    status: "ok",
    data,
  };
};

module.exports = {
  decorateCollection,
  decorateElement,
};
