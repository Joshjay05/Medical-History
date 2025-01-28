import usePatientStore from "../Store/usePatientStore";

export const DiagnosticResult = () => {
  const selectedPatient = usePatientStore((state) => state?.selectedPatient);
  const diagnosticList = selectedPatient?.diagnostic_list;

  if (!diagnosticList?.length) {
    return <p>No diagnostic records found.</p>;
  }

  return (
    <div className=" bg-white shadow-md rounded-2xl p-4 w-full max-w-3xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Diagnostic List
      </h2>
      <div className="h-[270px] overflow-y-scroll">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 font-medium text-gray-600">
                Problem/Diagnosis
              </th>
              <th className="px-4 py-2 font-medium text-gray-600">
                Description
              </th>
              <th className="px-4 py-2 font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticList.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-2 text-gray-800">{item.name}</td>
                <td className="px-4 py-2 text-gray-800">{item.description}</td>
                <td className="px-4 py-2 text-gray-800">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
