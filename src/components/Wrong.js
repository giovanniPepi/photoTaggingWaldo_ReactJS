import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const Wrong = () => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiClose,
    color: "red",
    size: 0.8,
  });

  const { path, color, size } = btnInfo;

  return <Icon path={path} size={size} color={color} />;
};

export default Wrong;
