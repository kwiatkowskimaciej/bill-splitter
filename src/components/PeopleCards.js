import { useReducer, useState } from "react";
import CardPlaceholder from "./CardPlaceholder";

function reducer(state, action) {
  if (action.type === 'increment_people') {
    return {
      numberOfPeople: state.numberOfPeople + 1
    }
  }
  throw Error('Unknown action.')
}

function positionReducer(card, action) {
  if (action.type === 'change_position') {
    return {
      position: card.position - 200
    }
  throw Error('Unknown action')
}
}

export default function PeopleCards() {
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [card, cardDispatch] = useReducer(positionReducer, {position: 300})
  const [state, dispatch] = useReducer(reducer, { numberOfPeople: 0 })

  function handleClick() {
    dispatch({ type: 'increment_people'})
    cardDispatch({ type: 'change_position'})
  }

  return (
    <div className="w-screen h-[calc(100vh-60px)] absolute bottom-0 overflow-hidden">
      <div className={`w-screen h-screen bg-tertiary absolute top-[16px] rounded-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7`} hidden={!calculatorOpen}>
        <p className="font-['Roboto'] text-xl font-medium text-[#ffffff]">Total: $665</p>
      </div>
      <div className={`w-screen h-full bg-secondary absolute rounded-t-3xl top-[${card.position}px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7`}
      >
        <CardPlaceholder setCalculatorOpen={setCalculatorOpen} changeNumberOfPeople={handleClick}/>
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
  )
}