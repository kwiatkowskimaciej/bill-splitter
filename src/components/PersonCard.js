export default function PersonCard(props) {
  return (
    <div className="sm:w-[358px] sm:h-[109px] drop-shadow-lg border-solid border-[1px] border-black rounded-xl bg-[#FEF7FF] min-h-[109px] flex items-center justify-between px-7">
      <button type="button" onClick={props.remove}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:text-tertiary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
        <span className="sr-only">Delete</span>
      </button>
      <div className="relative -top-3">
        <label
          htmlFor="name"
          className="relative top-3 left-2 z-10 bg-[#FEF7FF] text-md font-['Roboto'] font-medium leading-6 text-gray-900 px-1"
        >
          Name
        </label>
        <div className="relative rounded-md shadow-sm text-lg">
          <input
            type="text"
            name="name"
            id="name"
            value={props.valueName}
            onChange={props.onChange}
            className="block w-full rounded-lg border-0 py-4 pl-3 text-gray-900 ring-1 ring-inset ring-[#000000] focus:ring-2 focus:ring-inset sm:leading-6 max-w-[140px] bg-[#FEF7FF] font-['Roboto']"
            required
          />
        </div>
      </div>
      <div className="relative -top-3">
        <label
          htmlFor="amount"
          className="relative top-3 left-2 z-10 bg-[#FEF7FF] text-md font-['Roboto'] font-medium leading-6 text-gray-900 px-1"
        >
          Amount
        </label>
        <div className="relative rounded-md shadow-sm text-lg">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500">$</span>
          </div>
          <input
            type="number"
            name="amount"
            id="amount"
            value={props.valueAmount}
            onChange={props.onChange}
            className="block w-full rounded-md border-0 py-4 pl-7 text-gray-900 ring-1 ring-inset ring-[#000000] focus:ring-2 focus:ring-inset sm:leading-6 bg-[#FEF7FF] font-['Roboto'] max-w-[104px]"
            placeholder="0.00"
            required
          />
        </div>
      </div>
    </div>
  );
}
