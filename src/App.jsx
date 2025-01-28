import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Pages/Dashboard";
import { PatientProvider } from "./Context/PatientContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PatientProvider>
      <Dashboard />
    </PatientProvider>
  </QueryClientProvider>
);

export default App;
