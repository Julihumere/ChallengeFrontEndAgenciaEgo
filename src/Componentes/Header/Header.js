import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [Modelos, setModelos] = useState(false);
  const [Ficha, setFicha] = useState(false);
  const handleMouseOverModelos = () => {
    setModelos(true);
  };

  const handleMouseOutModelos = () => {
    setModelos(false);
  };

  const handleMouseOverFicha = () => {
    setFicha(true);
  };

  const handleMouseOutFicha = () => {
    setFicha(false);
  };

  const openMenu = () => {
    if (menuActive === false) {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
  };

  return (
    <div>
      <header className="header">
        <svg className="header__logo" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.1741 24.5553C32.1741 26.9013 30.3441 28.5239 28.0253 28.5239C25.6801 28.5239 23.8509 26.9013 23.8509 24.5553V14.6596C23.8509 12.3153 25.6801 10.7173 28.0253 10.7173C30.3441 10.7173 32.1741 12.3153 32.1741 14.6596V24.5553ZM22.5156 28.1882H20.6082L20.2741 27.0296C19.8092 27.9825 18.83 28.5239 17.8516 28.5239C15.6093 28.5239 14.1915 26.9013 14.1915 24.6581V14.5567C14.1915 12.5218 15.8932 10.7173 18.3404 10.7173C20.7884 10.7173 22.3864 12.5218 22.3864 14.5567V17.3915H19.2686V14.5057C19.2686 14.0161 18.9592 13.7067 18.3922 13.7067C17.8516 13.7067 17.5414 14.0161 17.5414 14.5057V24.7865C17.5414 25.2769 17.8771 25.6365 18.4177 25.6365C18.9847 25.6365 19.3196 25.2769 19.3196 24.7865V21.9789H18.4432V19.6584H22.5156V28.1882ZM13.0814 13.9388H9.53694V18.0358H11.9594V20.715H9.53694V25.1741H13.0814V28.1882H6.23809V11.0267H13.0814V13.9388ZM18.7705 0.849609C8.40304 0.849609 -6.10352e-05 9.25441 -6.10352e-05 19.621C-6.10352e-05 29.9876 8.40304 38.3916 18.7705 38.3916C29.1379 38.3916 37.541 29.9876 37.541 19.621C37.541 9.25441 29.1379 0.849609 18.7705 0.849609Z"
            fill="#12110F"
          />
        </svg>
        {menuActive === false ? (
          <nav className="header__nav">
            <ul>
              <li>
                <Link
                  onMouseOver={handleMouseOverModelos}
                  onMouseOut={handleMouseOutModelos}
                  to={"/"}
                >
                  Modelos
                </Link>
                {Modelos ? <div className="header__selected"></div> : null}
              </li>
              <li>
                <Link
                  onMouseOver={handleMouseOverFicha}
                  onMouseOut={handleMouseOutFicha}
                  to={"/"}
                >
                  Ficha de modelo
                </Link>
                {Ficha ? <div className="header__selected"></div> : null}
              </li>
            </ul>
          </nav>
        ) : (
          <div className="header__fondo"></div>
        )}

        <div className="header__title__menu">
          {menuActive === false ? (
            <>
              <h4>Menu</h4>
              <button id="logo" onClick={openMenu}>
                <AiOutlineMenu width={25} height={2} />
              </button>
            </>
          ) : (
            <div className="header__button__cerrar">
              <h4>Cerrar</h4>
              <button id="logo" onClick={openMenu}>
                <AiOutlineClose width={25} height={2} />
              </button>
              <button className="header__button__menu__responsive">
                <AiOutlineMenu />
              </button>
            </div>
          )}
        </div>
      </header>
      {menuActive ? (
        <>
          <div className="home__fondo"></div>
          <div className="home__menuActive">
            <div className="home__list_white">
              <div className="header__button__cerrar__responsive">
                <h3>
                  Cerrar{" "}
                  <button id="logo" onClick={openMenu}>
                    {" "}
                    <AiOutlineClose width={25} height={2} />
                  </button>
                </h3>
              </div>

              <ul>
                <li>Modelos</li>
                <li>Servicios y Accesorios</li>
                <li>Financiación</li>
                <li>Reviews y Comunidad</li>
              </ul>
              <div className="home__menuActive__line"></div>
              <ul>
                <li>Toyota Moblity Service</li>
                <li>Toyota Gazoo Racing</li>
                <li>Toyota Hibridos</li>
              </ul>
              <div className="home__menuActive__line"></div>
              <ul>
                <li>Concesionarios</li>
                <li>Test Drive</li>
                <li>Contacto</li>
              </ul>
            </div>

            <div className="home__menuActive__line"></div>
            <div className="home__list_grey">
              <ul>
                <li>Actividades</li>
                <li>Servicios al Cliente</li>
                <li>Ventas Especiales</li>
                <li>Innovación</li>
                <li>Prensa</li>
                <li>Acerca De</li>
              </ul>
            </div>
          </div>
        </>
      ) : null}
      <div className="line"></div>
    </div>
  );
}
