export default function CardPlaceholder(props) {
  return (
    <div className="border-dashed border-[1px] border-black rounded-xl h-[109px] flex items-center justify-center"
    onClick={() => props.setCalculatorOpen(true)}>
      <p className="text-center">+ Add person</p>
    </div>
  )
}