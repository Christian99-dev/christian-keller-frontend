import React from "react";

const Logo = ({
  name,
  href,
  className
}: {
  name: "logo-github" | "logo-xing" | "logo-linkedin" | "logo-mail";
  href: string;
  className?: string
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${className}`}>
      <img className="hover:scale-125 size-7" src={`/svg/${name}.svg`} alt={name}></img>
    </a>
  );
};

export default Logo;
