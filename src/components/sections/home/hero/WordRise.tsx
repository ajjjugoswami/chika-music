import { Fragment } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./WordRise.module.css";

interface WordRiseProps {
  text: string;
  offset?: number;
  className?: string;
}

export function WordRise({ text, offset = 0, className }: WordRiseProps) {
  const words = text.split(" ").filter(Boolean);

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className={cn(styles.word, styles[`delay${offset + index}`], className)}>{word}</span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
