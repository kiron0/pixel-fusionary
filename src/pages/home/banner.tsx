import Container from "@/components/container";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Banner() {
          return (
                    <Container>
                              <h1 className="flex flex-wrap gap-1 text-3xl sm:text-[60px] sm:leading-tight font-semibold">
                                        <span className="text-primary">Digital Marketing</span> Agency in Bangladesh
                              </h1>
                              <p className="text-base sm:text-lg text-muted-foreground mt-4">
                                        Looking to invest in Digital Marketing? In the 21st century, if you want the best ROI, you must invest in the best Digital Marketing agency. Pixel Fusionary is who you should be choosing.
                              </p>
                              <div className="mt-5">
                                        <Link to='/'>
                                                  <HoverBorderGradient
                                                            containerClassName="rounded-full"
                                                            as="button"
                                                            className="flex items-center space-x-2 bg-primary text-primary-foreground sm:hover:bg-white sm:hover:text-black transition-all duration-300"
                                                  >
                                                            Get Started <IoMdArrowForward className="ml-2" size={18} />
                                                  </HoverBorderGradient>
                                        </Link>
                              </div>
                    </Container>
          )
}