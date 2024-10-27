import { useMutation } from '@apollo/client'
import { DeleteDoctorTypeResponse, DeleteDoctorTypeVariables } from '@/entities/doctorType/types'
import { DELETE_DOCTOR_TYPE } from '@/entities/doctorType/gql/mutations'

export const useDeleteDoctorType = () => {
  const [deleteDoctorType, { loading, error, data }] = useMutation<
    DeleteDoctorTypeResponse,
    DeleteDoctorTypeVariables
  >(DELETE_DOCTOR_TYPE)

  const executeMutation = async (id: string) => {
    try {
      return await deleteDoctorType({
        variables: { id },
      })
    } catch (err) {
      console.error('Ошибка при выполнении мутации:', err)
      throw err
    }
  }

  return {
    executeMutation,
    loading,
    error,
    data,
  }
}