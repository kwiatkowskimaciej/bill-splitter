import { useEffect, useState } from 'react';
import { splitBill } from '../billSplitter';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const testData = [
//   { name: 'John', amount: '12.45' },
//   { name: 'Bob', amount: '13.56' },
//   { name: 'Steven', amount: '1.43' },
//   { name: 'Kate', amount: '7.98' },
//   { name: 'Slave', amount: '4.43' },
//   { name: 'Pete', amount: '2.98' },
//   { name: 'Winston', amount: '8.43' },
//   { name: 'Bruce', amount: '3.80' },
// ];

const useFormSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      // await wait(2000);
      const transactions = await splitBill(data);
      setResponse(transactions);
    } catch (error) {
      setResponse('Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

  return { isLoading, response, setResponse, submit };
};

export default useFormSubmit;
