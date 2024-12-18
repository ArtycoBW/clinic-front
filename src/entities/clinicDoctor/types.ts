// Интерфейс для ответа запроса
export interface SearchClinicDoctorResponse {
  searchClinicDoctor: {
    elems: Array<{
      id: string;
      clinic: {
        id: string;
        name: string;
      };
      doctor: {
        entityId: string;
        entity: {
          doctorType: {
            id: string;
            name: string;
          };
          person: {
            entityId: string;
            entity: {
              firstName: string;
              lastName: string;
              inn: string;
              birthDate: string; // предполагаем, что это строка
            };
          };
        };
      };
    }>;
  };
}

// Интерфейс для переменных запроса
export interface SearchClinicDoctorVariables {
  clinicId: string;
  searchStr: string;
}

// Интерфейс для ответа мутации
export interface CreateClinicDoctorResponse {
  packet: {
    createClinicDoctor: {
      id: string;
      clinic: {
        id: string;
        name: string;
      };
      doctor: {
        entityId: string;
        entity: {
          doctorType: {
            id: string;
            name: string;
          };
          person: {
            entityId: string;
            entity: {
              firstName: string;
              lastName: string;
              inn: string;
              birthDate: string; // предполагаем, что это строка
            };
          };
        };
      };
    };
  };
}

// Интерфейс для переменных мутации
export interface CreateClinicDoctorVariables {
  clinicId: string;
  doctorId: string;
}

// Интерфейс для ответа мутации
export interface DeleteClinicDoctorResponse {
  packet: {
    deleteClinicDoctor: boolean; // или void, в зависимости от ожидаемого результата
  };
}

// Интерфейс для переменных мутации
export interface DeleteClinicDoctorVariables {
  id: string;
}