import { useEffect, useState } from "react";
import getFirebase from "./firebase";

function useFirebase() {
  const [instance, setInstance] = useState(false);

  useEffect(() => {
    setInstance(!!getFirebase());
  }, []);

  return instance;
}

export default useFirebase;
