import { useRef } from 'react';
import PrintContent from './PrintContent';
import ReactToPrint from 'react-to-print';

export default function PrintButton(props) {
  const componentRef = useRef();
  return (
    <>
      <ReactToPrint
        trigger={() => (
          <button
            className="inline-flex items-center justify-center font-['Montserrat'] font-semibold bg-tertiary text-[#ffffff] border h-[56px] rounded-full disabled:bg-[#1D1B20] disabled:opacity-[0.12] px-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z"
                clipRule="evenodd"
              />
            </svg>
            Print
          </button>
        )}
        content={() => componentRef.current}
      />
      <PrintContent ref={componentRef} response={props.response} />
    </>
  );
}
