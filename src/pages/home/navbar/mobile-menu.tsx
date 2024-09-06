import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Config } from "@/config"
import { ReactNode } from "react"
import { Link } from "react-scroll"
import { TNavLink } from "./navbar"

interface MobileMenuProps {
          children: ReactNode
          isOpen: boolean
          setIsOpen: (isOpen: boolean) => void
          navLinks: TNavLink[]
}

export default function MobileMenu({ children, isOpen, setIsOpen, navLinks }: MobileMenuProps) {
          return (
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                              <SheetTrigger>
                                        {children}
                              </SheetTrigger>
                              <SheetContent className="w-[90%]">
                                        <SheetHeader>
                                                  <SheetTitle>
                                                            <Link
                                                                      to="root"
                                                                      spy={true}
                                                                      smooth={true}
                                                                      offset={-70}
                                                                      duration={500}
                                                                      className="flex justify-center sm:justify-normal items-center gap-2 cursor-pointer"
                                                                      onClick={() => setIsOpen(false)}
                                                            >
                                                                      <img src={Config.logo} alt="logo" className="size-8 sm:size-9" onContextMenu={(e) => e.preventDefault()} />
                                                                      <h1 className="text-xl sm:text-2xl font-bold">
                                                                                {Config.title}
                                                                      </h1>
                                                            </Link>
                                                  </SheetTitle>
                                                  <SheetDescription>
                                                            {Config.description}
                                                  </SheetDescription>
                                        </SheetHeader>
                                        <div className="grid gap-2.5 pt-8">
                                                  {navLinks.map((link) => (
                                                            <Link
                                                                      key={link.name}
                                                                      to={link.link}
                                                                      className="px-3 py-2.5 border border-muted sm:hover:bg-muted rounded-md transition-all cursor-pointer duration-300 hover:bg-muted hover:text-muted-foreground"
                                                                      activeClass="bg-primary text-primary-foreground"
                                                                      spy={true}
                                                                      smooth={true}
                                                                      offset={-70}
                                                                      duration={500}
                                                                      onClick={() => setIsOpen(false)}
                                                            >
                                                                      {link.name}
                                                            </Link>
                                                  ))}
                                        </div>
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                                  <p className="text-xs text-muted-foreground text-center">
                                                            © {new Date().getFullYear()} {Config.title}. <br /> All rights reserved.
                                                  </p>
                                        </div>
                              </SheetContent>
                    </Sheet>

          )
}