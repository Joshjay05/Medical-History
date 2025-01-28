import usePatientStore from "../Store/usePatientStore";
import PropTypes from "prop-types";
const PatientCard = ({ patient, active }) => {
  const setSelectedPatient = usePatientStore(
    (state) => state.setSelectedPatient
  );

  return (
    <div
      onClick={() => setSelectedPatient(patient)}
      className={`py-4  rounded-lg flex justify-around items-center ${
        active ? "bg-teal-100 border-l-4 border-teal-500" : "bg-white-50"
      }`}
    >
      <article className="flex items-center gap-2">
        <div className="w-12 h-12">
          <img src={patient?.profile_picture} alt="patient" />
        </div>
        <div>
          <h3 className="text-base font-bold">{patient.name}</h3>
          <p className="text-sm">
            {patient.gender}, {patient.age}
          </p>
        </div>
      </article>
      <button className="text-gray-400 hover:text-gray-600">•••</button>
    </div>
  );
};
PatientCard.propTypes = {
  patient: PropTypes.object.isRequired,
  active: false,
};
export default PatientCard;
