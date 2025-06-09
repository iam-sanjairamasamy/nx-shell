import { cn } from "./../../lib/utils";

function H1Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-4xl font-light tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h1>
  );
}

function H2Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-light tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

function H3Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-light tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

function H4Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-light tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

function PText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn("leading-7 font-light [&:not(:first-child)]:mt-6", className)}
    >
      {children}
    </p>
  );
}

function QuoteText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic font-light", className)}>
      {children}
    </blockquote>
  );
}

function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 font-light", className)}>
      {children}
    </ul>
  );
}

function MutedLeadText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-muted-foreground text-xl font-light", className)}>
      {children}
    </p>
  );
}

function LargeText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-lg font-light", className)}>
      {children}
    </div>
  );
}

function SmallText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <small className={cn("text-sm leading-none font-light", className)}>
      {children}
    </small>
  );
}

function MutedText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-muted-foreground text-sm font-light", className)}>
      {children}
    </p>
  );
}

export {
  H1Text,
  H2Text,
  H3Text,
  H4Text,
  PText,
  QuoteText, 
  List,
  MutedLeadText,
  LargeText,
  SmallText,
  MutedText
};
