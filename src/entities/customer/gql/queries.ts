// Запрос для поиска доктора
import { gql } from '@apollo/client'
import { CUSTOMER_ATTRIBUTES } from '@/entities/customer/gql/fragments'

// Запрос для поиска клиентов
// export const SEARCH_CUSTOMER = gql`
//     query searchCustomer($searchStr: String!) {
//         searchCustomer(cond: "(it.person.entity.firstName+it.person.entity.lastName).$upper $like '%' + ${searchStr}.$upper + '%'")
//         @strExpr(string: $searchStr) {
//             elems {
//                 ...CustomerAttributes
//             }
//         }
//     }
// `;


// Запрос для поиска клиентов
export const SEARCH_CUSTOMER = gql`
    query searchCustomer {
        searchCustomer(cond: "(it.person.entity.firstName+it.person.entity.lastName).$upper $like '%' + ''.$upper + '%'")
        {
            elems {
                ...CustomerAttributes
            }
        }
    }
    ${CUSTOMER_ATTRIBUTES}
`
