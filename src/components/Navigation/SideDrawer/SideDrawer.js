import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItens from "../NavigationItens/NavigationItens";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/AuxHoc/AuxTeste";
import classes from "./SideDrawer.css";

const sideDrawer = (props) => {
  let attachedClases = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClases = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedClases.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItens isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
