import React from 'react';

export function Footer(props) {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>&copy; Feline Folia { new Date().getFullYear() }</strong> by <a href="https://ya.com">Josh Rincon &amp; Cayla Ramirez</a>.
        </p>
      </div>
    </footer>
  );
}