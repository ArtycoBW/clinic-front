import { useMutation } from '@apollo/client'
import { DeleteClinicResponse, DeleteClinicVariables } from '@/entities/clinic/types'
import { DELETE_CLINIC } from '@/entities/clinic/gql/mutation'

export const useDeleteClinic = () => {
  const [executeMutation, {
    loading,
    error,
    data,
  }] = useMutation<DeleteClinicResponse, DeleteClinicVariables>(DELETE_CLINIC)

  const deleteClinic = async (id: string) => {
    try {
      return await executeMutation({
        variables: { id },
      })
    } catch (err) {
      console.error('Ошибка при удалении клиники:', err)
      throw err
    }
  }

  return {
    executeMutation: deleteClinic, // Функция для вызова мутации
    loading,                       // Статус загрузки
    error,                         // Статус ошибки
    data,                          // Данные ответа
  }
}