import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PostList from './Components/PostList';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error has occurred.</h1>;
    }

    return this.props.children;
  }
}

const HomeScreen = () => <h3>home</h3>;

const ProfileScreen = () => <h3>profile</h3>;

const ShopScreen = () => {
  throw new Error('Error during render');
};

const App = () => (
  <BrowserRouter>
    <div className="container">
      <nav className="nav nav-pills">
        <NavLink exact className="nav-link" activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/profile">
          Profile
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/shop">
          Shop
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/postlist">
          PostList
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/socialmedia">
          SocialMedias
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/skills">
          Skills
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/experience">
          Experience
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/postlist"
          element={
            <ErrorBoundary>
              <PostList />
            </ErrorBoundary>
          }
        />
        <Route
          path="/socialmedia"
          element={
            <ErrorBoundary>
              <Example1 />
            </ErrorBoundary>
          }
        />
        <Route
          path="/skills"
          element={
            <ErrorBoundary>
              <Example2 />
            </ErrorBoundary>
          }
        />
        <Route
          path="/experience"
          element={
            <ErrorBoundary>
              <Example3 />
            </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;



