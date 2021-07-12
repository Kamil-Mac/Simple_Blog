import classes from "./MainHeader.module.css";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postActions } from "../store/post-slice";
import { AiFillStar } from 'react-icons/ai';

const MainHeader = () => {
  const dispatch = useDispatch();

  const resetCommentStateHandler = () => {
    dispatch(postActions.resetCommentsState());
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>Simple Blog</h1>
      <nav>
        <ul className={classes.header__item}>
          <NavLink
            to="/posts"
            className={classes.header__link}
            onClick={resetCommentStateHandler}
            activeClassName={classes.header__linkActive}
            exact={true}
          >
            <FaHome className={classes.header__homeIcon} />Home Page
          </NavLink>
          <NavLink
            to="/favourites"
            className={classes.header__link}
            activeClassName={classes.header__linkActive}
            onClick={resetCommentStateHandler}
          >
            <AiFillStar className={classes.header__favIcon} />Favourites
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
