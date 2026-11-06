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
    <ol className="my-8 max-w-prose space-y-6">
      {steps.map((step, i) => (
        <li key={i} className="relative pl-11">
          <span
            aria-hidden
            className="absolute top-0 left-0 flex size-7 items-center justify-center rounded-full border border-border bg-surface text-sm font-medium"
          >
            {i + 1}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}
