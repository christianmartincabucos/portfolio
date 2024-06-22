import React from "react";
const Footer = () => {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center bg-clip-text bg-gradient text-black fond-medium w-full">
        iamCMC @
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          2024
        </a>
      </p>
    </footer>
  );
}
export default Footer;
