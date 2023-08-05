export default function TransferCard(props) {
  return (
    <div className="sm:w-[358px] drop-shadow-lg border-solid border-[1px] border-black rounded-xl bg-[#FEF7FF] flex items-center justify-between py-4 pr-7 pl-8">
      <div className="flex">
        <div>
          <div className="relative -left-[8px] top-[6px] rounded-full border-solid border-2 h-3.5 w-3.5">
          </div>
          <div className="relative top-[6px] -left-[2px] border-dashed border-l-2 h-[calc(100%-74px)]"></div>
          <div className="relative bg-[#000000] -left-[8px] top-[6px] rounded-full border-solid border-2 h-3.5 w-3.5">
          </div>
        </div>
        <div>
          <div className="mb-2.5">
            <p className="font-['Roboto'] font-semibold text-lg">Sender</p>
            <p className="break-all font-['Roboto'] text-2xl">{props.data.sender}</p>
          </div>
          <div>
            <p className="font-['Roboto'] font-semibold text-lg">Recipient</p>
            <p className="font-['Roboto'] text-2xl">{props.data.recipient}</p>
          </div>
        </div>
      </div>
      <div className="relative bottom-[8px]">
        <p className="font-['Roboto'] font-semibold text-lg text-right">
          Amount:
        </p>
        <p className="font-['Roboto'] font-normal text-5xl text-right">
          ${props.data.amount.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
