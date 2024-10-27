import { SEARCH_CLINIC_DOCTOR } from '../gql/queries'
import { useQuery } from '@apollo/client'
import { SearchClinicDoctorResponse, SearchClinicDoctorVariables } from '@/entities/clinicDoctor/types'

// Хук для поиска врачей в клинике
export const useSearchClinicDoctor = (clinicId: string, searchStr: string) => {
  const { data, loading, error, refetch } = useQuery<SearchClinicDoctorResponse, SearchClinicDoctorVariables>(
    SEARCH_CLINIC_DOCTOR,
    {
      variables: { clinicId, searchStr },
      // skip: !searchStr, // Пропустить запрос, если searchStr пустая строка
    },
  )

  // Функция для рефетча данных
  const invalidateCache = () => {
    refetch()
  }

  return {
    doctors: data?.searchClinicDoctor.elems || [],
    loading,
    error,
    invalidateCache,
  }
}