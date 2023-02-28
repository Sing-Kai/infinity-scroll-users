import { useState, useEffect, useCallback } from "react";


const useFetch = (url, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchData(url);
  }, [page]);

  const fetchData = async (url) => {
    try{
      await setLoading(true);
      await setError(false);
      const res = await fetch(url);
      const data = await res.json();
      await setUsers((prev) => [...prev, ...data])
      setLoading(false);

    } catch (err){
      setError(true);
    }
  }
  return {loading, error, users};
}

export default useFetch;
