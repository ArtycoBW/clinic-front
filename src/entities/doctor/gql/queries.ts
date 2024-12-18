// Запрос для поиска доктора
import { DOCTOR_ATTRIBUTES } from '@/entities/doctor/gql/fragments'
import { gql } from '@apollo/client'

// export const SEARCH_DOCTOR = gql`
//     ${DOCTOR_ATTRIBUTES}
//     query searchDoctor($searchStr: String!) {
//         searchDoctor(
//             cond: "(it.person.entity.firstName + it.person.entity.lastName).$upper $like '%' + $searchStr.$upper + '%'"
//         ) @strExpr(string: $searchStr) {
//             elems {
//                 ...DoctorAttributes
//             }
//         }
//     }
// `

export const SEARCH_DOCTOR = gql`
    ${DOCTOR_ATTRIBUTES}
    query searchDoctor {
        searchDoctor(
            cond: "(it.person.entity.firstName + it.person.entity.lastName).$upper $like '%' + ''.$upper + '%'"
        ) {
            elems {
                ...DoctorAttributes
            }
        }
    }
`