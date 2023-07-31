export default function CardPlaceholder(props) {
  const handleClick = () => {
    props.setCalculatorOpen(true)
    props.changeNumberOfPeople()
  }

  return (
    <div className="border-dashed border-[1px] border-black rounded-xl h-[109px] flex items-center justify-center"
    onClick={handleClick}>
      <p className="text-center">+ Add person</p>
    </div>
  )
}