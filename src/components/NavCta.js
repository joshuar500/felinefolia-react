import React from 'react';
import { Link } from "react-router-dom";

export function NavCta(props) {
  if (props.loggedIn) {
    return null;
  }
  return (
    <div className="nav-cta">
      Welcome! Come read our first blog post: <Link to="https://blog.felinefolia.com/posts/introducing-feline-folia/">Introducing Feline Folia</Link>
    </div>
  )
}