import { DeleteClinicTableResponse, DeleteClinicTableVariables } from '@/entities/clinicTable/types'
import { useMutation } from '@apollo/client'
import { DELETE_CLINIC_TABLE } from '@/entities/clinicTable/gql/mutation'

export const useDeleteClinicTable = () => {
  const [deleteClinicTableMutation, {
    data,
    loading,
    error,
  }] = useMutation<DeleteClinicTableResponse, DeleteClinicTableVariables>(DELETE_CLINIC_TABLE)

  const executeDeleteClinicTable = async (variables: DeleteClinicTableVariables) => {
    try {
      return await deleteClinicTableMutation({ variables })
    } catch (err) {
      console.error('Error deleting clinic table:', err)
      throw err // Optionally re-throw the error for further handling
    }
  }

  return {
    deleteClinicTable: executeDeleteClinicTable,
    data,
    loading,
    error,
  }
}