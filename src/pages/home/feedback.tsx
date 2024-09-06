import Container from "@/components/container";
import Title from "@/components/title";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Config } from "@/config";

type TFeedback = {
          name: string;
          title: string;
          quote: string;
}

export default function Feedback() {
          const feedbacks: TFeedback[] = [
                    {
                              name: "Sarah Lee",
                              title: "Marketing Manager, GreenWave",
                              quote: "Their creative approach to content marketing helped us engage our audience in a way we never thought possible. We saw a 30% increase in conversions after implementing their strategy."
                    },
                    {
                              name: "Michael Chen",
                              title: "Founder, StartupHub",
                              quote: `The team at ${Config.title} is incredibly knowledgeable and always goes the extra mile to ensure our campaigns are successful. Their attention to detail and proactive approach is unmatched.`
                    },
                    {
                              name: "Emily Ross",
                              title: "Director of Communications, FinSolve",
                              quote: "Their SEO strategies are on point! We've moved from the second page of Google to the top three search results for all our target keywords in just six months."
                    },
                    {
                              name: "David Palmer",
                              title: "Chief Operating Officer, RealEstatePro",
                              quote: `We were struggling to manage our digital presence across multiple platforms. ${Config.title} stepped in and streamlined everything, leading to a noticeable boost in brand consistency and engagement.`
                    },
                    {
                              name: "Rebecca Adams",
                              title: "E-commerce Manager, FashionFix",
                              quote: "Thanks to their expertise in web development, our site now offers an amazing user experience that has led to a 40% increase in sales. We couldn’t be happier!"
                    },
                    {
                              name: "James Oliver",
                              title: "Product Manager, SmartTech",
                              quote: "Their insights into user experience design helped us transform our app into something our users genuinely love. We’ve received tons of positive feedback from customers."
                    },
                    {
                              name: "Laura White",
                              title: "Head of Sales, FitLife",
                              quote: "What impressed us the most was their commitment to understanding our brand. They didn’t just provide a one-size-fits-all solution; they took the time to tailor their strategies to our unique needs."
                    },
                    {
                              name: "Henry Wilson",
                              title: "Owner, CraftBrew",
                              quote: `We worked with ${Config.title} on a social media campaign, and the results were outstanding. Our follower count doubled, and engagement skyrocketed!`
                    },
                    {
                              name: "John Doe",
                              title: "CEO, TechCorp",
                              quote: `Working with ${Config.title} has been a game-changer for our business. Their expertise in digital marketing has dramatically improved our online presence and driven a significant increase in leads.`
                    },
                    {
                              name: "Ava Morgan",
                              title: "Lead Designer, Artistry",
                              quote: "Their ability to create compelling visuals and marketing materials was key to us standing out in a competitive market. They brought our vision to life beautifully."
                    },
                    {
                              name: "Jason Hill",
                              title: "CTO, SafeHome Security",
                              quote: `The team at ${Config.title} delivered an incredible website for us. It's not only visually appealing but also fast and highly secure, which is critical for our business.`
                    },
                    {
                              name: "Sophia Brooks",
                              title: "Chief Marketing Officer, Healthify",
                              quote: "Their email marketing campaigns are consistently top-notch. We've seen a steady increase in open rates and conversions since we started working with them."
                    }
          ];

          return (
                    <Container id="feedback">
                              <Title
                                        title="Feedback"
                                        subtitle="What our clients say."
                              />
                              <InfiniteMovingCards
                                        items={feedbacks}
                                        direction="right"
                                        speed="slow"
                              />
                    </Container>
          )
}