import { DeleteClinicOfficeResponse, DeleteClinicOfficeVariables } from '@/entities/clinicOffice/types'
import { useMutation } from '@apollo/client'
import { DELETE_CLINIC_OFFICE } from '@/entities/clinicOffice/gql/mutation'

export const useDeleteClinicOffice = () => {
  const [deleteClinicOfficeMutation, {
    loading,
    error,
    data,
  }] = useMutation<DeleteClinicOfficeResponse, DeleteClinicOfficeVariables>(DELETE_CLINIC_OFFICE)

  // Функция для выполнения мутации
  const executeMutation = async (id: string) => {
    try {
      const result = await deleteClinicOfficeMutation({
        variables: { id },
      })
      return result.data?.packet.deleteClinicOffice // Возвращаем результат удаления
    } catch (err) {
      console.error('Ошибка при удалении офиса клиники:', err)
      throw err // Передаем ошибку для обработки в компоненте
    }
  }

  return {
    executeMutation, // Функция для вызова мутации
    loading, // Статус загрузки
    error, // Статус ошибки
    data, // Данные ответа
  }
}