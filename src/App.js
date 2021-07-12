import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";
import BigArticle from "./components/FullArticles/BigArticle";
import { useDispatch } from "react-redux";
import { fetchPostData } from "./components/store/post-actions";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import NotFound from "./components/Layout/NotFound";
import Favourite from "./components/Favourites/Favourite";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostData());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/posts" />
        </Route>

        <Route path="/posts" exact>
          <MainPage />
        </Route>

        <Route path="/posts/:postId">
          <BigArticle />
        </Route>

        <Route path="/favourites">
          <Favourite />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
