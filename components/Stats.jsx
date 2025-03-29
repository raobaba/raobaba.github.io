"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function Stats() {
  const [projects, setProjects] = useState(0);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    const fetchProjectsAndCommits = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/raobaba/repos"
        );
        const repos = await response.json();

        setProjects(repos.length); // Update project count

        let totalCommits = 0;
        const commitPromises = repos.map(async (repo) => {
          const commitResponse = await fetch(
            `https://api.github.com/repos/raobaba/${repo.name}/commits?per_page=1`
          );
          const commitData = await commitResponse.json();

          if (commitResponse.headers.get("link")) {
            const lastPageMatch = commitResponse.headers
              .get("link")
              .match(/&page=(\d+)>; rel="last"/);
            if (lastPageMatch) {
              totalCommits += parseInt(lastPageMatch[1], 10);
            }
          } else {
            totalCommits += commitData.length;
          }
        });

        await Promise.all(commitPromises);
        setCommits(totalCommits); // Update commit count
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchProjectsAndCommits();
  }, []);

  const stats = [
    {
      num: 2,
      text: "Years of experience",
    },
    {
      num: projects || 30,
      text: "Projects completed",
    },
    {
      num: 8,
      text: "Technologies mastered",
    },
    {
      num: commits || 2400,
      text: "Code Commits",
    },
  ];

  return (
    <section className='pt-4 pb-12 md:pt-0 md:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vh] mx-auto md:max-w-none'>
          {stats.map((item, index) => (
            <div
              key={index}
              className='flex-1 flex items-center justify-center xl:justify-start'
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className='text-4xl md:text-6xl font-extrabold'
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80 ml-5`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
