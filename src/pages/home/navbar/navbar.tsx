import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Config } from "@/config";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "./mobile-menu";

export type TNavLink = {
          name: string;
          link: string;
}

const navLinks = [
          { name: "About Us", link: "about" },
          { name: "Services", link: "services" },
          { name: "Feedback", link: "feedback" },
          { name: "Contact Us", link: "contact" },
]

export default function Navbar() {
          const [isOpen, setIsOpen] = useState(false);

          const { pathname } = useLocation();
          const LinkComponent = pathname === "/" ? ScrollLink : Link;

          return (
                    <div id="root" className="sticky top-0 bg-background z-50">
                              <div className="max-w-7xl mx-auto flex justify-between items-center h-16 sm:h-20 px-5 sm:px-7">
                                        <LinkComponent
                                                  to={pathname === "/" ? "root" : "/"}
                                                  spy={pathname === "/" ? true : undefined}
                                                  smooth={pathname === "/" ? true : undefined}
                                                  offset={pathname === "/" ? -70 : undefined}
                                                  duration={pathname === "/" ? 500 : undefined}
                                                  className="flex items-center gap-2 cursor-pointer"
                                        >
                                                  <img src={Config.logo} alt="logo" className="size-8 sm:size-9" onContextMenu={(e) => e.preventDefault()} />
                                                  <h1 className="text-xl sm:text-2xl font-bold">
                                                            {Config.title}
                                                  </h1>
                                        </LinkComponent>
                                        <div className="hidden lg:flex items-center gap-8">
                                                  {navLinks.map((link) => (
                                                            <LinkComponent
                                                                      key={link.name}
                                                                      className="transition-all duration-300 font-medium text-lg cursor-pointer hover:text-primary"
                                                                      activeClass="text-primary"
                                                                      to={pathname === "/" ? link.link : '/'}
                                                                      spy={pathname === "/" ? true : undefined}
                                                                      smooth={pathname === "/" ? true : undefined}
                                                                      offset={pathname === "/" ? -70 : undefined}
                                                                      duration={pathname === "/" ? 500 : undefined}
                                                            >
                                                                      {link.name}
                                                            </LinkComponent>
                                                  ))}
                                                  <LinkComponent
                                                            to={pathname === "/" ? 'services' : '/'}
                                                            spy={pathname === "/" ? true : undefined}
                                                            smooth={pathname === "/" ? true : undefined}
                                                            offset={pathname === "/" ? -70 : undefined}
                                                            duration={pathname === "/" ? 500 : undefined}
                                                            className="ml-5"
                                                  >
                                                            <HoverBorderGradient
                                                                      containerClassName="rounded-full"
                                                                      as="button"
                                                                      className="flex items-center space-x-2 bg-primary text-primary-foreground sm:hover:bg-white sm:hover:text-black transition-all duration-300"
                                                            >
                                                                      Get Started <IoMdArrowForward className="ml-2" size={18} />
                                                            </HoverBorderGradient>
                                                  </LinkComponent>
                                        </div>
                                        <div className="lg:hidden flex justify-end items-center">
                                                  <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks}>
                                                            <RiMenu3Line size={22} />
                                                  </MobileMenu>
                                        </div>
                              </div>
                    </div>
          )
}