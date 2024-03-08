const DATA_LIST_ADMIN_SUCCESS = require("../fixtures/customers/list/@admin/success.json");
const {
  getMiddlewareFindELementOptions,
  getMiddlewareCollectionOptions,
  getMiddlewareUpdateELementOptions,
  getMiddlewareDeleteELementOptions,
} = require("../../utils/middleware/defaults");
const f = require("../../utils/middleware/filter-data");
const s = require("../../utils/middleware/query-data");

module.exports = [
  {
    id: "customers-catalog",
    url: "/customers",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareCollectionOptions(
          DATA_LIST_ADMIN_SUCCESS,
          f.customers,
          s.customers
        ),
      },
    ],
  },
  {
    id: "customers-find-by-id",
    url: "/customers/:id",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareFindELementOptions(DATA_LIST_ADMIN_SUCCESS),
      },
    ],
  },
  {
    id: "customers-update-by-id",
    url: "/customers/:id",
    method: "PUT",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareUpdateELementOptions(DATA_LIST_ADMIN_SUCCESS),
      },
    ],
  },
  {
    id: "customers-delete-by-id",
    url: "/customers/:id",
    method: "DELETE",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareDeleteELementOptions(DATA_LIST_ADMIN_SUCCESS),
      },
    ],
  },
];
