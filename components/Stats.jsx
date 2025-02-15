"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 26,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 md:pt-0 md:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vh] mx-auto md:max-w-none ">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl md:text-6xl font-extrabold  "
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 ml-5 `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
