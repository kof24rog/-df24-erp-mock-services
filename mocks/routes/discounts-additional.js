const DATA_LIST_ADMIN_SUCCESS = require("../fixtures/discounts/additional/list/@admin/success.json");
const DATA_PRODUCT_LIST_ADMIN_SUCCESS = require("../fixtures/discounts/additional/products/@admin/success.json");
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
    id: "discounts-additional-catalog",
    url: "/discounts/additional",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareCollectionOptions(
          DATA_LIST_ADMIN_SUCCESS,
          f.additionalDiscounts,
          s.additionalDiscounts
        ),
      },
    ],
  },
  {
    id: "discounts-additional-product-find-by-id",
    url: "/discounts/additional/:discountid/products/:id",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareFindELementOptions(
          DATA_PRODUCT_LIST_ADMIN_SUCCESS
        ),
      },
    ],
  },
  {
    id: "discounts-additional-update-product-find-by-id",
    url: "/discounts/additional/:discountid/products/:id",
    method: "PUT",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareUpdateELementOptions(
          DATA_PRODUCT_LIST_ADMIN_SUCCESS
        ),
      },
    ],
  },
  {
    id: "discounts-additional-create-product",
    url: "/discounts/additional/:discountid/products",
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
    id: "discounts-additional-product-batch",
    url: "/discounts/additional/:id/products/batch",
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
    id: "discounts-additional-delete-product",
    url: "/discounts/additional/:discountid/products/:id",
    method: "DELETE",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareDeleteELementOptions(
          DATA_PRODUCT_LIST_ADMIN_SUCCESS
        ),
      },
    ],
  },
  {
    id: "discounts-additional-product-list",
    url: "/discounts/additional/:id/products",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareCollectionOptions(
          DATA_PRODUCT_LIST_ADMIN_SUCCESS,
          f.productAdditionalDiscounts,
          s.productAdditionalDiscounts
        ),
      },
    ],
  },
  {
    id: "discounts-additional-find-by-id",
    url: "/discounts/additional/:id",
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
    id: "discounts-additional-create",
    url: "/discounts/additional",
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
    id: "discounts-additional-batch",
    url: "/discounts/additional/batch",
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
    id: "discounts-additional-update-by-id",
    url: "/discounts/additional/:id",
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
    id: "discounts-additional-delete-by-id",
    url: "/discounts/additional/:id",
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
