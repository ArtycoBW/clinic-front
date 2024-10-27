import { useQuery } from '@apollo/client'
import { SearchDoctorResponse, SearchDoctorVariables } from '@/entities/doctor/types'
import { SEARCH_DOCTOR } from '@/entities/doctor/gql/queries'

export const useSearchDoctor = (searchStr: string) => {
  const { data, loading, error, refetch } = useQuery<SearchDoctorResponse, SearchDoctorVariables>(SEARCH_DOCTOR, {
    variables: { searchStr },
  })

  // Функция для рефетча данных
  const invalidateCache = () => {
    refetch()
  }

  return {
    doctors: data?.searchDoctor.elems || [], // Возвращаем список докторов
    loading, // Статус загрузки
    error, // Статус ошибки
    invalidateCache, // Функция для повторного запроса
  }
}