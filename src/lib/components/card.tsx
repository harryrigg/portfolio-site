"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";

type Props = {
  title: string;
  imageName: string;
  siteHref: string;
  githubHref: string;
  className?: string;
  children: ReactNode;
};

export default function Card({
  title,
  imageName,
  siteHref,
  githubHref,
  className,
  children,
}: Props) {
  const canHover = useMediaQuery("(pointer: fine)");

  return (
    <section className={cn("group relative bg-zinc-950", className)}>
      <figure
        className={cn(
          "absolute inset-0",
          canHover
            ? "opacity-100 transition-opacity group-hover:opacity-20"
            : "opacity-20",
        )}
      >
        <Image
          alt={title}
          src={`/project_images/${imageName}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          className="object-cover"
        />
      </figure>
      <div
        className={cn(
          "z-5 absolute left-0 top-0 mx-[20%] h-full",
          "flex flex-col justify-center gap-2",
          "text-zinc-200",
          canHover
            ? "opacity-0 transition-opacity group-hover:opacity-100"
            : "opacity-100",
        )}
      >
        <h3>{title}</h3>
        <p>{children}</p>
        <div className="flex flex-col gap-1 stroke-zinc-300 text-zinc-300">
          <span className="flex items-center gap-3">
            <a href={siteHref} target="_blank">
              Check it out
            </a>
          </span>
          <span className="flex items-center gap-3">
            <a href={githubHref} target="_blank">
              View the repository
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
