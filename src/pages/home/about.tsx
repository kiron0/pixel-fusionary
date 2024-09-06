import Container from "@/components/container";
import Title from "@/components/title";
import { Config } from "@/config";

export default function About() {
          return (
                    <Container id="about">
                              <Title
                                        title="About Us"
                                        subtitle="Who we are and what we do."
                              />
                              <div className="flex flex-col items-center justify-center space-y-4">
                                        <p>
                                                  At {Config.title}, we are a dedicated team of digital marketing professionals, developers, and strategists passionate about helping businesses thrive in today’s digital landscape. Our mission is simple: to empower brands by providing tailored digital solutions that drive real results. Whether it’s boosting your online visibility, increasing traffic, or enhancing user experience, we work relentlessly to turn your digital challenges into growth opportunities.
                                        </p>
                                        <p>
                                                  With years of experience across various industries, we understand the unique demands of each market. Our approach is data-driven and client-focused, ensuring that we not only meet but exceed your expectations. We believe that every brand has a story, and we are here to help you tell yours in the most impactful way possible. From search engine optimization (SEO) and social media marketing to web and app development, we offer a full spectrum of services designed to position your business for long-term success.
                                        </p>
                                        <p>
                                                  What sets us apart is our commitment to innovation and customer satisfaction. We stay ahead of the curve by constantly evolving and adopting the latest tools and technologies. Our team is always up-to-date with the latest trends, which enables us to create cutting-edge strategies tailored to your specific needs.
                                        </p>
                                        <p>
                                                  At {Config.title}, your success is our success. We don’t just aim for short-term wins; we focus on building sustainable digital strategies that deliver value over time.
                                        </p>
                              </div>
                    </Container>
          )
}