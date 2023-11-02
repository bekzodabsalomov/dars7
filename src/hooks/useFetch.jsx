import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error("Something went wrong");
        }

        const data = await request.json();

        setData(data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
        console.log(error.message);
      }
    };

    getData();
  }, [url]);

  return { data, error, isPending };
}