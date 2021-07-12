import { ImSad } from "react-icons/im";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.notfound}>
      <h1>Page not found 404...</h1>
      <span>
        <ImSad className={classes.notfound__sadIcon} />
      </span>
    </div>
  );
};

export default NotFound;
