import { PERSON_ATTRIBUTES } from '@/entities/person/gql/fragments'
import { gql } from '@apollo/client'

// export const SEARCH_PERSON = gql`
//     ${PERSON_ATTRIBUTES}
//
//     query searchPerson($searchStr: String!) {
//         searchPerson(
//             cond: "(it.firstName + it.lastName).$upper $like '%' + $searchStr.$upper + '%'"
//         ) @strExpr(string: $searchStr) {
//             elems {
//                 ...PersonAttributes
//             }
//         }
//     }
// `
// TODO: вариант выше - с переменной searchStr - не работает (не читает переменную), надо ее доработать, ниже вариант для проверок (временный)

export const SEARCH_PERSON = gql`
    query searchPerson {
        searchPerson(
            cond: "(it.firstName + it.lastName).$upper $like '%' + ''.$upper + '%'"
        ) {
            elems {
                ...PersonAttributes
            }
        }
    }
    ${PERSON_ATTRIBUTES}
`