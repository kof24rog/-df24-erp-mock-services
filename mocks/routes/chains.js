const DATA_LIST_ADMIN_SUCCESS = require("../fixtures/chains/list/@admin/success.json");
const {
  getMiddlewareFindELementOptions,
  getMiddlewareCollectionOptions,
  getMiddlewareUpdateELementOptions,
  getMiddlewareDeleteELementOptions,
  getMiddlewareCreateELementOptions,
} = require("../../utils/middleware/defaults");
const f = require("../../utils/middleware/filter-data");
const s = require("../../utils/middleware/query-data");

module.exports = [
  {
    id: "customer-chains-catalog",
    url: "/chains",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareCollectionOptions(
          DATA_LIST_ADMIN_SUCCESS,
          f.chains,
          s.chains
        ),
      },
    ],
  },
  {
    id: "customer-chains-find-by-id",
    url: "/chains/:id",
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
    id: "customer-chains-create",
    url: "/chains",
    method: "POST",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareCreateELementOptions(),
      },
    ],
  },
  {
    id: "customer-chains-update-by-id",
    url: "/chains/:id",
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
    id: "customer-chains-delete-by-id",
    url: "/chains/:id",
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
