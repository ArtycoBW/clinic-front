// Интерфейс для ответа запроса
export interface SearchClinicOfficeResponse {
  searchClinicOffice: {
    elems: {
      id: string;
      officeNumber: string;
      clinic: {
        id: string;
        name: string;
      };
    }[];
  };
}

// Интерфейс для переменных запроса
export interface SearchClinicOfficeVariables {
  clinicId: string;
  officeNumber: string;
}

// Интерфейс для ответа мутации
export interface CreateClinicOfficeResponse {
  packet: {
    createClinicOffice: {
      id: string;
      officeNumber: string;
      clinic: {
        id: string;
        name: string;
      };
    };
  };
}

// Интерфейс для переменных мутации
export interface CreateClinicOfficeVariables {
  clinicId: string;
  officeNumber: string;
}

// Интерфейс для ответа мутации
export interface DeleteClinicOfficeResponse {
  packet: {
    deleteClinicOffice: boolean; // Предполагаем, что мутация возвращает true или false в зависимости от успеха
  };
}

// Интерфейс для переменных мутации
export interface DeleteClinicOfficeVariables {
  id: string;
}