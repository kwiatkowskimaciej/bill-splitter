const splitBill = (data) => {
  const newData = data
    .map((item) => ({
      ...item,
      amount: parseFloat(item.amount),
    }))
    .sort((a, b) => a.amount - b.amount);

  const total = newData.reduce(
    (total, person) => total + person.amount || 0,
    0
  );

  const items = newData.length;
  const avg = total / items;

  const diffList = newData.map((item) => ({
    ...item,
    amount: item.amount - avg,
  }));

  let transactions = [];
  let i = 0;
  let j = diffList.length - 1;
  let sender;
  let recipient;
  let amount;

  while (i < j) {
    sender = diffList[i];
    while (sender.amount < 0) {
      recipient = diffList[j];
      if (-sender.amount > recipient.amount) {
        amount = parseFloat(recipient.amount.toFixed(2));
        sender.amount += recipient.amount;
        recipient.amount = 0;
        if (amount > 0) {
          transactions.push({
            sender: sender.name,
            recipient: recipient.name,
            amount: amount,
          });
        }
        j -= 1;
      } else {
        amount = -sender.amount.toFixed(2);
        recipient.amount += sender.amount;
        sender.amount = 0;
        if (amount > 0) {
          transactions.push({
            sender: sender.name,
            recipient: recipient.name,
            amount: amount,
          });
        }
      }
    }
    i += 1;
  }

  return transactions;
};

export { splitBill };

// Data sample in case sth went wrong
// const data = [
//   { name: 'John', amount: '12.45' },
//   { name: 'Bob', amount: '13.56' },
//   { name: 'Steven', amount: '1.43' },
//   { name: 'Kate', amount: '7.98' },
// ];

// splitBill(data)
