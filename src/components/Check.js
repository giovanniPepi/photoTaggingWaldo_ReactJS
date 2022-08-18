import { mdiCheck } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const Check = () => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiCheck,
    color: "#84CC16",
    size: 0.8,
  });

  const { path, color, size } = btnInfo;

  return <Icon path={path} size={size} color={color} />;
};

export default Check;
