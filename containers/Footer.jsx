import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { Socials } from "../components";
import { Divider, Logo } from "../components/";
import { motion } from "framer-motion";

const menuItems = [
  { icon: "", label: "Token", to: "section-token", isExternal: false },
  { icon: "", label: "Roadmap", to: "section-roadmap", isExternal: false },
  { icon: "", label: "About", to: "section-fundamentals", isExternal: false },
  { icon: "", label: "FAQ", to: "section-faq", isExternal: false },
  {
    icon: "",
    label: "News",
    to: "",
    isExternal: true,
  },
];

const secondaryLinks = [
  { label: "Github", to: "" },
  { label: "Docs", to: "" },
  {
    label: "Bug Bounty",
    to: "",
  },
  {
    label: "Terms Of Use",
    to: "terms-of-use.html",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wide-screen">
        <Logo path="/" />
        <div className="links">
          <nav className="navbar__nav">
            <ul className="navbar__list">
              {menuItems.map(({ icon, label, to, isExternal }, i) =>
                isExternal ? (
                  <li className="navbar__item" key={i}>
                    <Link href={to}>
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icon}
                        {label}
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li className="navbar__item" key={i}>
                    <Scroll
                      activeClass="active"
                      to={to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={50}
                    >
                      {icon}
                      {label}
                    </Scroll>
                  </li>
                )
              )}
            </ul>
          </nav>
          <Socials />
          <nav className="navbar__nav">
            <ul className="navbar__list">
              {secondaryLinks.map(({ label, to }, i) => (
                <li className="navbar__item" key={i}>
                  <Link href={to}>
                    <a href={to} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Divider type="horizontal" w="188px" />
        <div className="copyright">
          <h3>Copyright &copy; {currentYear} All rights reserved.</h3>
          <a href="mailto: contact@gorilla-coin.com">
            contact@gorilla-coin.com
          </a>
        </div>
      </div>
      <div className="footer-mobile-screen">
        <nav className="navbar__nav">
          <ul className="navbar__list">
            {menuItems.map(({ icon, label, to, isExternal }, i) =>
              isExternal ? (
                <li className="navbar__item" key={i}>
                  <Link href={to}>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                      {label}
                    </a>
                  </Link>
                </li>
              ) : (
                <li className="navbar__item" key={i}>
                  <Scroll
                    activeClass="active"
                    to={to}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {icon}
                    {label}
                  </Scroll>
                </li>
              )
            )}
            {secondaryLinks.map(({ label, to }, i) => (
              <li className="navbar__item" key={i}>
                <Link href={to}>
                  <a href={to} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Logo path="/" />
        <Socials />
        <Divider type="horizontal" w="188px" />
        <div className="copyright">
          <h3>Copyright &copy; {currentYear} All rights reserved.</h3>
          <p>
            Gorilla Token is brought to you by{" "}
            <Link href="">
              <a target="_blank" rel="noopener noreferrer">
                <span>Gorilla Casinos</span>
              </a>
            </Link>
          </p>
          <a href="mailto: contact@gorilla-coin.com">
            contact@gorilla-coin.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
