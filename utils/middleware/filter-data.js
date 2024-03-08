const getFilter = (req) => {
  const query = req.query;
  if (query.f) {
    return query.f?.toLowerCase();
  }
  return null;
};

const getFilteredItems = (data, filter, filterCallback) => {
  if (filter && filterCallback) {
    return data.filter(filterCallback);
  }
  return data;
};

const products = (req, data) => {
  const filter = getFilter(req);
  let dataFiltered = data;
  if (filter) {
    const dataFiltered = getFilteredItems(data, filter, (item) => {
      const { filter: theFilter } = item;
      if (filter === "catalogue") {
        return true;
      }
      return theFilter === filter;
    });
  }

  return dataFiltered.map((product) => {
    const { filter: productFilter, ...result } = product;
    return { ...result };
  });
};

const orders = (req, data) => {
  const filter = getFilter(req);
  return getFilteredItems(data, filter, (item) => {
    const { status } = item;
    if (filter === "checkpoint" && status === "to-approve") {
      return true;
    }
    return false;
  });
};

const customers = (req, data) => {
  return data;
};

const providers = (req, data) => {
  return data;
};
const productDiscounts = (req, data) => {
  return data;
};

const laboratoryDiscounts = (req, data) => {
  return data;
};

const chains = (req, data) => {
  const filter = getFilter(req);
  return getFilteredItems(data, filter, (item) => {
    const { status } = item;
    if (filter === "active" && status === "active") {
      return true;
    }
    return false;
  });
};

additionalDiscounts = (req, data) => {
  return data;
};

productAdditionalDiscounts = (req, data) => {
  return data;
};

module.exports = {
  products,
  orders,
  customers,
  providers,
  productDiscounts,
  laboratoryDiscounts,
  chains,
  additionalDiscounts,
  productAdditionalDiscounts,
};
