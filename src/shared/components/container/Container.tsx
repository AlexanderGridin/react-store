import React from "react";
import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className="Container">{children}</div>;
};

export default Container;
