const DATA_LIST_ADMIN_SUCCESS = require("../fixtures/products/list/@admin/success.json");
const {
  getMiddlewareFindELementOptions,
  getMiddlewareCollectionOptions,
} = require("../../utils/middleware/defaults");
const f = require("../../utils/middleware/filter-data");
const s = require("../../utils/middleware/query-data");

module.exports = [
  {
    id: "products-catalog",
    url: "/products",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareCollectionOptions(
          DATA_LIST_ADMIN_SUCCESS,
          f.products,
          s.products
        ),
      },
    ],
  },
  {
    id: "products-find-by-id",
    url: "/products/:id",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareFindELementOptions(DATA_LIST_ADMIN_SUCCESS),
      },
    ],
  },
];
