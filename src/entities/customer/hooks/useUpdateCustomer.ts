import { UPDATE_CUSTOMER } from '@/entities/customer/gql/mutation'
import { useMutation } from '@apollo/client'
import { UpdateCustomerResponse, UpdateCustomerVariables } from '@/entities/customer/types'

export const useUpdateCustomer = () => {
  const [updateCustomer, { loading, error, data }] = useMutation<UpdateCustomerResponse, UpdateCustomerVariables>(
    UPDATE_CUSTOMER,
  )

  // Функция для выполнения мутации
  const executeMutation = async (id: string, phoneNumber?: string) => {
    try {
      return await updateCustomer({
        variables: { id, phoneNumber },
      }) // Вернуть результат мутации, если это необходимо
    } catch (err) {
      console.error('Ошибка при выполнении мутации:', err)
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