import { gql } from '@apollo/client'

// Фрагмент для атрибутов доступности врача клиники
export const CLINIC_DOCTOR_AVAILABILITY_ATTRIBUTES = gql`
    fragment ClinicDoctorAvailabilityAttributes on _E_ClinicDoctorAvailability {
        id
        __typename
        beginDate
        endDate
        clinicOffice {
            id
            officeNumber
        }
    }
`
