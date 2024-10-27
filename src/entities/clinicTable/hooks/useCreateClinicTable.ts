import { useMutation } from '@apollo/client'
import { CreateClinicTableResponse, CreateClinicTableVariables } from '@/entities/clinicTable/types'
import { CREATE_CLINIC_TABLE } from '@/entities/clinicTable/gql/mutation'

export const useCreateClinicTable = () => {
  const [executeMutation, {
    data,
    loading,
    error,
  }] = useMutation<CreateClinicTableResponse, CreateClinicTableVariables>(CREATE_CLINIC_TABLE)

  const executeCreateClinicTable = async (variables: CreateClinicTableVariables) => {
    try {
      return await executeMutation({ variables })
    } catch (err) {
      console.error('Error creating clinic table:', err)
      throw err // Optionally re-throw the error for further handling
    }
  }
  return {
    executeMutation: executeCreateClinicTable,
    data,
    loading,
    error,
  }
}