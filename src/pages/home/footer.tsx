import { Config } from "@/config";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
          return (
                    <footer id="footer" className="bg-gradient-to-tl from-primary to-primary/50 text-primary-foreground pt-10 mt-16 pb-3 overflow-x-hidden">
                              <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                                        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                                                  <div className="space-y-1">
                                                            <div className="flex justify-center sm:justify-normal items-center gap-2">
                                                                      <img src={Config.logo} alt="logo" className="size-8 sm:size-9" onContextMenu={(e) => e.preventDefault()} />
                                                                      <h1 className="text-xl sm:text-2xl font-bold">
                                                                                {Config.title}
                                                                      </h1>
                                                            </div>
                                                            <p className="text-sm pt-2 w-full sm:w-96 sm:text-balance font-medium">
                                                                      {Config.description}
                                                            </p>
                                                  </div>
                                                  <div className="flex flex-col gap-3 shrink-0">
                                                            <Link to="/" className="font-oswald font-medium uppercase text-sm sm:hover:underline duration-300">
                                                                      Contact Us
                                                            </Link>
                                                            <Link to="/" className="font-oswald font-medium uppercase text-sm sm:hover:underline duration-300">
                                                                      About Us
                                                            </Link>
                                                            <Link to="/" className="font-oswald font-medium uppercase text-sm sm:hover:underline duration-300">
                                                                      Careers
                                                            </Link>
                                                  </div>
                                        </div>
                                        <div className="flex flex-col gap-8 justify-center md:justify-start">
                                                  <div className="flex gap-4 justify-center md:justify-start">
                                                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary duration-300 cursor-pointer">
                                                                      <FaFacebookF size={20} />
                                                            </a>
                                                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary duration-300 cursor-pointer">
                                                                      <FaTwitter size={20} />
                                                            </a>
                                                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary duration-300 cursor-pointer">
                                                                      <FaYoutube size={20} />
                                                            </a>
                                                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary duration-300 cursor-pointer">
                                                                      <FaInstagram size={20} />
                                                            </a>
                                                  </div>
                                        </div>
                              </div>
                              <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                                        <div className="text-[12px] text-center md:text-left">
                                                  © {new Date().getFullYear()} <span className="font-medium">{Config.title}</span>. All rights reserved.
                                        </div>
                                        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                                                  <Link to="/" className="text-[12px] sm:hover:underline duration-300">
                                                            Terms of Sale
                                                  </Link>
                                                  <Link to="/" className="text-[12px] sm:hover:underline duration-300">
                                                            Terms of Use
                                                  </Link>
                                                  <Link to="/" className="text-[12px] sm:hover:underline duration-300">
                                                            Privacy Policy
                                                  </Link>
                                        </div>
                              </div>
                    </footer>
          )
}