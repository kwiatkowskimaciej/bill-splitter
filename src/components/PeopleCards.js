import CardPlaceholder from "./CardPlaceholder";

export default function PeopleCards() {
  return (
    <div className="w-screen h-screen absolute inset-0 overflow-hidden">
      <div className="w-screen h-screen bg-secondary absolute top-[300px] rounded-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7">
        <CardPlaceholder />
      </div>
      <div className="absolute bottom-[20px] left-0 right-0 flex justify-center mx-auto px-6 text-[#ffffff]">
        <button
          type="button"
          className="font-['Montserrat'] font-semibold bg-tertiary w-full h-[56px] rounded-full"
        >
          Calculate
        </button>
        </div>
    </div>
  )
}