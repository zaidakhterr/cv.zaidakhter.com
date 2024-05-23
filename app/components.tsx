"use client";

import { cn } from "@/lib/utils";
import { IconArrowUpRight, IconPrinter } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

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

export const Link = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="group relative leading-5 inline-flex items-center hover:underline font-medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <IconArrowUpRight size={15} />
    </a>
  );
};

export const Header = ({
  image,
  title,
  subtitle,
  links,
}: {
  image: StaticImageData;
  title: string;
  subtitle: string;
  links: {
    name: string;
    text: string;
    href: string;
    icon: JSX.Element;
  }[];
}) => {
  return (
    <div className="flex gap-4 mb-6">
      <Image
        src={image}
        alt={title}
        style={{
          width: 90,
          height: 90,
        }}
        className="rounded-sm"
      />
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">{title}</h1>
        <p className="text-lg mb-1">{subtitle}</p>
      </div>
      <div className="flex flex-col items-start gap-1 text-sm ml-auto">
        {links.map((link, idx) => (
          <Link key={idx} href={link.href}>
            {link.icon}
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-8">{children}</div>;
};

export const SectionTitle = ({ text }: { text: string }) => {
  return <h2 className="font-semibold border-b border-zinc-900/25 mb-3 uppercase tracking-wide">{text}</h2>;
};

export const Section = ({
  line1,
  line1End,
  line2,
  line2End,
  compact = false,
  link,
}: {
  line1: string;
  line1End?: string;
  line2?: string;
  line2End?: string;
  compact?: boolean;
  link?: string;
}) => {
  return (
    <>
      <div className={cn("flex items-center justify-between")}>
        <h3 className="font-semibold">
          {link ? (
            <>
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1 hover:underline"
              >
                {line1}
                <IconArrowUpRight size={16} />
              </a>
            </>
          ) : (
            line1
          )}
        </h3>
        <p>{line1End}</p>
      </div>
      <div className={cn("flex items-center justify-between", compact ? "mb-0" : "mb-1")}>
        <p>{line2}</p>
        <p>{line2End}</p>
      </div>
    </>
  );
};

export const SectionList = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <ul className="ml-4 print:ml-5 list-disc marker:text-zinc-900/25 mb-1">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};
