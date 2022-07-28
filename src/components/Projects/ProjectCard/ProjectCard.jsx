import React from "react";

import { FaCode } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

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
        <img src={image} alt={name} loading='lazy' />
      </div>
      <div className='project--desc--slide'>
        <p className='project--desc'>{desc}</p>

        <div className='project--showcaseBtn'>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
            className={"iconBtn"}
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()}-demo`}>
            <BiLinkExternal
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
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()}-code`}>
            <FaCode
              id={`${name.replace(" ", "-").toLowerCase()}-code`}
              className={"icon"}
              aria-label='Code'
            />
          </a>
        </div>
      </div>

      <div className='project--lang'>
        {tags.map((tag, id) => (
          <span key={id}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
