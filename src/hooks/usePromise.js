import { useState } from "react";

export const usePromise = (promise) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async (passedPromise) => {
    let promiseToResolve = promise || passedPromise;
    setLoading(true);
    try {
      const response = await promiseToResolve;
      setData(response);
    } catch (error) {
      debugger
      setLoading(false);
      setError(error);
    }
    setLoading(false);
  };

  return [fetchData, data, loading, error,setData];
};
