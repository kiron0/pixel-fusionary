import Container from "@/components/container";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Reviews() {
          const testimonials = [
                    {
                              name: "John Doe",
                              title: "CEO",
                              quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
                    },
                    {
                              name: "John Doe",
                              title: "CEO",
                              quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
                    },
                    {
                              name: "John Doe",
                              title: "CEO",
                              quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
                    },
                    {
                              name: "John Doe",
                              title: "CEO",
                              quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
                    },
                    {
                              name: "John Doe",
                              title: "CEO",
                              quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
                    },
          ];

          return (
                    <Container>
                              <InfiniteMovingCards
                                        items={testimonials}
                                        direction="right"
                                        speed="slow"
                              />
                    </Container>
          )
}