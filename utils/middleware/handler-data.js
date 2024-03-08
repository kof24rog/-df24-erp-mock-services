const paginate = (req, data) => {
  const query = req.query;
  const limit = parseInt(query._limit) || 5;
  const page = parseInt(query._page) || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return data.slice(startIndex, endIndex);
};

const count = (req, data) => {
  const query = req.query;
  const limit = parseInt(query._limit) || 5;
  const page = parseInt(query._page) || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const count = data.length - startIndex;
  return count > limit ? limit : count;
};

module.exports = { paginate, count };
