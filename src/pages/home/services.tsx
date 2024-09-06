import Container from "@/components/container";
import Title from "@/components/title";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContainer, DialogContent, DialogDescription, DialogImage, DialogSubtitle, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from "@/lib/utils";
import { PlusIcon } from 'lucide-react';
import { useEffect, useState } from "react";

type TService = {
          title: string;
          subtitle: string;
          description: string;
          image: string;
          price: number;
}

const digitalServices: TService[] = [
          {
                    title: "Search Engine Optimization (SEO)",
                    subtitle: "Boost your organic search rankings",
                    description: "Optimize your website to rank higher on search engines and attract organic traffic through keyword research, content optimization, and technical SEO strategies.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 500
          },
          {
                    title: "Pay-Per-Click Advertising (PPC)",
                    subtitle: "Drive instant traffic with paid ads",
                    description: "Maximize your visibility with paid search ads on platforms like Google Ads. Achieve immediate results by targeting specific keywords and audiences.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 300
          },
          {
                    title: "Social Media Marketing",
                    subtitle: "Engage your audience on social platforms",
                    description: "Create compelling social media content and run targeted ad campaigns on platforms like Facebook, Instagram, and Twitter to build brand awareness and drive conversions.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 400
          },
          {
                    title: "Content Marketing",
                    subtitle: "Craft engaging and valuable content",
                    description: "Develop and distribute high-quality content that resonates with your audience, positioning your brand as an authority in your niche and driving organic traffic.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 350
          },
          {
                    title: "Email Marketing",
                    subtitle: "Reach your customers directly",
                    description: "Leverage personalized email campaigns to nurture leads, retain customers, and promote products or services directly to your subscribers.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 250
          },
          {
                    title: "Conversion Rate Optimization (CRO)",
                    subtitle: "Turn visitors into customers",
                    description: "Increase the percentage of website visitors who take desired actions such as making a purchase or signing up, by optimizing your website and user experience.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 600
          },
          {
                    title: "Affiliate Marketing",
                    subtitle: "Expand your reach with affiliates",
                    description: "Partner with affiliates to promote your products or services, paying them commissions on successful sales or leads they generate for you.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 700
          },
          {
                    title: "Influencer Marketing",
                    subtitle: "Leverage influencers for brand promotion",
                    description: "Collaborate with industry influencers to promote your brand to their engaged audiences, increasing visibility and credibility.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 550
          },
          {
                    title: "Video Marketing",
                    subtitle: "Engage with impactful video content",
                    description: "Create professional video content for platforms like YouTube, TikTok, or social media to engage users and build a strong visual brand presence.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 800
          },
          {
                    title: "Mobile Marketing",
                    subtitle: "Connect with mobile users",
                    description: "Reach your audience on mobile devices through SMS campaigns, in-app ads, and mobile-optimized content to drive engagement and conversions.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 450
          },
          {
                    title: "Web Development",
                    subtitle: "Build high-performance websites",
                    description: "Design and develop responsive, fast, and secure websites that align with your business goals, ensuring an optimal user experience.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 1500
          },
          {
                    title: "App Development",
                    subtitle: "Create custom mobile applications",
                    description: "Design and build mobile applications for both iOS and Android platforms to expand your digital presence and offer a seamless user experience.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 2000
          },
          {
                    title: "Graphic Design",
                    subtitle: "Create stunning visual assets",
                    description: "Develop professional and eye-catching graphics for websites, social media, and other digital marketing materials to enhance your brand’s appeal.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 500
          },
          {
                    title: "UI/UX Design",
                    subtitle: "Optimize user experience and interfaces",
                    description: "Design intuitive, user-friendly interfaces and improve user experience for both web and mobile applications to maximize customer satisfaction.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 1200
          },
          {
                    title: "E-commerce Solutions",
                    subtitle: "Sell online with confidence",
                    description: "Build and optimize e-commerce platforms, integrating payment gateways, security protocols, and customer management systems to drive online sales.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 2500
          },
          {
                    title: "Online Reputation Management",
                    subtitle: "Monitor and protect your brand image",
                    description: "Manage and monitor your online reputation to ensure positive reviews and visibility, addressing any negative feedback promptly and effectively.",
                    image: "https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg",
                    price: 600
          }
];

