import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Config } from "@/config";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";
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

          return (
                    <div id="root" className="sticky top-0 bg-background z-50">
                              <div className="max-w-7xl mx-auto flex justify-between items-center h-16 sm:h-20 px-5 sm:px-7">
                                        <Link
                                                  to="root"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-70}
                                                  duration={500}
                                                  className="flex items-center gap-2 cursor-pointer"
                                        >
                                                  <img src={Config.logo} alt="logo" className="size-8 sm:size-9" onContextMenu={(e) => e.preventDefault()} />
                                                  <h1 className="text-xl sm:text-2xl font-bold">
                                                            {Config.title}
                                                  </h1>
                                        </Link>
                                        <div className="hidden lg:flex items-center gap-8">
                                                  {navLinks.map((link) => (
                                                            <Link
                                                                      key={link.name}
                                                                      className="transition-all duration-300 font-medium text-lg cursor-pointer hover:text-primary"
                                                                      activeClass="text-primary"
                                                                      to={link.link}
                                                                      spy={true}
                                                                      smooth={true}
                                                                      offset={-70}
                                                                      duration={500}
                                                            >
                                                                      {link.name}
                                                            </Link>
                                                  ))}
                                                  <Link
                                                            to="services"
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-70}
                                                            duration={500}
                                                            className="ml-5"
                                                  >
                                                            <HoverBorderGradient
                                                                      containerClassName="rounded-full"
                                                                      as="button"
                                                                      className="flex items-center space-x-2 bg-primary text-primary-foreground sm:hover:bg-white sm:hover:text-black transition-all duration-300"
                                                            >
                                                                      Get Started <IoMdArrowForward className="ml-2" size={18} />
                                                            </HoverBorderGradient>
                                                  </Link>
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