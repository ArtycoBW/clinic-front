import { gql } from "@apollo/client";

export const QUERY = gql`
    fragment DoctorTypeAttributes on _E_DoctorType{
    id
    __typename
    name
    description
  }

  query searchDoctorType($searchStr: String!){
    searchDoctorType(cond:"(it.id + it.name).$upper $like '%' + $searchStr.$upper + '%' && it.isDel == false")
    @strExpr(string: $searchStr)
    {
      elems{
        ...DoctorTypeAttributes
      }
    }
  }
`;
