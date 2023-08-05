export default function CardPlaceholder(props) {
  const handleClick = () => {
    props.setCalculatorOpen(true);
    props.addPersonCard();
  };

  return (
      <div
        className="sm:w-[358px] sm:h-[109px] border-dashed border-[1px] border-black rounded-xl min-h-[109px] flex items-center justify-center"
        onClick={handleClick}
      >
        <button type="button" className="text-center">+ Add person</button>
      </div>
  );
}
