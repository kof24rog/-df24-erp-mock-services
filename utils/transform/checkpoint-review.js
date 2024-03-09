const tranform = (data) => {
  return data.map((order) => {
    const { id, client: clientOrder, total: amount } = order;
    const client = {
      ...clientOrder,
      credit: {
        amount: 1000000,
        days: order.daysOfCredit,
      },
    };
    const available = 60354;
    const checkpointReview = {
      id,
      order: { id, amount },
      client,
      debt: {
        current: 1350,
        expired: 200,
      },
      credit: {
        available,
        after: amount - available,
      },
    };

    console.log("checkpointReview", checkpointReview);
    return checkpointReview;
  });
};

module.exports = {
  tranform,
};
