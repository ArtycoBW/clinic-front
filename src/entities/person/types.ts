export interface Person {
  id: string;
  __typename: string;
  firstName: string;
  lastName: string;
  inn: string;
  birthDate: string;
}

export interface SearchPersonResponse {
  searchPerson: {
    elems: Person[];
  };
}

export interface SearchPersonVariables {
  searchStr: string;
}

// types.ts
export interface PersonAttributes {
  id: string;
  __typename: string;
  firstName: string;
  lastName: string;
  inn: string;
  birthDate: string;
}

export interface CreatePersonResponse {
  packet: {
    createPerson: PersonAttributes;
  };
}

export interface CreatePersonVariables {
  input: {
    firstName: string;
    lastName: string;
    inn: string;
    birthDate: string;
  };
}

// Определите тип ответа для мутации
export interface UpdatePersonResponse {
  packet: {
    updatePerson: {
      id: string;
      firstName: string;
      lastName: string;
      inn: string;
      birthDate: string;
    };
  };
}

// Определите переменные, необходимые для мутации
export interface UpdatePersonVariables {
  input: {
    id: string;
    firstName: string;
    lastName: string;
    inn: string;
    birthDate: string;
  };
}

// Определите тип ответа для мутации
export interface DeletePersonResponse {
  packet: {
    deletePerson: boolean; // Предполагаем, что удаление возвращает булево значение
  };
}

// Определите переменные, необходимые для мутации
export interface DeletePersonVariables {
  id: string;
}