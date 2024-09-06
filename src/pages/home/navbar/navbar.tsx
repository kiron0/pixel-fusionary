import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import MobileMenu from "./mobile-menu";

export type TNavLink = {
          name: string;
          href: string;
}

const navLinks = [
          { name: "Services", href: "/services" },
          { name: "About", href: "/about" },
          { name: "Contact", href: "/contact" },
]

export default function Navbar() {
          const [isOpen, setIsOpen] = useState(false);

          const pathname = window.location.pathname;

          return (
                    <div>
                              <div className="max-w-7xl mx-auto flex justify-between items-center h-16 sm:h-20 px-5 sm:px-7">
                                        <Link to="/" className="flex items-center gap-2">
                                                  <img src="/vite.svg" alt="logo" className="size-8 sm:size-10" />
                                                  <h1 className="text-xl sm:text-2xl font-bold">
                                                            Pixel Fusionary
                                                  </h1>
                                        </Link>
                                        <div className="hidden lg:flex items-center gap-8">
                                                  {navLinks.map((link) => (
                                                            <Link
                                                                      key={link.name}
                                                                      to={link.href}
                                                                      className={cn(
                                                                                "transition-all duration-300 font-medium text-lg",
                                                                                pathname === link.href ? "text-primary" : "hover:text-primary"
                                                                      )}
                                                            >
                                                                      {link.name}
                                                            </Link>
                                                  ))}
                                                  <Link to='/' className="ml-5">
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