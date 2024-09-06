import { ReactNode } from "react"

interface ContainerProps {
          children: ReactNode,
          className?: string
}

export default function Container({ children, className }: ContainerProps) {
          return (
                    <div className={`max-w-7xl mx-auto p-5 sm:p-7 ${className}`}>
                              {children}
                    </div>
          )
}