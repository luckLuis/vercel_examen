import React, { useState, useEffect } from "react";
import Advice from "./Advice";

function GiveAdvice() {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    async function advice() {
      setIsLoading(true);
      await fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => {
          const { advice } = data.slip;
          setAdvice(advice);
        })
        .catch((error) => console.log(error));
      setIsLoading(false);
    }
    advice();
  }, [advice]);

  return (
    <div>
      <Advice
        changeAdvice={() => setAdvice()}
        advice={advice}
        isLoading={isLoading}
      />
    </div>
  );
}

export default GiveAdvice;
