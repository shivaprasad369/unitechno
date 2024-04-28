import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import {motion } from "framer-motion";


const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0, transition: { duration: 1.2, type: "spring" } }}
          className="container"
        >
          <div className="logo">
            <Link href="/">
              <TitleLogo title="Unitechno" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Home
            </Link>
            <Link
              href="/agency"
              className={activeLink == "/agency" ? "activeLink" : "none"}
            >
              About
            </Link>
            {/* <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}> */}
            {/* Team
            </Link> */}
            {/* <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link> */}
            <Link
              href="/showcase"
              className={activeLink == "/showcase" ? "activeLink" : "none"}
            >
              Showcase
            </Link>
            {/* <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </Link> */}
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
            >
              Contact
            </Link>
            <button className="button-primary">
              <Link href={"/contact"}>book a consultation</Link>
            </button>
          </nav>
          <button className="headerBtn" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
