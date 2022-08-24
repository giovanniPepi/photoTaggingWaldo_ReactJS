import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const Loading = () => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiLoading,
    color: "#0EA5E9",
    size: 1,
    spin: 0.2,
  });

  const { path, color, size, spin } = btnInfo;

  return <Icon path={path} size={size} color={color} spin={spin} />;
};

export default Loading;
