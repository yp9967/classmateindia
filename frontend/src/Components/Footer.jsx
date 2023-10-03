import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";

function Footer() {
  return (
    <div className="Footer">
      <ul className="Footer-links">
        <li>
        <a
          className="Footer-link"
          href="https://teachforindia.org/about-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Story
        </a>
        </li>
        <li>
        <a
          className="Footer-link"
          href="https://teachforindia.org/education-crisis"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Ed Crisis
        </a>
        </li>
        <li>
        <a
          className="Footer-link"
          href="https://teachforindia.org/fellowship"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Model
        </a>
        </li>
        <li>
        <a
          className="Footer-link"
          href="https://teachforindia.org/our-impact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Impact
        </a>
        </li>
        <li>
        <a
          className="Footer-link"
          href="https://teachforindia.org/faqs"
          target="_blank"
          rel="noopener noreferrer"
        >
          FAQs
        </a>
        </li>
      </ul>
      <span className="Footer-copyright">
        © 2022 TEACH TO LEAD | ALL RIGHTS RESERVED
      </span>
      <ul className="Footer-social">
        <li>
          <a
            href="https://www.facebook.com/teachforindia?fref=apply"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer-social-icon"
          >
            <BiLogoFacebook />
          </a>
        </li>
        <li >
          <a
          className="Footer-social-icon"
            href="https://www.instagram.com/teachforindia/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <BiLogoInstagram /></a>
        </li>
        <li>
          <a
          className="Footer-social-icon"
            href="https://www.twitter.com/TeachForIndia"
            target="_blank"
            rel="noopener noreferrer"
          >
          <BiLogoTwitter /></a>
        </li>
        <li>
          <a
          className="Footer-social-icon"
            href="https://www.linkedin.com/company/teach-for-india"
            target="_blank"
            rel="noopener noreferrer"
          >
          <BiLogoLinkedinSquare /></a>
        </li>
        <li>
          <a
          className="Footer-social-icon"
            href="https://www.youtube.com/user/TeachForIndia"
            target="_blank"
            rel="noopener noreferrer"
          >
          <BiLogoYoutube /></a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
