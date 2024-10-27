// Определите тип ответа для запроса
export interface SearchCustomerResponse {
  searchCustomer: {
    elems: {
      id: string;
      __typename: string;
      insurancePolicyNumber: string;
      phoneNumber: string;
      person: {
        entityId: string;
        entity: {
          firstName: string;
          lastName: string;
        };
      };
    }[];
  };
}

// Определите переменные, необходимые для запроса
export interface SearchCustomerVariables {
  searchStr: string;
}

// Определите тип ответа для мутации
export interface CreateCustomerResponse {
  packet: {
    createCustomer: {
      id: string;
      __typename: string;
      insurancePolicyNumber: string;
      phoneNumber: string;
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
export interface CreateCustomerVariables {
  personId: string;
  insurancePolicyNumber: string;
  phoneNumber?: string; // Номер телефона необязателен
}

export interface UpdateCustomerResponse {
  packet: {
    updateCustomer: {
      id: string;
      __typename: string;
      insurancePolicyNumber: string;
      phoneNumber: string;
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
export interface UpdateCustomerVariables {
  id: string;
  phoneNumber?: string; // Номер телефона необязателен
}

// Определите тип ответа для мутации
export interface DeleteCustomerResponse {
  packet: {
    deleteCustomer: boolean; // Или другой тип, если нужно
  };
}

// Определите переменные, необходимые для мутации
export interface DeleteCustomerVariables {
  id: string;
}