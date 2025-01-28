import { create } from "zustand";

const usePatientStore = create((set) => ({
  patients: [],
  selectedPatient: null,

  setPatients: (data) => set({ patients: data }),
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
}));

export default usePatientStore;
