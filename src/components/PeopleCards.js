import { useEffect, useState } from "react";
import CardPlaceholder from "./CardPlaceholder";

export default function PeopleCards() {
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [firstCardPosition, setFirstCardPosition] = useState(300)
  const [secondCardPosition, setSecondCardPosition] = useState(300)

  useEffect(() => {
    if (calculatorOpen) {
      setFirstCardPosition(100)
      setSecondCardPosition(16)
    }
  }, [calculatorOpen])

  return (
    <div className="w-screen h-[calc(100vh-60px)] absolute bottom-0 overflow-hidden">
      <div className={`transition-[top] ease-out duration-500 delay-500 w-screen h-screen bg-tertiary absolute top-[${secondCardPosition}px] rounded-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7`} hidden={!calculatorOpen}>
        <p className="font-['Roboto'] text-xl font-medium text-[#ffffff]">Total: $665</p>
      </div>
      <div className={`transition-[top] ease-out duration-500 w-screen h-full bg-secondary absolute rounded-t-3xl top-[${firstCardPosition}px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7`}>
        <CardPlaceholder setCalculatorOpen={setCalculatorOpen}/>
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