
interface TitleProps {
          title: string,
          subtitle: string
}

export default function Title({ title, subtitle }: TitleProps) {
          const characters = subtitle.split(" ");
          const firstWord = characters[0];
          const secondWord = characters[1];
          const thirdWord = characters[2];
          const restOfWords = characters.slice(3).join(" ");

          const newSubtitle = (
                    <>
                              {firstWord} <span className="text-primary">{secondWord} {thirdWord}</span> {restOfWords}
                    </>
          )

          return (
                    <div className="space-y-1 mb-5">
                              <h1 className="text-sm sm:text-base font-semibold text-primary flex items-center gap-4">
                                        {title} <hr className="border border-primary w-20 rounded-full" />
                              </h1>
                              <p className="text-xl sm:text-2xl font-semibold">
                                        {newSubtitle}
                              </p>
                    </div>
          )
}