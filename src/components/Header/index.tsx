import React, { ReactNode } from "react";

import "./styles.scss";

interface ChildrenProps {
  children: ReactNode;
}

export default function Header({ children }: ChildrenProps) {
  return <header>{children}</header>;
}
