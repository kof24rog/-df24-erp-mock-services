const getById = (req, data) => {
  let id = null;
  if (req.params && req.params.id) {
    return data.find((item) => {
      const id = req.params.id;
      return item.id === Number(id) || item.id === `${id}`;
    });
  }
  return null;
};

module.exports = { getById };
