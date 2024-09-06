import Container from "@/components/container";
import Title from "@/components/title";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContainer, DialogContent, DialogDescription, DialogImage, DialogSubtitle, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Config, TService } from "@/config";
import { cn } from "@/lib/utils";
import { PlusIcon } from 'lucide-react';
import { useEffect, useState } from "react";

export default function Services() {
          const [services, setServices] = useState<TService[]>([]);

          const handleClickMoreServices = () => {
                    setServices((prevServices) => [
                              ...prevServices,
                              ...Config.digitalServices.slice(prevServices.length, prevServices.length + 3)
                    ]);
          }

          useEffect(() => {
                    setServices(Config.digitalServices.slice(0, 6));
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
                                                                                          alt={`Services ${index + 1}`}
                                                                                          className='h-64 w-full'
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
                                                                                                    </div>
                                                                                                    <div className="flex justify-end mt-4">
                                                                                                              <a
                                                                                                                        className={cn(buttonVariants({ className: "inline-flex" }))}
                                                                                                                        href='https://wa.me/+17075748645'
                                                                                                                        target='_blank'
                                                                                                                        rel='noopener noreferrer'
                                                                                                              >
                                                                                                                        Order now
                                                                                                              </a>
                                                                                                    </div>
                                                                                          </DialogDescription>
                                                                                </div>
                                                                                <DialogClose className='text-primary' />
                                                                      </DialogContent>
                                                            </DialogContainer>
                                                  </Dialog>
                                        ))}
                              </div>
                              {services.length < Config.digitalServices.length && (
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