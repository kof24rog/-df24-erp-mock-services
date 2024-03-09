const {
  getMiddlewareFindELementOptions,
  getMiddlewareCollectionOptions,
  getMiddlewareDefaultJsonOptions,
  getMiddlewareDeleteELementOptions,
  getMiddlewareUpdateELementOptions,
} = require("../../utils/middleware/defaults");
const f = require("../../utils/middleware/filter-data");
const s = require("../../utils/middleware/query-data");

const {
  tranform: transformToCheckpointReview,
} = require("../../utils/transform/checkpoint-review");

const DATA_LIST_ADMIN_SUCCESS = require("../fixtures/orders/list/@admin/success.json");
const DATA_STATUS_ADMIN_SUCCESS = require("../fixtures/orders/commons/order-status/@admin/success.json");
const DATA_CREATE_CHECKOUT_ADMIN_SUCCESS = require("../fixtures/orders/checkout/create/@salesman/success.json");
const DATA_REVIEW_CHECKOUT_ADMIN_SUCCESS = require("../fixtures/orders/checkout/review/@salesman/success.json");

const DATA_CHECKPOINT_REVIEW_SUCCESS = transformToCheckpointReview(
  DATA_LIST_ADMIN_SUCCESS
);

module.exports = [
  {
    id: "orders-list",
    url: "/orders",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareCollectionOptions(
          DATA_LIST_ADMIN_SUCCESS,
          f.orders,
          s.orders
        ),
      },
    ],
  },
  {
    id: "orders-checkpoint-reject-by-id",
    url: "/orders/checkpoint/review/rejected/:id",
    method: "PUT",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareUpdateELementOptions(
          DATA_CHECKPOINT_REVIEW_SUCCESS
        ),
      },
    ],
  },
  {
    id: "orders-checkpoint-approved-by-id",
    url: "/orders/checkpoint/review/approved/:id",
    method: "PUT",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareUpdateELementOptions(
          DATA_CHECKPOINT_REVIEW_SUCCESS
        ),
      },
    ],
  },
  {
    id: "orders-checkpoint-review",
    url: "/orders/checkpoint/review/:id",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareFindELementOptions(
          DATA_CHECKPOINT_REVIEW_SUCCESS
        ),
      },
    ],
  },
  {
    id: "orders-status-list",
    url: "/orders/status",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareDefaultJsonOptions(DATA_STATUS_ADMIN_SUCCESS),
      },
    ],
  },
  {
    id: "orders-status-find-by-id",
    url: "/orders/status/:id",
    method: "GET",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareDefaultJsonOptions(
          DATA_REVIEW_CHECKOUT_ADMIN_SUCCESS
        ),
      },
    ],
  },
  {
    id: "orders-find-by-id",
    url: "/orders/:id",
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
    id: "orders-process-checkout",
    url: "/orders/process-checkout",
    method: "POST",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareDefaultJsonOptions(
          DATA_CREATE_CHECKOUT_ADMIN_SUCCESS
        ),
      },
    ],
  },
  {
    id: "orders-status-delete-by-id",
    url: "/orders/:id",
    method: "DELETE",
    variants: [
      {
        id: "@admin/success",
        type: "middleware",
        options: getMiddlewareDeleteELementOptions(DATA_LIST_ADMIN_SUCCESS),
      },
    ],
  },
  {
    id: "orders-status-update-by-id",
    url: "/orders/status/:id",
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
    id: "orders-download-by-id",
    url: "/orders/download/:id",
    variants: [
      {
        id: "@admin/success",
        type: "file",
        options: {
          status: 200,
          path: "mocks/files/orders/@admin/default.pdf",
          options: {
            maxAge: 500,
          },
        },
      },
    ],
  },
];
