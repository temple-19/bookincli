import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = ("https://dark-frog-dungarees.cyclic.app/api") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://dark-frog-dungarees.cyclic.app/api");
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, ["https://dark-frog-dungarees.cyclic.app/api"]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dark-frog-dungarees.cyclic.app/api");
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};
export default useFetch;
