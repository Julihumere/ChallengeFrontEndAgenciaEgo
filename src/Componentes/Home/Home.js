import React from "react";
import Models from "../Models/Models";
import "./Home.css";
import { useEffect } from "react";
import { getModels } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Filters/Filters";
export default function Modelos({ menuActive }) {
  const dispatch = useDispatch();
  const allModels = useSelector((state) => state.models);

  useEffect(() => {
    dispatch(getModels());
  }, []);

  console.log(allModels);

  return (
    <div>
      <div className="home__container">
        <div className="home__title">
          <h1>Descubrí todos los modelos</h1>
        </div>
        <div className="home__filters">
          <Filters />
        </div>

        <div className="home__cards">
          {allModels && allModels.length > 0
            ? allModels &&
              allModels.map((e) => (
                <Models
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  year={e.year}
                  price={e.price}
                  icon={e.thumbnail}
                />
              ))
            : null}
        </div>

        <footer className="home__footer"></footer>
      </div>
    </div>
  );
}
