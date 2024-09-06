import {
          Sheet,
          SheetContent,
          SheetDescription,
          SheetHeader,
          SheetTitle,
          SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { TNavLink } from "./navbar"

interface MobileMenuProps {
          children: ReactNode
          isOpen: boolean
          setIsOpen: (isOpen: boolean) => void
          navLinks: TNavLink[]
}

export default function MobileMenu({ children, isOpen, setIsOpen, navLinks }: MobileMenuProps) {
          const pathname = window.location.pathname;

          return (
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                              <SheetTrigger>
                                        {children}
                              </SheetTrigger>
                              <SheetContent className="w-[90%]">
                                        <SheetHeader>
                                                  <SheetTitle>
                                                            <div className="flex justify-center sm:justify-normal items-center gap-2">
                                                                      <img src="/vite.svg" alt="logo" className="size-8 sm:size-9" />
                                                                      <h1 className="text-xl sm:text-2xl font-bold">
                                                                                Pixel Fusionary
                                                                      </h1>
                                                            </div>
                                                  </SheetTitle>
                                                  <SheetDescription>
                                                            Its a digital marketing services platform where you can find all the services you need to grow your business.
                                                  </SheetDescription>
                                        </SheetHeader>
                                        <div className="grid gap-2.5 pt-8">
                                                  {navLinks.map((link) => (
                                                            <Link
                                                                      key={link.name}
                                                                      to={link.href}
                                                                      className={cn("px-3 py-2.5 border border-muted sm:hover:bg-muted rounded-md transition-all duration-300",
                                                                                pathname === link.href ? "bg-primary text-primary-foreground" : "hover:bg-muted hover:text-muted-foreground"
                                                                      )}
                                                                      onClick={() => setIsOpen(false)}
                                                            >
                                                                      {link.name}
                                                            </Link>
                                                  ))}
                                        </div>
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                                  <p className="text-xs text-muted-foreground text-center">
                                                            © {new Date().getFullYear()} Pixel Fusionary. <br /> All rights reserved.
                                                  </p>
                                        </div>
                              </SheetContent>
                    </Sheet>

          )
}