import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
        <h1>I'm navigation bar</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
