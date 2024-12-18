import { gql } from '@apollo/client'

export const CLINIC_DOCTOR_ATTRIBUTES = gql`
    fragment ClinicDoctorAttributes on _E_ClinicDoctor {
        id
        __typename
        clinic {
            id
            name
        }
        doctor {
            entityId
            entity {
                doctorType {
                    id
                    name
                }
                person {
                    entityId
                    entity {
                        firstName
                        lastName
                        inn
                        birthDate
                    }
                }
            }
        }
    }
`