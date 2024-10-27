export interface SearchClinicTableResponse {
  searchClinicTable: {
    elems: Array<{
      id: string;
      __typename: string;
      beginDate: string; // Adjust the type if necessary
      endDate: string; // Adjust the type if necessary
      clinicOffice: {
        id: string;
        officeNumber: string;
      };
      customer: {
        entityId: string;
        entity: {
          person: {
            entityId: string;
            entity: {
              firstName: string;
              lastName: string;
            };
          };
        };
      };
      clinicDoctor: {
        id: string;
        doctor: {
          entityId: string;
          entity: {
            person: {
              entityId: string;
              entity: {
                firstName: string;
                lastName: string;
              };
            };
          };
        };
      };
    }>;
  };
}

export interface SearchClinicTableVariables {
  clinicId: string;
  dateFrom: string; // Adjust to the correct type
  dateTo: string; // Adjust to the correct type
}

export interface CreateClinicTableResponse {
  createClinicTable: {
    id: string;
    __typename: string;
    beginDate: string; // Adjust the type if necessary
    endDate: string; // Adjust the type if necessary
    clinicOffice: {
      id: string;
      officeNumber: string;
    };
    customer: {
      entityId: string;
      entity: {
        person: {
          entityId: string;
          entity: {
            firstName: string;
            lastName: string;
          };
        };
      };
    };
    clinicDoctor: {
      id: string;
      doctor: {
        entityId: string;
        entity: {
          person: {
            entityId: string;
            entity: {
              firstName: string;
              lastName: string;
            };
          };
        };
      };
    };
  };
}

export interface CreateClinicTableVariables {
  clinicId: string;
  clinicDoctorId: string;
  beginDate: string; // Adjust to the correct type
  endDate: string; // Adjust to the correct type
  clinicOfficeId: string;
  customerId: string;
}

export interface DeleteClinicTableResponse {
  deleteClinicTable: boolean; // Assuming it returns a boolean or modify according to your GraphQL schema
}

export interface DeleteClinicTableVariables {
  id: string;
}
