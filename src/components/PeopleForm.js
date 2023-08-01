import { useState } from 'react';
import PersonCard from './PersonCard';

export default function PeopleForm() {
  const [formValues, setFormValues] = useState([{ name: '', amount: '' }]);

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
        <PersonCard key={index} onChange={e => handleChange(index, e)} valueName={element.name || ""} valueAmount={element.amount || ""}/>
      ))}

      <div className="button-section">
        <button
          className="button add"
          type="button"
          onClick={() => addFormFields()}
        >
          Add
        </button>
        <button className="button submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
