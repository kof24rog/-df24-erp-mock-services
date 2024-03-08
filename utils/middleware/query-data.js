const getQuery = (req) => {
  const query = req.query;
  if (query.q) {
    return query.q?.toLowerCase();
  }
  return null;
};

const searchItems = (data, query, filter) => {
  if (query) {
    return data.filter(filter);
  }
  return data;
};

const products = (req, data) => {
  const search = getQuery(req);
  return searchItems(data, search, (item) => {
    const productName = item.name.toLowerCase();
    const activeIngredient = item.activeIngredient.toLowerCase();
    const brand = item.brand.toLowerCase();
    return (
      productName.includes(search) ||
      activeIngredient.includes(search) ||
      brand.includes(search)
    );
  });
};

const orders = (req, data) => {
  const search = getQuery(req);
  return searchItems(data, search, (item) => {
    const clientName = item.client.title.toLowerCase();
    const orderId = item.id.toString().trim().toLowerCase();
    const daysOfCredit = item.daysOfCredit.toString().trim().toLowerCase();

    return (
      clientName.includes(search) ||
      orderId === search ||
      daysOfCredit === search
    );
  });
};

const customers = (req, data) => {
  const search = getQuery(req);
  return searchItems(data, search, (item) => {
    const name = item.name.toLowerCase();
    const rif = item.rif.toLowerCase();
    const status = item.status.toLowerCase();
    const office = item.office.toLowerCase();

    return (
      name.includes(search) ||
      office.includes(search) ||
      status.includes(search) ||
      rif.includes(search)
    );
  });
};

const providers = (req, data) => {
  const search = getQuery(req);
  return searchItems(data, search, (item) => {
    const providerTitle = item.title.toLowerCase();
    const providerIdentity = item.rif.toLowerCase();

    return (
      providerTitle.toLowerCase().includes(search) ||
      providerIdentity.toLowerCase().includes(search)
    );
  });
};

const productDiscounts = (req, data) => {
  const search = getQuery(req);
  return searchItems(data, search, (item) => {
    const productTitle = item.product.title.toLowerCase();
    const discountTitle = item.title.toLowerCase();

    return productTitle.includes(search) || discountTitle.includes(search);
  });
};

const laboratoryDiscounts = (req, data) => {
  const search = getQuery(req);
  return searchItems(data, search, (item) => {
    const laboratoryTitle = item.laboratory.title.toLowerCase();
    const discountTitle = item.title.toLowerCase();

    return laboratoryTitle.includes(search) || discountTitle.includes(search);
  });
};

const chains = (req, data) => {
  const search = getQuery(req);
  return searchItems(data, search, (item) => {
    const chainTitle = item.title.toLowerCase();
    return chainTitle.includes(search);
  });
};

additionalDiscounts = (req, data) => {
  const search = getQuery(req);
  return searchItems(data, search, (item) => {
    const itemTitle = item.title.toLowerCase();
    return itemTitle.includes(search);
  });
};

productAdditionalDiscounts = (req, data) => {
  const search = getQuery(req);
  return searchItems(data, search, (item) => {
    const itemTitle = item.title.toLowerCase();
    return itemTitle.includes(search);
  });
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
