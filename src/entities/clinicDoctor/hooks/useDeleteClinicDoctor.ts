import { useMutation } from '@apollo/client'
import { DeleteClinicDoctorResponse, DeleteClinicDoctorVariables } from '@/entities/clinicDoctor/types'
import { DELETE_CLINIC_DOCTOR } from '@/entities/clinicDoctor/gql/mutation'

export const useDeleteClinicDoctor = () => {
  const [executeMutation, {
    data,
    loading,
    error,
  }] = useMutation<DeleteClinicDoctorResponse, DeleteClinicDoctorVariables>(DELETE_CLINIC_DOCTOR)

  const deleteClinicDoctor = async (id: string) => {
    try {
      const response = await executeMutation({ variables: { id } })
      return response.data?.packet.deleteClinicDoctor // предполагаем, что здесь будет true или аналогичное значение
    } catch (err) {
      console.error('Error deleting clinic doctor:', err)
      throw err
    }
  }

  return {
    deleteClinicDoctor,
    data,
    loading,
    error,
  }
}