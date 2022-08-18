import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const Loading = () => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiLoading,
    color: "#0EA5E9",
    size: 0.8,
    spin: 0.25,
  });

  const { path, color, size, spin } = btnInfo;

  return <Icon path={path} size={size} color={color} spin={spin} />;
};

export default Loading;
