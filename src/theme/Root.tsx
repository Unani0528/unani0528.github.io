import React from "react";
import Snowflakes from "@site/src/components/Effect/snowflakes";

interface RootProps {
  children: React.ReactNode;
}

export default function Root({ children }: RootProps): React.JSX.Element {
  return (
    <>
      <Snowflakes />
      {children}
    </>
  );
}
