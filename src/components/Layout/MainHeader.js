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
    <header className='header'>
      <h1 className='header__title'>Simple Blog</h1>
      <nav>
        <ul className='header__item'>
          <NavLink
            to="/posts"
            className='header__link'
            onClick={resetCommentStateHandler}
            activeClassName='header__linkActive'
            exact={true}
          >
            <FaHome className='header__homeIcon' />Home Page
          </NavLink>
          <NavLink
            to="/favourites"
            className='header__link'
            activeClassName='header__linkActive'
            onClick={resetCommentStateHandler}
          >
            <AiFillStar className='header__favIcon' />Favourites
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
