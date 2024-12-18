import { gql } from '@apollo/client'

export const CLINIC_TABLE_ATTRIBUTES_FRAGMENT = gql`
    fragment ClinicTableAttributes on _E_ClinicTable {
        id
        __typename
        beginDate
        endDate
        clinicOffice {
            id
            officeNumber
        }
        customer {
            entityId
            entity {
                person {
                    entityId
                    entity {
                        firstName
                        lastName
                    }
                }
            }
        }
        clinicDoctor {
            id
            doctor {
                entityId
                entity {
                    person {
                        entityId
                        entity {
                            firstName
                            lastName
                        }
                    }
                }
            }
        }
    }
`
