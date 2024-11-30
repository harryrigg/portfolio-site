import Card from "@/lib/components/card";

const projects = [
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
  {
    title: "Calculator",
    imageName: "calculator.png",
    siteHref: "https://svelte-calculator.harryrigg.com",
    githubHref: "https://github.com/harryrigg/svelte_calculator",
    description:
      "Simple calculator with design and behaviour inspired by the MacOS calculator app",
  },
];

export default function Showcase() {
  return (
    <>
      <main className="relative grid gap-[1px] bg-zinc-800 lg:h-screen lg:grid-cols-2 lg:grid-rows-2">
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
    </>
  );
}