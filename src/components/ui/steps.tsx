import { Children, isValidElement } from "react";

type StepProps = { title: string; children?: React.ReactNode };

/** Steps içindeki tek adım. Numarayı Steps verir. */
export function Step({ title, children }: StepProps) {
  return (
    <>
      <p className="font-semibold">{title}</p>
      {children && (
        <div className="mt-1 text-base leading-7 [&_li]:my-1 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>ol]:my-3 [&>p]:my-2 [&>ul]:my-3">
          {children}
        </div>
      )}
    </>
  );
}

/** Numaralı adımlar: <Steps><Step title="...">...</Step></Steps> */
export function Steps({ children }: { children: React.ReactNode }) {
  const steps = Children.toArray(children).filter(isValidElement);
  return (
    <ol className="my-8 space-y-6">
      {steps.map((step, i) => (
        <li
          key={i}
          className="relative pl-12 before:absolute before:top-9 before:bottom-[-1.25rem] before:left-[0.9375rem] before:w-px before:bg-accent/25 last:before:hidden"
        >
          <span
            aria-hidden
            className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-fg"
          >
            {i + 1}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}
