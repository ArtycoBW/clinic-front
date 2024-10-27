// Запрос для поиска доктора
import { gql } from '@apollo/client'
import { CLINIC_OFFICE_ATTRIBUTES_FRAGMENT } from '@/entities/clinicOffice/gql/fragments'

// export const SEARCH_CLINIC_OFFICE = gql`
//     query searchClinicOffice($clinicId: String!, $officeNumber: String!) {
//         searchClinicOffice(
//             cond: "it.clinic.id == $clinicId && it.officeNumber.$upper $like '%' + $officeNumber.$upper + '%'"
//         )
//         @strExpr(strings: [$clinicId, $officeNumber]) {
//             elems {
//                 ...ClinicOfficeAttributes
//             }
//         }
//     }
// `;

export const SEARCH_CLINIC_OFFICE = gql`
  query searchClinicOffice {
    searchClinicOffice(
      cond: "it.clinic.id == '7430045310808948737' && it.officeNumber.$upper $like '%' + ''.$upper + '%'"
    ) {
      elems {
        ...ClinicOfficeAttributes
      }
    }
  }
  ${CLINIC_OFFICE_ATTRIBUTES_FRAGMENT}
`
