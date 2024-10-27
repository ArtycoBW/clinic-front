import { gql } from '@apollo/client'

export const DOCTOR_TYPE_ATTRIBUTES = gql`
    fragment DoctorTypeAttributes on _E_DoctorType {
        id
        __typename
        name
        description
    }
`
