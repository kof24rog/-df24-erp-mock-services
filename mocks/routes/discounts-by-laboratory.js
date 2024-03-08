const DATA_LIST_ADMIN_SUCCESS = require("../fixtures/discounts/laboratory/list/@admin/success.json");
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
    id: "discounts-laboratory-catalog",
    url: "/discounts/laboratory",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareCollectionOptions(
          DATA_LIST_ADMIN_SUCCESS,
          f.laboratoryDiscounts,
          s.laboratoryDiscounts
        ),
      },
    ],
  },
  {
    id: "discounts-laboratory-find-by-id",
    url: "/discounts/laboratory/:id",
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
    id: "discounts-laboratory-create",
    url: "/discounts/laboratory",
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
    id: "discounts-laboratory-update-by-id",
    url: "/discounts/laboratory/:id",
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
    id: "discounts-laboratory-delete-by-id",
    url: "/discounts/laboratory/:id",
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
