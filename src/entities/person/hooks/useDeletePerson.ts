import { DELETE_PERSON } from '@/entities/person/gql/mutations'
import { useMutation } from '@apollo/client'
import { DeletePersonResponse, DeletePersonVariables } from '@/entities/person/types'

export const useDeletePerson = () => {
  const [deletePerson, { loading, error, data }] = useMutation<
    DeletePersonResponse,
    DeletePersonVariables
  >(DELETE_PERSON)

  // Функция для выполнения мутации
  const executeMutation = async (id: string) => {
    try {
      return await deletePerson({
        variables: { id },
      }) // Вернуть результат мутации, если это необходимо
    } catch (err) {
      console.error('Ошибка при выполнении мутации:', err)
      throw err // Передать ошибку для обработки в компоненте
    }
  }

  return {
    executeMutation, // Функция для вызова мутации
    loading, // Статус загрузки
    error, // Статус ошибки
    data, // Данные ответа
  }
}