import { useEffect, useState } from 'react';
import PeopleForm from './PeopleForm';

export default function PeopleCards() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [firstCardPosition, setFirstCardPosition] = useState(300);
  const [secondCardPosition, setSecondCardPosition] = useState(300);

  useEffect(() => {
    if (calculatorOpen) {
      setFirstCardPosition(100);
      setSecondCardPosition(16);
    }
  }, [calculatorOpen]);

  return (
    <div className="w-screen h-[calc(100vh-60px)] absolute bottom-0 overflow-hidden">
      <div
        className={`transition-[top] ease-out duration-500 delay-500 w-screen h-screen bg-tertiary absolute rounded-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7`}
        style={{ top: `${secondCardPosition}px` }}
        hidden={!calculatorOpen}
      >
        <p className="font-['Roboto'] text-xl font-medium text-[#ffffff]">
          Total: $665
        </p>
      </div>
      <div
        className={`transition-[top] ease-out duration-500 w-screen h-full bg-secondary absolute top-[300px] rounded-t-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7 flex flex-col gap-5`}
        style={{ top: `${firstCardPosition}px` }}
      >
        <PeopleForm calculatorOpen={calculatorOpen} setCalculatorOpen={setCalculatorOpen}/>
      </div>
    </div>
  );
}
