import BannerImg from "@/assets/banner.png";
import Container from "@/components/container";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingIcons } from "@/components/ui/infinite-moving-icons";
import { Config } from "@/config";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-scroll";

export default function Banner() {
          return (
                    <Container>
                              <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:-mt-20">
                                        <div className="w-full lg:w-1/2">
                                                  <h1 className="flex flex-wrap gap-1 text-3xl sm:text-[60px] sm:leading-tight font-semibold">
                                                            <span className="text-primary">Digital Marketing</span> Agency in Bangladesh & US
                                                  </h1>
                                                  <p className="text-base sm:text-lg text-muted-foreground mt-4">
                                                            Looking to invest in Digital Marketing? In the 21st century, if you want the best ROI, you must invest in the best Digital Marketing agency. {Config.title} is who you should be choosing.
                                                  </p>
                                                  <div className="mt-5">
                                                            <Link
                                                                      to="services"
                                                                      spy={true}
                                                                      smooth={true}
                                                                      offset={-70}
                                                                      duration={500}
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
                                        </div>
                                        <div className="w-full lg:w-1/2 -mt-12 lg:mt-0">
                                                  <img src={BannerImg} alt="banner" className="w-full sm:w-1/2 mx-auto lg:w-full" onContextMenu={(e) => e.preventDefault()} />
                                        </div>
                              </div>
                              <div className="mt-8 sm:mt-0">
                                        <InfiniteMovingIcons
                                                  items={Config.sponsors}
                                                  direction="left"
                                                  speed="slow"
                                        />
                              </div>
                    </Container>
          )
}