import React, {
  JSXElementConstructor,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  transitionDuration?: number;
  wrapperTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const transitionDuration =
    typeof props.transitionDuration === "number"
      ? props.transitionDuration
      : 400;
  const WrapperTag = props.wrapperTag || "div";

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (wrapperRef.current) {
      observerRef.current.observe(wrapperRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <WrapperTag
      className={props.className}
      ref={wrapperRef}
      style={{
        transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
        transform: isVisible ? "none" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {React.Children.map(props.children, (child) => (
        <div className={props.childClassName}>{child}</div>
      ))}
    </WrapperTag>
  );
}
