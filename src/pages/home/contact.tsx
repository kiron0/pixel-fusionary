import Container from "@/components/container";
import Title from "@/components/title";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextArea } from "@/components/ui/text-area";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { FormEvent } from "react";

export default function Contact() {
          const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData.entries());

                    if (!data.firstName || !data.middleName || !data.lastName || !data.email || !data.message) {
                              return toast({
                                        title: "Please fill out all fields.",
                                        description: "All fields are required.",
                                        variant: "destructive",
                              });
                    }

                    try {
                              toast({
                                        title: "Message sent!",
                                        description: "We'll get back to you shortly.",
                              });
                              e.currentTarget.reset();
                    } catch (error) {
                              console.error(error);
                    }
          };

          return (
                    <Container id="contact">
                              <Title
                                        title="Contact Us"
                                        subtitle="Let's get in touch."
                              />
                              <form className="my-8" onSubmit={handleSubmit}>
                                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                                  <LabelInputContainer>
                                                            <Label htmlFor="firstName">First name</Label>
                                                            <Input id="firstName" placeholder="Tyler" type="text" name="firstName" />
                                                  </LabelInputContainer>
                                                  <LabelInputContainer>
                                                            <Label htmlFor="middleName">Last name</Label>
                                                            <Input id="middleName" placeholder="Kerlin" type="text" name="middleName" />
                                                  </LabelInputContainer>
                                                  <LabelInputContainer>
                                                            <Label htmlFor="lastName">Last name</Label>
                                                            <Input id="lastName" placeholder="Durden" type="text" name="lastName" />
                                                  </LabelInputContainer>
                                        </div>
                                        <LabelInputContainer className="mb-4">
                                                  <Label htmlFor="email">Email Address</Label>
                                                  <Input id="email" placeholder="projectmayhem@fc.com" type="email" name="email" />
                                        </LabelInputContainer>
                                        <LabelInputContainer className="mb-4">
                                                  <Label htmlFor="message">Message</Label>
                                                  <TextArea
                                                            id="message"
                                                            placeholder="I am Jack's smirking revenge."
                                                            typeof="text"
                                                            name="message"
                                                  />
                                        </LabelInputContainer>
                                        <button
                                                  className="bg-gradient-to-tr relative group/btn from-primary to-primary/30 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                                  type="submit"
                                        >
                                                  Submit &rarr;
                                        </button>
                              </form>
                    </Container>
          )
}

const LabelInputContainer = ({
          children,
          className,
}: {
          children: React.ReactNode;
          className?: string;
}) => {
          return (
                    <div className={cn("flex flex-col space-y-2 w-full", className)}>
                              {children}
                    </div>
          );
};