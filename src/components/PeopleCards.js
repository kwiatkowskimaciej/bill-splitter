import { useEffect, useReducer, useState } from 'react';
import CardPlaceholder from './CardPlaceholder';
import PeopleForm from './PeopleForm';

function reducer(state, action) {
  if (action.type === 'increment_people') {
    return {
      numberOfPeople: state.numberOfPeople + 1,
    };
  }
  throw Error('Unknown action.');
}

export default function PeopleCards() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, { numberOfPeople: 0 });
  const [firstCardPosition, setFirstCardPosition] = useState(300);
  const [secondCardPosition, setSecondCardPosition] = useState(300);

  useEffect(() => {
    if (calculatorOpen) {
      setFirstCardPosition(100);
      setSecondCardPosition(16);
    }
  }, [calculatorOpen]);

  const handleClick = () => {
    dispatch({ type: 'increment_people' });
  };

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
        <PeopleForm />
        <CardPlaceholder
          setCalculatorOpen={setCalculatorOpen}
          changeNumberOfPeople={handleClick}
        />
        <p>Number of people: {state.numberOfPeople}</p>
      </div>
      <div className="absolute bottom-[20px] left-0 right-0 flex justify-center mx-auto px-6 text-[#ffffff]">
        <button
          type="button"
          disabled={!calculatorOpen}
          className="font-['Montserrat'] font-semibold bg-tertiary w-full h-[56px] rounded-full disabled:bg-[#1D1B20] disabled:opacity-[0.12]"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
