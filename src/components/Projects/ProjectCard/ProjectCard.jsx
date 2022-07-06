import React from "react";

import { FaPlay, FaCode } from "react-icons/fa";

import "./ProjectCard.css";

export default function ProjectCard({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
}) {
  return (
    <div key={id} className='projectCard'>
      <div className='projectContent'>
        <h2 id={name.replace(" ", "-").toLowerCase()}>{name}</h2>
        <img src={image} alt={name} />
        <div className='project--showcaseBtn'>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
            className={"iconBtn"}
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-demo`}>
            <FaPlay
              id={`${name.replace(" ", "-").toLowerCase()}-demo`}
              className={"icon"}
              aria-label='Demo'
            />
          </a>
          <a
            href={code}
            target='_blank'
            rel='noreferrer'
            className={"iconBtn"}
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-code`}>
            <FaCode
              id={`${name.replace(" ", "-").toLowerCase()}-code`}
              className={"icon"}
              aria-label='Code'
            />
          </a>
        </div>
      </div>
      <p className='project--desc'>{desc}</p>
      <div className='project--lang'>
        {tags.map((tag, id) => (
          <span key={id}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
