import { ImSad } from "react-icons/im";
import '../../style.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>Page not found 404...</h1>
      <span>
        <ImSad className="notfound__sadIcon" />
      </span>
    </div>
  );
};

export default NotFound;
