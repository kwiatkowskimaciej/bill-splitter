import { useEffect, useState } from 'react';
import PeopleForm from './PeopleForm';
import useFormSubmit from '../hooks/useFormSubmit';
import TransferCard from './TransferCard';
import NoTransfersMessage from './NoTransfersMessage';
import PrintButton from './PrintButton';

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
  const { isLoading, response, setResponse, submit } = useFormSubmit();
  const [buttonsPosition, setButtonsPosition] = useState('-98px');
  const [back, setBack] = useState(false);

  useEffect(() => {
    if (formValues.length === 0) {
      setCalculatorOpen(false);
      setResponse(null)
      setBack(false)
      setFirstCardStyle({ ...firstCardStyle, position: '300px' });
      setSecondCardStyle({ ...secondCardStyle, position: '300px' });
    }
  }, [formValues.length]);

  useEffect(() => {
    if (calculatorOpen) {
      setFirstCardStyle({ ...firstCardStyle, position: '124px' });
      setSecondCardStyle({ ...secondCardStyle, position: '16px' });
    }
    if (response !== null) {
      setButtonsPosition('0px');
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
    if (back) {
      setSecondCardStyle({
        ...secondCardStyle,
        position: '300px',
        delay: '0ms',
        function: 'ease-in',
      });
      setFirstCardStyle({
        ...firstCardStyle,
        position: '124px',
        time: '500ms',
      });
      setTimeout(() => {
        setButtonsPosition('-98px');
      }, 700);
      setThirdCardPosition('100vh');
      setTimeout(() => {
        setSecondCardStyle({
          ...secondCardStyle,
          position: '16px',
          delay: '500ms',
          function: 'ease-out',
        });
      }, 500);
    }
  }, [calculatorOpen, response, back]);

  const totalAmount = formValues.reduce(
    (total, person) => total + parseFloat(person.amount || 0),
    0
  );

  let handleSubmit = async (event) => {
    event.preventDefault();
    await submit(formValues);
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
        {response !== null && !back ? (
          <div className='flex justify-between items-center gap-2'>
            <p className="font-['Roboto'] text-2xl font-medium text-[#ffffff]">
              Money transfers:
            </p>
            <PrintButton response={response}/>
          </div>
        ) : (
          <>
            <p className="font-['Roboto'] text-2xl font-medium text-[#ffffff]">
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
        setBack={setBack}
      />
      <div
        className={`transition-[top] ease-out duration-500 delay-500 w-screen h-[calc(100vh-160px-96px)] bg-secondary absolute rounded-t-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7 flex flex-col gap-5 overflow-y-auto pb-[44px]`}
        style={{
          top: `${response ? thirdCardPosition : '100vh'}`,
        }}
      >
        {response?.length === 0 ? <NoTransfersMessage /> : null}
        {response !== null
          ? response.map((data, index) => (
              <TransferCard key={index} data={data} />
            ))
          : null}
      </div>
      {response !== null && (
        <div
          className="transition-[bottom] ease-out duration-500 fixed bottom-[-98px] left-0 right-0 flex justify-end gap-2 mx-auto px-6 text-[#ffffff] bg-secondary p-[20px] border border-tertiary rounded-t-3xl"
          style={{
            bottom: `${buttonsPosition}`,
          }}
        >
          <button
            type="button"
            className="text-tertiary inline-flex items-center justify-center font-['Montserrat'] font-semibold h-[56px] rounded-full disabled:bg-[#1D1B20] disabled:opacity-[0.12] px-6 border"
            onClick={() => {
              window.location.reload(true);
            }}
          >
            Start over
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center font-['Montserrat'] font-semibold bg-tertiary h-[56px] rounded-full disabled:bg-[#1D1B20] disabled:opacity-[0.12] px-6"
            onClick={() => {
              setBack(true);
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
