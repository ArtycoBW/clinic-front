import { CLINIC_TABLE_ATTRIBUTES_FRAGMENT } from '@/entities/clinicTable/gql/fragments'
import { gql } from '@apollo/client'

export const SEARCH_CLINIC_TABLE = gql`
    query searchClinicTable($clinicId: String!, $dateFrom: _DateTime!, $dateTo: _DateTime!) {
        searchClinicTable(
            cond: "it.clinic.id == $clinicId && it.endDate >= $dateFrom && it.beginDate <= $dateTo"
        ) @strExpr(string: $clinicId, dateTimes: [$dateFrom, $dateTo]) {
            elems {
                ...ClinicTableAttributes
            }
        }
    }
    ${CLINIC_TABLE_ATTRIBUTES_FRAGMENT}
`