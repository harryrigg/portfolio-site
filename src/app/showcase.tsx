import Card from "@/lib/components/card";
import { forwardRef } from "react";

const projects = [
  {
    title: "InvSuite",
    imageName: "invsuite.png",
    siteHref: "https://invsuite.harryrigg.com",
    githubHref: "https://github.com/harryrigg/invsuite",
    description:
      "Inventory management application built with Laravel and NextJS",
  },
  {
    title: "NoteLocker",
    imageName: "notelocker.png",
    siteHref: "https://notelocker.harryrigg.com",
    githubHref: "https://github.com/harryrigg/notelocker",
    description: "Fully featured note taking CRUD application",
  },
  {
    title: "Sudoku Solver",
    imageName: "sudoku_solver.png",
    siteHref: "https://sudokusolver.harryrigg.com",
    githubHref: "https://github.com/harryrigg/sudoku_solver",
    description:
      "Interactive sudoku puzzle solver with real-time algorithm visualisation",
  },
  {
    title: "React Wordle",
    imageName: "wordle.png",
    siteHref: "https://wordle.harryrigg.com",
    githubHref: "https://github.com/harryrigg/react_wordle",
    description: "Clone of the popular New York Times game, made using React",
  },
];

const showcase = forwardRef<HTMLElement>(function Showcase(_, ref) {
  return (
    <div className="bg-neutral-950 lg:h-[calc(100vh+200px)]">
      <main
        className="grid gap-[1px] border-t border-zinc-800 bg-zinc-800 lg:h-screen lg:grid-cols-2 lg:grid-rows-2 lg:border-t-0"
        ref={ref}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            imageName={project.imageName}
            siteHref={project.siteHref}
            githubHref={project.githubHref}
            className="h-96 lg:h-auto"
          >
            {project.description}
          </Card>
        ))}
      </main>
    </div>
  );
});

export default showcase;
