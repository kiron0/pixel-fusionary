import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
          const [scrollY, setScrollY] = useState(0);

          const handleScrollToTop = () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
          }

          useEffect(() => {
                    const handleScroll = () => {
                              setScrollY(window.scrollY);
                    }

                    window.addEventListener('scroll', handleScroll);

                    return () => {
                              window.removeEventListener('scroll', handleScroll);
                    }
          }, [])

          return (
                    <button
                              className={cn("bottom-5 right-5 z-50 p-2 rounded-full shadow-xl border bg-primary",
                                        scrollY > 400 ? "fixed transform transition-transform duration-300" : "hidden",
                              )}
                              onClick={handleScrollToTop}
                    >
                              <IoIosArrowUp className="text-xl text-primary-foreground" />
                    </button>
          )
}