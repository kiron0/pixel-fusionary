import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<JSX.IntrinsicElements["div"]>;

export default function Container({ ...props }: ContainerProps) {
          return (
                    <div
                              className={`max-w-7xl mx-auto p-5 sm:p-7 ${props.className}`}
                              {...props}
                    >
                              {props.children}
                    </div>
          )
}