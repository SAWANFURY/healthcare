export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-sid.png",
    name: " Dr. Siddhartha Mukherjee – Biologist",
  },
  {
    image: "/assets/images/dr-naresh.png",
    name: " Dr. Naresh Trehan – Neurologist",
  },
  {
    image: "/assets/images/dr-sudh.png",
    name: "Dr. Sudhansu Bhattacharyya – Cardiac surgeon",
  },
  {
    image: "/assets/images/dr-surbhi.png",
    name: "Dr. Surbhi Anand – Endodontist",
  },
  {
    image: "/assets/images/dr-ashish.png",
    name: "Dr. Ashish Sabharwal- Urologist",
  },
  {
    image: "/assets/images/dr-anita.png",
    name: "Dr. Anita Kant – Gynecologist",
  },
  {
    image: "/assets/images/dr-devi.png",
    name: "Dr. Devi Shetty- Physician",
  },
  {
    image: "/assets/images/dr-anjuli.png",
    name: "Dr. Anjuli Dixit- Psychiatrist",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr. Hardik Sharma - Pediatrician",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
