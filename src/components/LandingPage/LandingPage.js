import React from "react";
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import PalettePicker from "../PalettePicker/PalettePicker";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <main className="LandingPage">
      <PalettePicker />
      <ProjectsContainer />
    </main>
  );
}
