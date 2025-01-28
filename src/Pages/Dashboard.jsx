import PatientCard from "../Component/PatientCard";
import PatientDetails from "../Component/PateientDetails";
import usePatientStore from "../Store/usePatientStore";
import DiagnosisCard from "../components/DiagnosisCard";
import { DiagnosticResult } from "../Component/DiagnosticResult";
import { LabResults } from "../Component/LabResults";
import Navbar from "../Component/Navbar";
const Dashboard = () => {
  const patients = usePatientStore((state) => state.patients);

  return (
    <section className="flex flex-col gap-10 bg-[#F6F7F8] p-6">
      <article>
        <Navbar />{" "}
      </article>
      <div className="grid grid-cols-12 gap-4 p-6">
        <div className="col-span-3 space-y-4 bg-white rounded-lg shadow mt-4 h-[1054px] overflow-y-auto  px-4 py-10 ">
          <h2 className="flex  px-6 justify-between text-xl font-semibold mb-4">
            Patients{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.995"
                height="18"
                viewBox="0 0 17.995 18"
              >
                <path
                  id="search_FILL0_wght300_GRAD0_opsz24"
                  d="M142.675-811.574a6.293,6.293,0,0,1-4.626-1.895,6.293,6.293,0,0,1-1.895-4.626,6.293,6.293,0,0,1,1.895-4.626,6.293,6.293,0,0,1,4.626-1.895,6.293,6.293,0,0,1,4.626,1.895,6.293,6.293,0,0,1,1.895,4.626,6.254,6.254,0,0,1-.383,2.182,6.1,6.1,0,0,1-1.023,1.808l6.135,6.135a.773.773,0,0,1,.227.557.754.754,0,0,1-.227.567.765.765,0,0,1-.562.232.765.765,0,0,1-.562-.232l-6.135-6.135a6.1,6.1,0,0,1-1.839,1.033,6.318,6.318,0,0,1-2.151.373Zm0-1.6a4.749,4.749,0,0,0,3.491-1.43,4.749,4.749,0,0,0,1.43-3.491,4.749,4.749,0,0,0-1.43-3.491,4.749,4.749,0,0,0-3.491-1.43,4.749,4.749,0,0,0-3.491,1.43,4.749,4.749,0,0,0-1.43,3.491,4.749,4.749,0,0,0,1.43,3.491A4.749,4.749,0,0,0,142.675-813.173Z"
                  transform="translate(-136.155 824.614)"
                  fill="#072635"
                />
              </svg>
            </span>
          </h2>
          <div className=" overflow-y-scroll">
            {patients?.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </div>
        </div>
        <div className="col-span-6 p-4">
          <DiagnosisCard />
          <DiagnosticResult />
        </div>
        <div className="col-span-3 p-4">
          <PatientDetails />
          <LabResults />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
