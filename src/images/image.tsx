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
    />
  );
}

export function BarefootImage() {
  return (
    <StaticImage
      height={100}
      src={"./trained-coach-badge.png"}
    />
  );
}

export function ICFImage() {
  return (
    <StaticImage
      height={100}
      src={"./icf-member-badge.png"}
    />
  );
}

export function GottmanImage() {
  return (
    <StaticImage
      height={100}
      src={"./gottman-level1.png"}
    />
  );
}

export function ProfileImage() {
  return (
    <StaticImage
      border-radius={"500px"}
      src={"./maria-mateescu-portrait.jpeg"}
    />
  );
}