import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<JSX.IntrinsicElements["div"]>;

export default function Container({ ...props }: ContainerProps) {
          return (
                    <div
                              className={cn("max-w-7xl mx-auto p-5 sm:p-7", props.className)}
                              {...props}
                    >
                              {props.children}
                    </div>
          )
}