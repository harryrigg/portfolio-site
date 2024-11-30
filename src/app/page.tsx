import { Metadata } from "next";
import Site from "./site";

export const metadata: Metadata = {
  title: "Harry Rigg",
  description:
    "Harry Rigg - Full Stack Web Developer and Software Engineering Student. Explore my projects and get in touch.",
};

export default function Home() {
  return <Site />;
}
