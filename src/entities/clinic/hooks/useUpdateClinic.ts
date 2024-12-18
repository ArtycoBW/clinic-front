import { useMutation } from '@apollo/client'
import { UpdateClinicResponse, UpdateClinicVariables } from '@/entities/clinic/types'
import { UPDATE_CLINIC } from '@/entities/clinic/gql/mutation'

export const useUpdateClinic = () => {
  const [updateClinic, {
    loading,
    error,
    data,
  }] = useMutation<UpdateClinicResponse, UpdateClinicVariables>(UPDATE_CLINIC)

  const executeMutation = async (id: string, name: string) => {
    try {
      return await updateClinic({ variables: { id, name } })
    } catch (err) {
      console.error('Ошибка при выполнении мутации updateClinic:', err)
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