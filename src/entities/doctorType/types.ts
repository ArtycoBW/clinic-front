export interface DoctorType {
  id: string;
  __typename: string;
  name: string;
  description: string;
}

export interface SearchDoctorTypeResponse {
  searchDoctorType: {
    elems: DoctorType[];
    count: number;
  };
}
