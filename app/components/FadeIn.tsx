"use client";

import * as React from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  once?: boolean;
  threshold?: number;
};

export default function FadeIn({
  children,
  className,
  as,
  once = true,
  threshold = 0.2,
}: FadeInProps) {
  const Tag = (as ?? "div") as keyof JSX.IntrinsicElements;
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-fadein="true"
      data-visible={visible ? "true" : "false"}
      className={className}
    >
      {children}
    </Tag>
  );
}

