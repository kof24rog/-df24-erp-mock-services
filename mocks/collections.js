const productRoutes = require("./route-collection/products.json");
const orderRoutes = require("./route-collection/orders.json");
const customerRoutes = require("./route-collection/customers.json");
const productDicountsRoutes = require("./route-collection/product-discounts.json");
const laboratoryDicountsRoutes = require("./route-collection/laboratory-discounts.json");
const providersRoutes = require("./route-collection/providers.json");
const chainRoutes = require("./route-collection/chains.json");
const additionalRoutes = require("./route-collection/additional-discounts.json");

module.exports = [
  {
    id: "base",
    routes: ["default-log-post:all-logger", "default-log-post-get:all-logger"],
  },

  {
    id: "admin",
    from: "base",
    routes: [
      ...productRoutes,
      ...orderRoutes,
      ...customerRoutes,
      ...productDicountsRoutes,
      ...laboratoryDicountsRoutes,
      ...providersRoutes,
      ...chainRoutes,
      ...additionalRoutes,
    ],
  },
];
