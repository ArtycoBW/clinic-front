// Экспорт интерфейсов для использования в других частях приложения
export interface Clinic {
  id: string;
  __typename: string;
  name: string;
}

export interface SearchClinicResponse {
  searchClinic: {
    elems: Clinic[];
  };
}

export interface SearchClinicVariables {
  searchStr: string;
}

//
// Тип клиники, используемой в ответе
export interface Clinic {
  id: string;
  __typename: string;
  name: string;
}

// Ответ мутации создания клиники
export interface CreateClinicResponse {
  packet: {
    createClinic: Clinic;
  };
}

// Переменные для мутации создания клиники
export interface CreateClinicVariables {
  name: string;
}

export interface ClinicAttributes {
  id: string;
  __typename: string;
  name: string;
}

export interface UpdateClinicResponse {
  packet: {
    updateClinic: ClinicAttributes;
  };
}

export interface UpdateClinicVariables {
  id: string;
  name: string;
}

export interface DeleteClinicResponse {
  packet: {
    deleteClinic: boolean;
  };
}

export interface DeleteClinicVariables {
  id: string;
}
