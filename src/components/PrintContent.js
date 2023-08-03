import React from 'react';

const PrintContent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="hidden print:block m-10">
      <table className="table-auto border-collapse w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-center"></th>
            <th className="px-4 py-2">Sender</th>
            <th className="px-4 py-2">Recipient</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        {props.response.map((data, index) => (
          <tbody>
          <tr className={`${index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#dddddd]"} border-t`}>
            <td className="px-4 py-2 text-center">{index + 1}</td>
            <td className="px-4 py-2">{data.sender}</td>
            <td className="px-4 py-2">{data.recipient}</td>
            <td className="px-4 py-2">${data.amount.toFixed(2)}</td>
          </tr>
        </tbody>
        ))}
      </table>
    </div>
  );
});

export default PrintContent;
