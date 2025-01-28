import { createContext, useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import usePatientStore from "../Store/usePatientStore";
import fetchPatients from "../Api/data";
import PropTypes from "prop-types";
const PatientContext = createContext();

export const usePatientContext = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
  const { setPatients } = usePatientStore();

  const {
    data: patients,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["patients"],
    queryFn: fetchPatients,
  });

  useEffect(() => {
    if (patients) setPatients(patients);
  }, [patients]);

  return (
    <PatientContext.Provider value={{ isLoading, error }}>
      {children}
    </PatientContext.Provider>
  );
};

PatientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
