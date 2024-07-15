import React from "react";
import Loader from "./Loader";

const GeneralTable = ({ data, loading, actions }) => {
  if (loading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const headers = Object.keys(data[0]);
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="text-center">
            {headers.map((header) => (
              <th
                key={header}
                className="py-2 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap border-b"
              >
                {capitalize(header)}
              </th>
            ))}
            {actions.length > 0 && (
              <th className="py-2 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl border-b">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="text-center divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td
                  key={header}
                  className="py-1 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl border-b"
                >
                  {row[header]}
                </td>
              ))}
              {actions.length > 0 && (
                <td className="py-1 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 flex flex-wrap justify-center space-x-1">
                  {actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      className="bg-blue-500 text-white py-1 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 mx-1 my-1 rounded text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl border-none hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      onClick={() => action.onClick(row)}
                    >
                      {action.label}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeneralTable;