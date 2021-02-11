import React from 'react';

export function Footer(props) {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>&copy; { new Date().getFullYear() } Feline Folia </strong>
        </p>
        <p>Questions? Comments? <a href="mailto:hello@felinefolia.com">hello@felinefolia.com</a></p>
      </div>
    </footer>
  );
}