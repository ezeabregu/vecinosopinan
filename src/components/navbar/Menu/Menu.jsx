import React, { useEffect } from "react";
import { LinkContainerStyled, NavLinkContainer } from "./menuStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleOcultarMenuBurger } from "../../../redux/menuBurger/menuBurgerSlice";

const Menu = () => {
  const ocultarMenu = useSelector((state) => state.menuBurger.hidden);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ocultarMenu) {
      dispatch(toggleOcultarMenuBurger());
    }
  }, [dispatch, ocultarMenu]);

  const handleMenuClick = () => {
    dispatch(toggleOcultarMenuBurger());
  };

  return (
    <>
      {!ocultarMenu && (
        <LinkContainerStyled>
          <NavLinkContainer to="/map" onClick={() => handleMenuClick()}>
            <strong>BUSCAR</strong>
          </NavLinkContainer>
          <NavLinkContainer to="/about" onClick={() => handleMenuClick()}>
            <strong>SOBRE NOSOTROS</strong>
          </NavLinkContainer>
          {currentUser ? (
            <NavLinkContainer
              to="/accounts/account"
              onClick={() => handleMenuClick()}
            >
              <strong>{currentUser?.name?.toUpperCase()}</strong>
            </NavLinkContainer>
          ) : (
            <NavLinkContainer
              to="/accounts/login"
              onClick={() => handleMenuClick()}
            >
              <strong>INICIAR SESIÓN</strong>
            </NavLinkContainer>
          )}
        </LinkContainerStyled>
      )}
    </>
  );
};

export default Menu;
