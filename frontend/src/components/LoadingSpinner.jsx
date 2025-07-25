import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="pre-loader">
      <div className="loader-inner">
        <span className="loader before">Loading..</span>
        <span className="loader">Loading..</span>
        <span className="loader after">Loading..</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
