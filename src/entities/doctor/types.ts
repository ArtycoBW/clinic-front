// Определите типы для ответа и переменных
export interface Doctor {
  id: string;
  __typename: string;
  doctorType: {
    id: string;
    name: string;
  };
  person: {
    entityId: string;
    entity: {
      firstName: string;
      lastName: string;
    };
  };
}

export interface SearchDoctorResponse {
  searchDoctor: {
    elems: Doctor[];
  };
}

export interface SearchDoctorVariables {
  searchStr: string;
}

export interface CreateDoctorResponse {
  packet: {
    createDoctor: {
      id: string;
      __typename: string;
      doctorType: {
        id: string;
        name: string;
      };
      person: {
        entityId: string;
        entity: {
          firstName: string;
          lastName: string;
        };
      };
    };
  };
}

// Определите переменные, необходимые для мутации
export interface CreateDoctorVariables {
  doctorTypeId: string;
  personId: string;
}

export interface UpdateDoctorResponse {
  packet: {
    updateDoctor: {
      id: string;
      __typename: string;
      doctorType: {
        id: string;
        name: string;
      };
      person: {
        entityId: string;
        entity: {
          firstName: string;
          lastName: string;
        };
      };
    };
  };
}

// Определите переменные, необходимые для мутации
export interface UpdateDoctorVariables {
  id: string;
  doctorTypeId: string;
  personId: string;
}

export interface DeleteDoctorResponse {
  packet: {
    deleteDoctor: boolean; // Предполагается, что мутация возвращает булевый результат успеха
  };
}

// Определите переменные, необходимые для мутации
export interface DeleteDoctorVariables {
  id: string;
}