import React from "react";

import "./styles.scss";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function Header({ children }: ChildrenProps) {
  return <header>{children}</header>;
}
