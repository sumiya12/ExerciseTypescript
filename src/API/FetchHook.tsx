import { User } from "../types/type";
import { useEffect, useState } from "react";

function FetchHook(Url: string): User | undefined {
  const [data, setData] = useState<User>();
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    // setLoading(true);
    fetch(Url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.results);
        setData(res.results[0]);
      });
    // .catch((e) => setError(e.message))
    // .finally(() => setLoading(false));
    // console.log(data);
  }, []);
  return data;
}

export default FetchHook;