export default function Services() {
          const [services, setServices] = useState<TService[]>([]);

          const handleClickMoreServices = () => {
                    setServices((prevServices) => [
                              ...prevServices,
                              ...digitalServices.slice(prevServices.length, prevServices.length + 3)
                    ]);
          }

          useEffect(() => {
                    setServices(digitalServices.slice(0, 6));
          }, []);

          return (
                    <Container id="services">
                              <Title
                                        title="Services"
                                        subtitle="What can we do for you?"
                              />
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {services.map((service, index) => (
                                                  <Dialog
                                                            transition={{
                                                                      type: 'spring',
                                                                      bounce: 0.05,
                                                                      duration: 0.25,
                                                            }}
                                                            key={index}
                                                  >
                                                            <DialogTrigger
                                                                      style={{
                                                                                borderRadius: '12px',
                                                                      }}
                                                                      className='flex w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
                                                            >
                                                                      <DialogImage
                                                                                src={service.image}
                                                                                alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                                                                                className='h-48 w-full object-cover'
                                                                      />
                                                                      <div className='flex flex-grow flex-row items-end justify-between p-2'>
                                                                                <div className="space-y-1">
                                                                                          <DialogTitle className='text-zinc-950 dark:text-zinc-50 font-semibold'>
                                                                                                    {service.title.length > 30 ? service.title.slice(0, 30) + '...' : service.title}
                                                                                          </DialogTitle>
                                                                                          <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                                                                                                    {service.subtitle.length > 30 ? service.subtitle.slice(0, 30) + '...' : service.subtitle}
                                                                                          </DialogSubtitle>
                                                                                </div>
                                                                                <div className="space-y-1">
                                                                                          <p className='font-bold text-zinc-700 dark:text-zinc-400'>
                                                                                                    ${service.price}
                                                                                          </p>
                                                                                          <button
                                                                                                    type='button'
                                                                                                    className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
                                                                                                    aria-label='Open dialog'
                                                                                          >
                                                                                                    <PlusIcon size={12} />
                                                                                          </button>
                                                                                </div>
                                                                      </div>
                                                            </DialogTrigger>
                                                            <DialogContainer>
                                                                      <DialogContent
                                                                                style={{
                                                                                          borderRadius: '24px',
                                                                                }}
                                                                                className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                                                                      >
                                                                                <DialogImage
                                                                                          src={service.image}
                                                                                          alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                                                                                          className='h-full w-full'
                                                                                />
                                                                                <div className='p-6 space-y-3'>
                                                                                          <DialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                                                                                                    {service.title}
                                                                                          </DialogTitle>
                                                                                          <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                                                                                                    {service.description}
                                                                                          </DialogSubtitle>
                                                                                          <DialogDescription
                                                                                                    disableLayoutAnimation
                                                                                                    variants={{
                                                                                                              initial: { opacity: 0, scale: 0.8, y: 100 },
                                                                                                              animate: { opacity: 1, scale: 1, y: 0 },
                                                                                                              exit: { opacity: 0, scale: 0.8, y: 100 },
                                                                                                    }}
                                                                                          >
                                                                                                    <div className='flex justify-between'>
                                                                                                              <p className='text-zinc-700 dark:text-zinc-400'>
                                                                                                                        Price: <span className="font-bold">${service.price}</span>
                                                                                                              </p>
                                                                                                              <p className='text-zinc-700 dark:text-zinc-400'>
                                                                                                                        Duration: 1 month
                                                                                                              </p>
                                                                                                    </div>
                                                                                                    <div className="flex justify-end mt-4">
                                                                                                              <a
                                                                                                                        className={cn(buttonVariants({ className: "inline-flex" }))}
                                                                                                                        href='https://wa.me/+8801712345678'
                                                                                                                        target='_blank'
                                                                                                                        rel='noopener noreferrer'
                                                                                                              >
                                                                                                                        Order now
                                                                                                              </a>
                                                                                                    </div>
                                                                                          </DialogDescription>
                                                                                </div>
                                                                                <DialogClose className='text-zinc-50' />
                                                                      </DialogContent>
                                                            </DialogContainer>
                                                  </Dialog>
                                        ))}
                              </div>
                              {services.length < digitalServices.length && (
                                        <div className='flex justify-center mt-8'>
                                                  <Button
                                                            variant='default'
                                                            onClick={handleClickMoreServices}
                                                  >
                                                            More services
                                                  </Button>
                                        </div>
                              )}
                    </Container>
          )
}