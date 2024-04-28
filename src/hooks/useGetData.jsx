import React, { useEffect, useState } from "react";
import ApiClient from "../lib/utils/ApiClient";

const useGetData = (link) => {
  const [phases, setPhases] = useState("standby");
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    if (!data) {
      setPhases("loading");
      try {
        const request = ApiClient.get(link).then((res) => {
          return res.data;
        });
        setData(request);
      } catch (error) {
        console.log(error);
        return setIsError("Terjadi kesalahan.");
      } finally {
        setPhases("standby");
      }
    }
    return;
  }, []);
  return { data, phases, isError };
};

export default useGetData;
