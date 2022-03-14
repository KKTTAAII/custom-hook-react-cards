import { useState } from "react";
import axios from "axios";

const useAxios = url => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  const getResponse = async (addedURL = "") => {
    try {
      const resp = await axios.get(url + addedURL);
      setResponse([...response, resp]);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return [response, getResponse, error];
};

export default useAxios;
