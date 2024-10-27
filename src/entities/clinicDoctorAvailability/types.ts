// Интерфейс для атрибутов доступности врача
export interface ClinicDoctorAvailability {
  id: string;
  __typename: string;
  beginDate: string; // или Date, в зависимости от формата
  endDate: string; // или Date, в зависимости от формата
  clinicOffice: {
    id: string;
    officeNumber: string;
  };
}

// Интерфейс для ответа запроса
export interface SearchClinicDoctorAvailabilityResponse {
  searchClinicDoctorAvailability: {
    elems: ClinicDoctorAvailability[];
  };
}

// Интерфейс для переменных запроса
export interface SearchClinicDoctorAvailabilityVariables {
  clinicDoctorId: string;
  dateFrom: string; // или Date, в зависимости от формата
  dateTo: string; // или Date, в зависимости от формата
}

export interface CreateClinicDoctorAvailabilityInput {
  clinicDoctorId: string;
  beginDate: string; // Adjust the type if you're using a specific Date type
  endDate: string;   // Adjust the type if you're using a specific Date type
  clinicOfficeId: string;
}

export interface CreateClinicDoctorAvailabilityResponse {
  createClinicDoctorAvailability: {
    id: string;
    __typename: string;
    beginDate: string;
    endDate: string;
    clinicOffice: {
      id: string;
      officeNumber: string;
    };
  };
}

export interface DeleteClinicDoctorAvailabilityInput {
  id: string;
}
