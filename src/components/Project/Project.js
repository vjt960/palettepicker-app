import React from "react";
import Palette from "../Palette/Palette";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";
import "./Project.scss";

const Project = props => {
  const palettes = props.palettes.map(palette => {
    return (
      <Palette
        title={palette.paletteTitle}
        colors={palette.paletteColors}
        key={palette.paletteId}
      />
    );
  });

  const { in: show, removeProject, project } = props;
  return (
    <Transition
      timeout={1000}
      mountOnEnter
      unmountOnExit
      appear
      in={show}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.55, {
          y: 0,
          autoAlpha: show ? 1 : 0,
          onComplete: done,
          delay: !show ? 0 : project.init ? props.index * 0.15 : 0
        });
      }}
    >
      <section className="Project">
        <div className="project-title">
          <h2>{props.title}</h2>
        </div>
        <div className="dotted-line" />
        <div className="delete-wrapper">
          <button
            onClick={() => removeProject(props.id)}
            className="project-delete"
          >
            <h2>X</h2>
          </button>
        </div>
        {palettes}
      </section>
    </Transition>
  );
};

export default Project;
