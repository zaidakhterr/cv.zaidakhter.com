"use client";

import { cn } from "@/lib/utils";
import { IconPrinter } from "@tabler/icons-react";

export const PrintCV = () => {
  return (
    <button
      className="fixed right-6 bottom-6 w-14 h-14 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center print:hidden shadow-lg hover:bg-zinc-200 transition-colors"
      onClick={() => {
        window.print();
      }}
    >
      <IconPrinter size={24} />
    </button>
  );
};

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[297mm] w-[210mm] ml-auto mr-auto px-16 py-16 bg-white mb-6 shadow print:shadow-none print:mb-0">
      {children}
    </div>
  );
};

export const PageTitle = ({ text }: { text: string }) => {
  return <h1 className="text-center text-2xl font-semibold text-blue-600">{text}</h1>;
};

export const PageSubTitle = ({ text }: { text: string }) => {
  return <p className="text-center text-lg mb-1">{text}</p>;
};

export const Link = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a href={href} className="group relative leading-5" target="_blank" rel="noopener noreferrer">
      {children}
      <span className="w-full h-px bg-blue-600/30 absolute bottom-0 left-0 group-hover:bg-blue-600/50 transition-colors" />
    </a>
  );
};

export const Links = ({
  links,
}: {
  links: {
    name: string;
    text: string;
    href: string;
    icon: JSX.Element;
  }[];
}) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      {links.map((link, idx) => (
        <>
          <Link key={link.name} href={link.href}>
            {link.text}
          </Link>
          {idx < links.length - 1 && (
            <span key={`seperator-${idx}`} className="text-zinc-400">
              |
            </span>
          )}
        </>
      ))}
    </div>
  );
};

export const SectionTitle = ({ text }: { text: string }) => {
  return <h2 className="text-center text-lg font-semibold border-b border-blue-600/25 mt-3 mb-3 pb-1">{text}</h2>;
};

export const Section = ({
  line1,
  line1End,
  line2,
  line2End,
  compact = false,
}: {
  line1: string;
  line1End?: string;
  line2?: string;
  line2End?: string;
  compact?: boolean;
}) => {
  return (
    <>
      <div className={cn("flex items-center justify-between", compact ? "mt-1" : "mt-3")}>
        <h3 className="font-semibold">{line1}</h3>
        <p>{line1End}</p>
      </div>
      <div className={cn("flex items-center justify-between", compact ? "mb-0" : "mb-3")}>
        <p>{line2}</p>
        <p>{line2End}</p>
      </div>
    </>
  );
};

export const SectionList = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <ul className="ml-4 print:ml-5 list-disc marker:text-blue-600">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};
