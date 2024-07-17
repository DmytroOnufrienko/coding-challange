import { FC } from "react";

interface SpinnerProps {}

const Spinner: FC<SpinnerProps> = () => {
  return <span className="loader"></span>;
};

export default Spinner;
