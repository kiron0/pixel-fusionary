interface TitleProps {
          title: string;
          subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
          const words = subtitle.split(" ");

          const newSubtitle = <>{words[0]} <span className="text-primary"> {words[1]} {words[2]}</span> {words.slice(3).join(" ")}</>

          return (
                    <div className="space-y-1 mb-5">
                              <h1 className="text-sm sm:text-base font-semibold text-primary flex items-center gap-4">
                                        {title} <hr className="border border-primary w-20 rounded-full" />
                              </h1>
                              <p className="text-xl sm:text-2xl font-semibold">
                                        {newSubtitle}
                              </p>
                    </div>
          );
}
