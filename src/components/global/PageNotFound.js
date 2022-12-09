import classes from "./PageNotFound.module.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className={classes.notFound}>
      <p>404 Page Not Found</p>
      <Link to="/home" className="btn">
        Go to Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
