import { DELETE_CUSTOMER } from '@/entities/customer/gql/mutation'
import { useMutation } from '@apollo/client'
import { DeleteCustomerResponse, DeleteCustomerVariables } from '@/entities/customer/types'

export const useDeleteCustomer = () => {
  const [deleteCustomer, { loading, error }] = useMutation<DeleteCustomerResponse, DeleteCustomerVariables>(
    DELETE_CUSTOMER,
  )

  // Функция для выполнения мутации
  const executeMutation = async (id: string) => {
    try {
      return await deleteCustomer({
        variables: { id },
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
  }
}