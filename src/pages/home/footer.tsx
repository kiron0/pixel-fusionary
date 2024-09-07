import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Config } from "@/config";
import { toast } from "@/hooks/use-toast";
import { FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
          const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData.entries());

                    if (!data.subscribe) {
                              return toast({
                                        title: "Validation Error",
                                        description: "Please enter a valid email address.",
                                        variant: "destructive",
                              });
                    }

                    try {
                              toast({
                                        title: "Subscribed!",
                                        description: "You have successfully subscribed to our newsletter.",
                              });
                              e.currentTarget.reset();
                    } catch (error) {
                              console.error(error);
                    }
          }

          const { pathname } = useLocation();
          const LinkComponent = pathname === "/" ? ScrollLink : Link;

          return (
                    <footer id="footer" className="bg-gradient-to-tl from-primary to-primary/50 text-primary-foreground pt-10 mt-16 pb-3 overflow-x-hidden">
                              <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between flex-col md:flex-row gap-5 md:gap-16">
                                        <div className="flex gap-5 md:gap-8 lg:gap-16 flex-col md:flex-row">
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
                                                            <p className="text-sm text-balance pt-5">
                                                                      7713 BRIGHT AVE #3, WHITTIER, CA, 90602
                                                            </p>
                                                  </div>
                                                  <div className="flex flex-col gap-3 shrink-0">
                                                            <LinkComponent
                                                                      to={pathname === "/" ? "contact" : "/"}
                                                                      spy={pathname === "/" ? true : undefined}
                                                                      smooth={pathname === "/" ? true : undefined}
                                                                      offset={pathname === "/" ? -70 : undefined}
                                                                      duration={pathname === "/" ? 500 : undefined}
                                                                      className="font-oswald font-medium uppercase text-sm sm:hover:underline duration-300 cursor-pointer">
                                                                      Contact Us
                                                            </LinkComponent>
                                                            <LinkComponent
                                                                      to={pathname === "/" ? "about" : "/"}
                                                                      spy={pathname === "/" ? true : undefined}
                                                                      smooth={pathname === "/" ? true : undefined}
                                                                      offset={pathname === "/" ? -70 : undefined}
                                                                      duration={pathname === "/" ? 500 : undefined}
                                                                      className="font-oswald font-medium uppercase text-sm sm:hover:underline duration-300 cursor-pointer">
                                                                      About Us
                                                            </LinkComponent>
                                                            <LinkComponent
                                                                      to={pathname === "/" ? "services" : "/"}
                                                                      spy={pathname === "/" ? true : undefined}
                                                                      smooth={pathname === "/" ? true : undefined}
                                                                      offset={pathname === "/" ? -70 : undefined}
                                                                      duration={pathname === "/" ? 500 : undefined}
                                                                      className="font-oswald font-medium uppercase text-sm sm:hover:underline duration-300 cursor-pointer">
                                                                      Services
                                                            </LinkComponent>
                                                            <LinkComponent
                                                                      to={pathname === "/" ? "feedback" : "/"}
                                                                      spy={pathname === "/" ? true : undefined}
                                                                      smooth={pathname === "/" ? true : undefined}
                                                                      offset={pathname === "/" ? -70 : undefined}
                                                                      duration={pathname === "/" ? 500 : undefined}
                                                                      className="font-oswald font-medium uppercase text-sm sm:hover:underline duration-300 cursor-pointer">
                                                                      Feedback
                                                            </LinkComponent>
                                                  </div>
                                        </div>
                                        <form onSubmit={handleSubmit} className="flex justify-center w-full sm:w-1/3">
                                                  <div className="w-full space-y-2">
                                                            <div className="space-y-2">
                                                                      <label htmlFor="subscribe" className="text-sm font-medium leading-none">Subscribe to our newsletter</label>
                                                                      <Input id="subscribe" type="email" name="subscribe" placeholder="Email Address" className="w-full" />
                                                            </div>
                                                            <Button type="submit" className="w-full">
                                                                      Subscribe &rarr;
                                                            </Button>
                                                  </div>
                                        </form>
                              </div>
                              <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                                        <div className="text-[12px] text-center md:text-left">
                                                  © {new Date().getFullYear()} <span className="font-medium">{Config.title}</span>. All rights reserved.
                                        </div>
                                        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                                                  <Link to="/terms-and-conditions" className="text-[12px] sm:hover:underline duration-300">
                                                            Terms & Conditions
                                                  </Link>
                                                  <Link to="/privacy-policy" className="text-[12px] sm:hover:underline duration-300">
                                                            Privacy Policy
                                                  </Link>
                                        </div>
                              </div>
                    </footer>
          )
}