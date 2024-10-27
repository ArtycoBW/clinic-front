import { gql } from '@apollo/client'

export const CLINIC_OFFICE_ATTRIBUTES_FRAGMENT = gql`
    fragment ClinicOfficeAttributes on _E_ClinicOffice {
        id
        __typename
        clinic {
            id
            name
        }
        officeNumber
    }


`