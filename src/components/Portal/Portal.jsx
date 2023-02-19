import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
const Portal = ({ children }) => {
  const [root, setRoot] = useState();

  useEffect(() => {
    const portalRoot = document.createElement("div");
    document.body.appendChild(portalRoot);
    setRoot(portalRoot);

    return () => {
      document.body.removeChild(portalRoot);
    };
  }, [children]);
  if (!root) return null;
  return ReactDOM.createPortal(children, root);
};

export default Portal;
