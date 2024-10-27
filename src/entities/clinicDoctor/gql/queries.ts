// Запрос для поиска доктора
import { gql } from '@apollo/client'
import { CLINIC_DOCTOR_ATTRIBUTES } from '@/entities/clinicDoctor/gql/fragments'

// // Запрос для поиска врачей в клинике
// export const SEARCH_CLINIC_DOCTOR = gql`
//     query searchClinicDoctor($clinicId: String!, $searchStr: String!) {
//         searchClinicDoctor(
//             cond: "it.clinic.id == $clinicId && (it.doctor.entity.person.entity.firstName + it.doctor.entity.person.entity.lastName).$upper $like '%' + ${searchStr}.$upper + '%'"
//         ) @strExpr(strings: [$clinicId, $searchStr]) {
//             elems {
//                 ...ClinicDoctorAttributes
//             }
//         }
//     }
// `;

// Запрос для поиска врачей в клинике
export const SEARCH_CLINIC_DOCTOR = gql`
  query searchClinicDoctor {
    searchClinicDoctor(
      cond: "it.clinic.id == '7430045310808948737' && (it.doctor.entity.person.entity.firstName + it.doctor.entity.person.entity.lastName).$upper $like '%' + '' + '%'"
    ) {
      elems {
        ...ClinicDoctorAttributes
      }
    }
  }

  ${CLINIC_DOCTOR_ATTRIBUTES}
`
