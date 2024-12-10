import React from "react";

const Logo = ({
  name,
  href,
}: {
  name: "logo-github" | "logo-xing" | "logo-linkedin";
  href: string;
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className="size-7" src={`/svg/${name}.svg`} alt={name}></img>
    </a>
  );
};

export default Logo;
