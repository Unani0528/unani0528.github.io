import React from "react";

const SNOWFLAKES: readonly string[] = ["❅", "❅", "❆", "❄", "❅", "❆", "❄", "❅", "❆", "❄"];

export default function Snowflakes(): React.JSX.Element {
  return (
    <div className="snowflakes" aria-hidden="true">
      {SNOWFLAKES.map((symbol, index) => (
        <div key={index} className="snowflake">
          {symbol}
        </div>
      ))}
    </div>
  );
}
