import { useEffect, useRef } from 'react';
import PersonCard from './PersonCard';
import CardPlaceholder from './CardPlaceholder';
import useFormSubmit from '../hooks/useFormSubmit';

export default function PeopleForm(props) {
  const cardContainerRef = useRef(null);
  const { isLoading, response, submit } = useFormSubmit();

  useEffect(() => {
    if (cardContainerRef.current) {
      const lastCard = cardContainerRef.current.lastChild;
      lastCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [props.formValues]);

  let handleChange = (i, e) => {
    let newFormValues = [...props.formValues];
    newFormValues[i][e.target.name] = e.target.value;
    props.setFormValues(newFormValues);
  };

  let addFormFields = () => {
    props.setFormValues([...props.formValues, { name: '', amount: '' }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...props.formValues];
    newFormValues.splice(i, 1);
    props.setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    submit(props.formValues);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div
        ref={cardContainerRef}
        className={`transition-[top] ease-out duration-500 w-screen h-[calc(100vh-160px-96px-24px)] bg-secondary absolute top-[300px] rounded-t-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7 flex flex-col gap-5 overflow-y-auto pb-[20px]`}
        style={{ top: `${props.firstCardPosition}px` }}
      >
        {props.formValues.map((element, index) => (
          <PersonCard
            key={index}
            onChange={(e) => handleChange(index, e)}
            valueName={element.name || ''}
            valueAmount={element.amount || ''}
            remove={() => removeFormFields(index)}
          />
        ))}

        <CardPlaceholder
          setCalculatorOpen={props.setCalculatorOpen}
          addPersonCard={addFormFields}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center mx-auto px-6 text-[#ffffff] bg-secondary p-[20px]">
        <button
          type="submit"
          disabled={!props.calculatorOpen}
          className="inline-flex items-center justify-center font-['Montserrat'] font-semibold bg-tertiary w-full h-[56px] rounded-full disabled:bg-[#1D1B20] disabled:opacity-[0.12]"
        >
          {isLoading ? <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg> : null }
          Calculate
        </button>
      </div>
    </form>
  );
}
