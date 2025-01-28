// import PropTypes from "prop-types";
import usePatientStore from "../Store/usePatientStore";
export default function ProfileCard() {
  const selectedPatient = usePatientStore((state) => state.selectedPatient);

  return (
    <section className="text-center">
      <article>
        <img
          src={selectedPatient?.profile_picture}
          alt={name}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold">{selectedPatient?.name}</h3>
      </article>

      <article>
        <div>
          <img src={selectedPatient?.profile_picture} alt="Profile" />
          <span className="text-xs text-gray-500">
            <p>Date of Birth</p>
            {selectedPatient?.date_of_birth}
          </span>
        </div>
        <p className="text-sm text-gray-700 mt-4">
          <b>Gender</b>
          Gender: {selectedPatient?.gender} <br />
          <p>
            Contact info: {selectedPatient?.phone_number} <br />
          </p>{" "}
          <p></p> <p></p>
          <p>
            Emergency: {selectedPatient?.emergency_contact} <br />
          </p>
          <p>Insurance Provider</p>
          <p>Insurance: {selectedPatient?.insurance_type}</p>
        </p>
      </article>

      <button className="bg-teal-500 text-white py-2 px-4 rounded mt-4">
        Show All Information
      </button>
    </section>
  );
}
