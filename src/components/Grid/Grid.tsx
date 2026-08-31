import type { ReactNode } from "react";
import "./Grid.css";

interface GridProps {
  children: ReactNode;
}

const Grid = ({ children }: GridProps) => {
  return <div className="grid">{children}</div>;
};

export default Grid;
