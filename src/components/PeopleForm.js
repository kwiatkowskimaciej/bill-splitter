import { useState } from 'react';
import PersonCard from './PersonCard';
import CardPlaceholder from './CardPlaceholder';

export default function PeopleForm(props) {
  const [formValues, setFormValues] = useState([]);

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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {formValues.map((element, index) => (
          <PersonCard
            key={index}
            onChange={(e) => handleChange(index, e)}
            valueName={element.name || ''}
            valueAmount={element.amount || ''}
            remove={() => removeFormFields(index)}
          />
      ))}

      <CardPlaceholder setCalculatorOpen={props.setCalculatorOpen} addPersonCard={addFormFields}/>

      <div className="absolute bottom-[120px] left-0 right-0 flex justify-center mx-auto px-6 text-[#ffffff]">
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
