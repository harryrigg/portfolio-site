"use client";

import { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import { cn } from "@/lib/utils";
import { LucideProps, Moon, Sun } from "lucide-react";
import { useLocalStorage, useMediaQuery } from "@uidotdev/usehooks";

type Props = {
  className?: string;
};

export default function ThemeToggle({ className }: Props) {
  const systemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const [theme, setTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    systemPrefersDark ? "dark" : "light",
  );

  useEffect(() => {
    if (theme == "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  const onToggle = () => {
    setTheme((v) => (v == "dark" ? "light" : "dark"));
  };

  const iconColor = theme == "dark" ? "black" : "white";
  const iconProps: LucideProps = {
    size: 16,
    fill: iconColor,
    stroke: iconColor,
  };

  const { progress } = useSpring({
    progress: theme == "dark" ? 1 : 0,
    config: { duration: 200 },
  });

  const animatedSpanProps = { className: "absolute" };
  const lightIconSpring = {
    opacity: progress.to((p) => 1 - Math.min(p * 2, 1)),
  };
  const darkIconSpring = {
    opacity: progress.to((p) => Math.max((p - 0.5) * 2, 0)),
  };

  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative z-10 h-6 w-12 rounded-full border border-neutral-400 dark:border-neutral-600",
        className,
      )}
    >
      <span
        className={cn(
          "absolute left-[1px] flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-950 transition-[background-color,left,transform] duration-200 dark:bg-white",
          theme == "dark" && "left-[calc(100%-1px)] -translate-x-full",
        )}
      >
        <animated.span style={darkIconSpring} {...animatedSpanProps}>
          <Moon {...iconProps} />
        </animated.span>
        <animated.span style={lightIconSpring} {...animatedSpanProps}>
          <Sun {...iconProps} />
        </animated.span>
      </span>
    </button>
  );
}
