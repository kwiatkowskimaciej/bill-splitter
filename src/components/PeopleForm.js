import { useEffect, useRef, useState } from 'react';
import PersonCard from './PersonCard';
import CardPlaceholder from './CardPlaceholder';

export default function PeopleForm(props) {
  const [formValues, setFormValues] = useState([]);

  const cardContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the div when formValues change
    if (cardContainerRef.current) {
      const lastCard = cardContainerRef.current.lastChild;
      lastCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [formValues]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: '', amount: '' }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div
      ref={cardContainerRef}
        className={`transition-[top] ease-out duration-500 w-screen h-[calc(100vh-160px-96px)] bg-secondary absolute top-[300px] rounded-t-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7 flex flex-col gap-5 overflow-y-auto pb-[20px]`}
        style={{ top: `${props.firstCardPosition}px` }}
      >
        {formValues.map((element, index) => (
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
          className="font-['Montserrat'] font-semibold bg-tertiary w-full h-[56px] rounded-full disabled:bg-[#1D1B20] disabled:opacity-[0.12]"
        >
          Calculate
        </button>
      </div>
    </form>
  );
}
