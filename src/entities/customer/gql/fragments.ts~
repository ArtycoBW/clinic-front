import { gql } from '@apollo/client'

export const DOCTOR_ATTRIBUTES = gql`
    fragment DoctorAttributes on _E_Doctor {
        id
        __typename
        doctorType {
            id
            name
        }
        person {
            entityId
            entity{
                firstName
                lastName
            }
        }
    }
`