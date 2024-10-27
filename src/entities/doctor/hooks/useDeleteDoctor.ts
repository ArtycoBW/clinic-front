import { DeleteDoctorResponse, DeleteDoctorVariables } from '@/entities/doctor/types'
import { useMutation } from '@apollo/client'
import { DELETE_DOCTOR } from '@/entities/doctor/gql/mutation'

export const useDeleteDoctor = () => {
  const [deleteDoctor, { loading, error, data }] = useMutation<DeleteDoctorResponse, DeleteDoctorVariables>(
    DELETE_DOCTOR,
  )

  // Функция для выполнения мутации
  const executeMutation = async (id: string) => {
    try {
      return await deleteDoctor({
        variables: { id },
      }) // Вернуть результат мутации, если это необходимо
    } catch (err) {
      console.error('Ошибка при удалении доктора:', err)
      throw err // Передать ошибку для обработки в компоненте
    }
  }

  return {
    executeMutation, // Это функция для вызова мутации
    loading, // Статус загрузки
    error, // Статус ошибки
    data, // Данные ответа
  }
}
