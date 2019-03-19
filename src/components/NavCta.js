import React from 'react';
import { Link } from "react-router-dom";

export function NavCta(props) {
  if (props.disableCTA) {
    return null;
  }
  return (
    <div className="nav-cta">
      Welcome! Come read our first blog post: <Link to="https://blog.felinefolia.com/posts/introducing-feline-folia/">Introducing Feline Folia</Link>
      <span className="icon mdi-light is-pulled-right" onClick={() => {}}>
        <i className="fas fa-ban"></i>
      </span>
    </div>
  )
}