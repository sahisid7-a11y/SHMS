import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { ReceptionistDashboard } from "./pages/ReceptionistDashboard";
import { NewPatientRegistration } from "./pages/NewPatientRegistration";
import { DoctorDashboard } from "./pages/DoctorDashboard";
import { PatientConsultation } from "./pages/PatientConsultation";
import { PrescriptionView } from "./pages/PrescriptionView";
import { PatientPortal } from "./pages/PatientPortal";
import { AdminDashboard } from "./pages/AdminDashboard";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/receptionist",
    Component: ReceptionistDashboard,
  },
  {
    path: "/receptionist/new-patient",
    Component: NewPatientRegistration,
  },
  {
    path: "/doctor",
    Component: DoctorDashboard,
  },
  {
    path: "/doctor/consultation/:patientId",
    Component: PatientConsultation,
  },
  {
    path: "/prescription/:prescriptionId",
    Component: PrescriptionView,
  },
  {
    path: "/patient",
    Component: PatientPortal,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
