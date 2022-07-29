import React from "react";
import { filterByModels, filterByYearAndPrice } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import "./Filters.css";

export default function Filters() {
  const dispatch = useDispatch();
  const handleFilterDiets = (e) => {
    dispatch(filterByModels(e.target.value));
  };
  const handleFiltersByYearAndPrice = (e) => {
    dispatch(filterByYearAndPrice(e.target.value));
  };
  return (
    <div>
      <nav className="filters__container">
        <div className="filters__buttons">
          <h2>Filtrar por</h2>
          <button
            onClick={(e) => handleFilterDiets(e)}
            value="all"
            className="home__filters__button"
          >
            Todos
          </button>
          <button
            onClick={(e) => handleFilterDiets(e)}
            value={"Sedan"}
            className="home__filters__button"
          >
            Autos
          </button>
          <button
            onClick={(e) => handleFilterDiets(e)}
            value="Pickups y Comerciales"
            className="home__filters__button"
          >
            Pickups y Comerciales
          </button>
          <button
            onClick={(e) => handleFilterDiets(e)}
            value="SUVs"
            className="home__filters__button"
          >
            SUVs y Crossovers
          </button>
        </div>
        <div className="filters__select__buttons">
          <select
            onChange={(e) => handleFilterDiets(e)}
            className="filters__select__buttons"
          >
            <option hidden>Filtrar por</option>
            <option value="all" className="home__filters__button">
              Todos
            </option>
            <option value={"Sedan"} className="home__filters__button">
              Autos
            </option>
            <option
              value="Pickups y Comerciales"
              className="home__filters__button"
            >
              {" "}
              Pickups y Comerciales
            </option>
            <option value="SUVs" className="home__filters__button">
              {" "}
              SUVs y Crossovers
            </option>
          </select>
        </div>
        <div className="content-select">
          <select
            onChange={handleFiltersByYearAndPrice}
            className="filters__sort"
          >
            <option className="home__filters__options" hidden>
              Ordenar por
            </option>
            <option className="home__filters__options" value="all">
              Nada
            </option>
            <option className="home__filters__options" value="low">
              De menor a mayor precio
            </option>
            <option className="home__filters__options" value="high">
              De mayor a menor precio
            </option>
            <option className="home__filters__options" value="young">
              Mas nuevos primero
            </option>
            <option className="home__filters__options" value="old">
              Mas viejos primero
            </option>
          </select>
        </div>
      </nav>
      <div className="filters__underline"></div>
    </div>
  );
}
