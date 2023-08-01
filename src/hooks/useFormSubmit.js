import { useEffect, useState } from 'react';
import { splitBill } from '../billSplitter';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useFormSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      await wait(2000);
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

  return { isLoading, response, submit };
};

export default useFormSubmit;
