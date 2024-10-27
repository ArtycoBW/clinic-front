// Запрос для поиска доктора
import { gql } from '@apollo/client'
import { CLINIC_ATTRIBUTES_FRAGMENT } from '@/entities/clinic/gql/fragments'

// Запрос для поиска клиник
// export const SEARCH_CLINIC = gql`
//     query searchClinic($searchStr: String!) {
//         searchClinic(cond: "(it.name).$upper $like '%' + $searchStr.$upper + '%'")
//         @strExpr(string: $searchStr) {
//             elems {
//                 ...ClinicAttributes
//             }
//         }
//     }
//     ${CLINIC_ATTRIBUTES_FRAGMENT}
// `;

export const SEARCH_CLINIC = gql`
  query searchClinic {
    searchClinic(cond: "(it.name).$upper $like '%' + ''.$upper + '%'") @strExpr {
      elems {
        ...ClinicAttributes
      }
    }
  }
  ${CLINIC_ATTRIBUTES_FRAGMENT}
`
