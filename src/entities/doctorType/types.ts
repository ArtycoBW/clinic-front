export interface DoctorType {
  id: string
  __typename: string
  name: string
  description: string
}

export interface SearchDoctorTypeResponse {
  searchDoctorType: {
    elems: DoctorType[]
    count: number
  }
}

export interface UpdateOrCreateDoctorTypeResponse {
  // Определите тип ответа вашей мутации
  dictionaryPacket: {
    updateOrCreateDoctorType: {
      returning: {
        id: string
        name: string
        description: string
      }
    }
  }
}

export interface UpdateOrCreateDoctorTypeVariables {
  id?: string
  name: string
  description?: string // Этот параметр может быть необязательным
}

export interface DeleteDoctorTypeResponse {
  dictionaryPacket: {
    updateOrCreateDoctorType: {
      returning: {
        id: string
        name: string
        description: string
      }[]
    }
  }
}

export interface DeleteDoctorTypeVariables {
  id: string
}
