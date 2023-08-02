export default function TransferCard(props) {
  return (
    <div className="drop-shadow-lg border-solid border-[1px] border-black rounded-xl bg-[#FEF7FF] min-h-[139px] flex items-center justify-between px-7">
      <div>
        <div className="mb-2.5">
          <p className="font-['Roboto'] font-semibold text-sm">Sender</p>
          <p>{props.data.sender}</p>
        </div>
        <div>
          <p className="font-['Roboto'] font-semibold text-sm">Recipient</p>
          <p>{props.data.recipient}</p>
        </div>
      </div>
      <div className="relative bottom-[8px]">
        <p className="font-['Roboto'] font-semibold text-lg text-right">Amount:</p>
        <p className="font-['Roboto'] font-normal text-5xl text-right">${props.data.amount.toFixed(2)}</p>
      </div>
    </div>
  );
}
