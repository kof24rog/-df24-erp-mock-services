const DATA_LIST_ADMIN_SUCCESS = require("../fixtures/discounts/product/list/@admin/success.json");
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
    id: "discounts-product-catalog",
    url: "/discounts/product",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareCollectionOptions(
          DATA_LIST_ADMIN_SUCCESS,
          f.productDiscounts,
          s.productDiscounts
        ),
      },
    ],
  },
  {
    id: "discounts-product-find-by-id",
    url: "/discounts/product/:id",
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
    id: "discounts-product-create",
    url: "/discounts/product",
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
    id: "discounts-product-batch",
    url: "/discounts/product/batch",
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
    id: "discounts-product-update-by-id",
    url: "/discounts/product/:id",
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
    id: "discounts-product-delete-by-id",
    url: "/discounts/product/:id",
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
