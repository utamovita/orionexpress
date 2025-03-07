import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  id: string;
};

function Portal({ children, id }: PortalProps) {
  const [container, setContainer] = useState<null | HTMLDivElement>(null);

  useEffect(() => {
    const el = document.createElement("div");
    el.setAttribute("id", id);
    setContainer(el);

    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  }, [id]);

  return container ? createPortal(children, container) : null;
}

export { Portal };
