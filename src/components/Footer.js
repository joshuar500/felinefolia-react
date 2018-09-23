import React from 'react';

export function Footer(props) {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>&copy; Feline Folia { new Date().getFullYear() }</strong> by <a href="http://joshrincon.com">Josh Rincon</a> &amp; <a>Cayla Ramirez</a>.
        </p>
        <p>Questions? Comments? <a href="mailto:hello@felinefolia.com">hello@felinefolia.com</a></p>
      </div>
    </footer>
  );
}