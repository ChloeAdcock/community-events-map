import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentUser, logout } from "../../redux/actions/accounts/accounts";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.accounts.currentUser);

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Button component={Link} to="/map" color="inherit">
            Community Events
          </Button>
          {user ? (
            <div>
              <Button
                onClick={handleClick}
                component={Link}
                to="/login"
                color="inherit"
              >
                Logout
              </Button>
              <Button component={Link} to="/createevent" color="inherit">
                New Event
              </Button>
            </div>
          ) : (
            <div>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {/* Empty toolbar to prevent content being rendered under navbar */}
      <Toolbar />
    </div>
  );
}

export default Navbar;
