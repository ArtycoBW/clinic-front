import { gql } from '@apollo/client'
import { DOCTOR_TYPE_ATTRIBUTES } from '@/entities/doctorType/gql/fragments'

// export const SEARCH_DOCTOR_TYPE = gql`
//     query searchDoctorType($searchStr: String!) {
//         searchDoctorType(
//             cond: "(it.id + it.name).$upper $like '%' + $searchStr.$upper + '%' && it.isDel == false"
//         ) @strExpr(string: $searchStr) {
//             elems {
//                 ...DoctorTypeAttributes
//             }
//         }
//     }
//     ${DOCTOR_TYPE_ATTRIBUTES}
// `
// TODO: вариант выше - с переменной searchStr - не работает (не читает переменную), надо ее доработать, ниже вариант для проверок (временный)

export const SEARCH_DOCTOR_TYPE = gql`
    query searchDoctorType {
        searchDoctorType(
            cond: "(it.id + it.name).$upper $like '%' + ''.$upper + '%' && it.isDel == false"
        ) {
            elems {
                ...DoctorTypeAttributes
            }
        }
    }
    ${DOCTOR_TYPE_ATTRIBUTES}
`