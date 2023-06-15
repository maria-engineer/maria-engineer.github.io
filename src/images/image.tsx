import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";

export default function ProfileImage() {
  return (
    <StaticImage
      className="pic-round-right"
      imgClassName="pic-round-right"
      width={400}
      height={400}
      data-toggle="tooltip"
      title="Photo by @nxusr"
      alt="photo of Maria Mateescu taken by nxusr"
      src={"./profile.png"}
    />
  );
}
