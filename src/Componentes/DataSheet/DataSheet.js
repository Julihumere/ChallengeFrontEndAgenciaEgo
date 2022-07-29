import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DataSheet.css";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { getModelsById } from "../../Redux/Actions";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function DataSheet() {
  const dispatch = useDispatch();
  const model = useSelector((state) => state.model);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getModelsById(id));
  }, [id]);

  const [current, setCurrent] = useState(0);

  let arrayModels =
    model.model_features && model.model_features.concat(model.model_features);
  const arrayLength = arrayModels && arrayModels.length;

  const nextSlide = () => {
    setCurrent(current === arrayLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? arrayLength - 1 : current - 1);
  };
  console.log(current);
  if (
    !Array.isArray(model.model_features) ||
    model.model_features.length <= 0
  ) {
    return null;
  }

  let numCards = [];

  for (let i = 0; i < arrayModels.length; i++) {
    numCards.push(i);
  }

  console.log(numCards);

  return (
    <div className="datasheet__container">
      <div className="model__title">
        <div className="model__title__photo">
          <img src={model.photo} alt="" />
        </div>
        <div className="model__title__text">
          <h4>{model.name}</h4>
          <h1>{model.title}</h1>
          <p>{model.description}</p>
        </div>
      </div>
      <div>
        <div>
          <section className="slider">
            <IoIosArrowBack className="left__arrow" onClick={prevSlide} />
            <IoIosArrowForward className="right__arrow" onClick={nextSlide} />
            {arrayModels &&
              arrayModels.map((e, i) => (
                <div
                  className={i === current ? "slideActive" : "slide"}
                  key={i}
                >
                  {i - 3 === current ||
                  i - 2 === current ||
                  i - 1 === current ||
                  i === current ||
                  i + 1 === current ||
                  i + 2 === current ||
                  i + 3 === current ? (
                    <div className="slider__cards_container">
                      <div className="slider__cards">
                        <img src={e.image} alt="" />
                        <h1>{e.name}</h1>
                        <p>{e.description}</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
          </section>
          <ul className="points">
            {numCards &&
              numCards.map((e, i) => (
                <li key={i} className="point">
                  {e}
                </li>
              ))}
          </ul>
        </div>
        <div className="slide__responsive">
          <section className="slider">
            <IoIosArrowBack className="left__arrow" onClick={prevSlide} />
            <IoIosArrowForward className="right__arrow" onClick={nextSlide} />
            {arrayModels &&
              arrayModels.map((e, i) => (
                <div
                  className={i === current ? "slideActive" : "slide"}
                  key={i}
                >
                  {i - 3 === current ||
                  i - 2 === current ||
                  i - 1 === current ||
                  i === current ||
                  i + 1 === current ||
                  i + 2 === current ||
                  i + 3 === current ? (
                    <div className="slider__cards_container">
                      <div className="slider__cards">
                        <img src={e.image} alt="" />
                        <h1>{e.name}</h1>
                        <p>{e.description}</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
          </section>
          <ul className="points">
            {numCards &&
              numCards.map((e, i) => (
                <li key={i} className="point">
                  {e}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="model__container">
        {model.model_highlights &&
          model.model_highlights.map((e) => (
            <div className="model__highlights">
              <div className="model__highlights__text">
                <h1>{e.title}</h1>
                <p>{e.content}</p>
              </div>
              <div className="model__highlights__photo">
                <img src={e.image} alt="" />
              </div>
            </div>
          ))}
      </div>

      <div className="model__types"></div>
      <footer className="home__footer"></footer>
    </div>
  );
}
