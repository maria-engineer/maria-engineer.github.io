import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function MusicImage() {
  return (
    <StaticImage
      object={"cover"}
      border-radius={"20px"}
      width={240}
      height={200}
      src={"./chords.png"}
      alt={"Musical chords"}
    />
  );
}

export function BarefootImage() {
  return <StaticImage height={100} src={"./trained-coach-badge.png"} alt={"Barefoot Coaching Training Completion badge"}/>;
}

export function ICFImage() {
  return <StaticImage height={100} src={"./icf-member-badge.png"} alt={"ICF Member Badge"} />;
}

export function Gottman1Image() {
  return <StaticImage height={50} src={"./gottman-level1.png"} alt={"Gottman Level 1 Certificate Badge"} />;
}
export function Gottman2Image() {
  return <StaticImage height={50} src={"./gottman-level2.png"} alt={"Gottman Level 2 Certificate Badge"} />;
}

export function ProfileImage() {
  return (
    <StaticImage
      border-radius={"500px"}
      src={"./maria-mateescu-portrait.jpeg"}
      alt={"Photo of Maria Mateescu, Professional Coach and Software Engineer"}
    />
  );
}
