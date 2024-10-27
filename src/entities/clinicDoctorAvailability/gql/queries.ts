// Запрос для поиска доктора
import { gql } from '@apollo/client'
import { CLINIC_DOCTOR_AVAILABILITY_ATTRIBUTES } from '@/entities/clinicDoctorAvailability/gql/fragments'
//
// // Запрос для поиска доступности врача в клинике
// export const SEARCH_CLINIC_DOCTOR_AVAILABILITY = gql`
//     query searchClinicDoctorAvailability(
//         $clinicDoctorId: String!
//         $dateFrom: _DateTime!
//         $dateTo: _DateTime!
//     ) {
//         searchClinicDoctorAvailability(
//             cond: "it.clinicDoctor.id == ${clinicDoctorId} && it.endDate >= ${dateFrom} && it.beginDate <= ${dateTo}"
//         )
//         @strExpr(string: $clinicDoctorId, dateTimes: [$dateFrom, $dateTo]) {
//             elems {
//                 ...ClinicDoctorAvailabilityAttributes
//             }
//         }
//     }
//     ${CLINIC_DOCTOR_AVAILABILITY_ATTRIBUTES}
// `;


// Запрос для поиска доступности врача в клинике
export const SEARCH_CLINIC_DOCTOR_AVAILABILITY = gql`
    query searchClinicDoctorAvailability(
        $clinicDoctorId: String!
        $dateFrom: _DateTime!
        $dateTo: _DateTime!
    ) {
        searchClinicDoctorAvailability(
            cond: "'it.clinicDoctor.id == $clinicDoctorId' && it.endDate >= $dateFrom && it.beginDate <= $dateTo"
        )
        @strExpr(string: $clinicDoctorId, dateTimes: [$dateFrom, $dateTo]) {
            elems {
                ...ClinicDoctorAvailabilityAttributes
            }
        }
    }
    ${CLINIC_DOCTOR_AVAILABILITY_ATTRIBUTES}
`
