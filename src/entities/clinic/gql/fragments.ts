import { gql } from '@apollo/client'

export const CLINIC_ATTRIBUTES_FRAGMENT = gql`

    fragment ClinicAttributes on _E_Clinic {
        id
        __typename
        name
    }

`