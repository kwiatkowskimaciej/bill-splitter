import { useEffect, useState } from 'react';
import PeopleForm from './PeopleForm';
import useFormSubmit from '../hooks/useFormSubmit';

export default function PeopleCards() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [firstCardPosition, setFirstCardPosition] = useState(300);
  const [secondCardPosition, setSecondCardPosition] = useState(300);
  const [formValues, setFormValues] = useState([]);
  const { isLoading, response, submit } = useFormSubmit();

  useEffect(() => {
    if (calculatorOpen) {
      setFirstCardPosition(124);
      setSecondCardPosition(16);
    }
    if (formValues.length === 0) {
      setCalculatorOpen(false);
      setFirstCardPosition(300);
      setSecondCardPosition(300);
    }
  }, [calculatorOpen, formValues]);

  const totalAmount = formValues.reduce(
    (total, person) => total + parseFloat(person.amount || 0),
    0
  );

  let handleSubmit = (event) => {
    event.preventDefault();
    submit(formValues);
  };

  return (
    <div className="w-screen h-[calc(100vh-60px)] absolute bottom-0 overflow-hidden">
      <div
        className={`transition-[top] ease-out duration-500 delay-500 w-screen h-screen bg-tertiary absolute rounded-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7`}
        style={{ top: `${secondCardPosition}px` }}
        hidden={!calculatorOpen}
      >
        <p className="font-['Roboto'] text-xl font-medium text-[#ffffff]">
          Total: ${totalAmount.toFixed(2)}
        </p>
        <p className="font-['Roboto'] text-[#ffffff]">
          Number of people: {formValues.length}
        </p>
      </div>
      <PeopleForm
        formValues={formValues}
        setFormValues={setFormValues}
        calculatorOpen={calculatorOpen}
        setCalculatorOpen={setCalculatorOpen}
        firstCardPosition={firstCardPosition}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
