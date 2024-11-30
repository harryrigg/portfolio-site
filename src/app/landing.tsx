import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { ArrowDown } from "lucide-react";

export default function Landing() {
  const socialIconsProps = {
    size: 32,
    className: "hover:-translate-y-1 transition-transform",
  };

  return (
    <header className="relative flex h-screen flex-col items-center justify-center">
      <h1 className="mb-6">Harry Rigg</h1>
      <h4>Full Stack Web Developer</h4>
      <h4>Software Engineering Student</h4>

      <div className="mt-8 flex gap-6">
        <a target="_blank" href="https://github.com/harryrigg">
          <SiGithub {...socialIconsProps} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/harry-rigg-4a5bb8301"
        >
          <SiLinkedin {...socialIconsProps} />
        </a>
      </div>

      <div className="absolute bottom-5 flex -translate-x-1/2 animate-bounce items-center gap-3">
        <ArrowDown /> Scroll down to view my projects
      </div>
    </header>
  );
}
