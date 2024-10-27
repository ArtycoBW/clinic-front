import { useMutation } from '@apollo/client'
import { UpdatePersonResponse, UpdatePersonVariables } from '@/entities/person/types'
import { UPDATE_PERSON } from '@/entities/person/gql/mutations'
import dayjs from 'dayjs'

export const useUpdatePerson = () => {
  const [updatePerson, { loading, error, data }] = useMutation<
    UpdatePersonResponse,
    UpdatePersonVariables
  >(UPDATE_PERSON)

  // Функция для выполнения мутации
  const executeMutation = async (input: UpdatePersonVariables['input']) => {
    const formattedInput = {
      ...input,
      birthDate: dayjs(input.birthDate).format('YYYY-MM-DD'), // Преобразуем в строку ISO
    }

    try {
      return await updatePerson({ variables: { input: formattedInput } })
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