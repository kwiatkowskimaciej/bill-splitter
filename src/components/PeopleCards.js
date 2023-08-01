import { useEffect, useState } from 'react';
import PeopleForm from './PeopleForm';
import useFormSubmit from '../hooks/useFormSubmit';
import TransferCard from './TransferCard';

export default function PeopleCards() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [firstCardStyle, setFirstCardStyle] = useState({
    position: '300px',
    time: '500ms',
    delay: '0ms',
  });
  const [secondCardStyle, setSecondCardStyle] = useState({
    position: '300px',
    time: '500ms',
    delay: '500ms',
    function: 'ease-out',
  });
  const [thirdCardPosition, setThirdCardPosition] = useState('100vh');
  const [formValues, setFormValues] = useState([]);
  const { isLoading, response, submit } = useFormSubmit();

  useEffect(() => {
    if (calculatorOpen) {
      setFirstCardStyle({ ...firstCardStyle, position: '124px' });
      setSecondCardStyle({ ...secondCardStyle, position: '16px' });
    }
    if (formValues.length === 0) {
      setCalculatorOpen(false);
      setFirstCardStyle({ ...firstCardStyle, position: '300px' });
      setSecondCardStyle({ ...secondCardStyle, position: '300px' });
    }
    if (response !== null) {
      setSecondCardStyle({
        ...secondCardStyle,
        position: '300px',
        delay: '0ms',
        function: 'ease-in',
      });
      setFirstCardStyle({
        ...firstCardStyle,
        position: '300px',
        time: '500ms',
        delay: '500ms',
      });
      setThirdCardPosition('124px');
      setTimeout(() => {
        setSecondCardStyle({
          ...secondCardStyle,
          position: '16px',
          delay: '500ms',
          function: 'ease-out',
        });
      }, 500);
    }
  }, [calculatorOpen, formValues, response]);

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
        style={{
          top: `${secondCardStyle.position}`,
          transitionDelay: `${secondCardStyle.delay}`,
          transitionTimingFunction: `${secondCardStyle.function}`,
        }}
        hidden={!calculatorOpen}
      >
        {response !== null ? (
          <>
            <p className="font-['Roboto'] text-xl font-medium text-[#ffffff]">
              Money transfers:
            </p>
            <p className="font-['Roboto'] text-[#ffffff]">Print</p>
          </>
        ) : (
          <>
            <p className="font-['Roboto'] text-xl font-medium text-[#ffffff]">
              Total: ${totalAmount.toFixed(2)}
            </p>
            <p className="font-['Roboto'] text-[#ffffff]">
              Number of people: {formValues.length}
            </p>
          </>
        )}
      </div>
      <PeopleForm
        formValues={formValues}
        setFormValues={setFormValues}
        calculatorOpen={calculatorOpen}
        setCalculatorOpen={setCalculatorOpen}
        firstCardStyle={firstCardStyle}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <div
        className={`transition-[top] ease-out duration-500 delay-500 w-screen h-[calc(100vh-160px)] bg-secondary absolute rounded-t-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7 flex flex-col gap-5 overflow-y-auto pb-[20px]`}
        style={{ top: `${thirdCardPosition}` }}
      >
        {response !== null
          ? response.map((data, index) => (
              <TransferCard key={index} data={data}/>
            ))
          : null}
      </div>
    </div>
  );
}
