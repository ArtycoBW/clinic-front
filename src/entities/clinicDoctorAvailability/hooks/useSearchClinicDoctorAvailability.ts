// Хук для поиска доступности врача в клинике
import { SEARCH_CLINIC_DOCTOR_AVAILABILITY } from '@/entities/clinicDoctorAvailability/gql/queries'
import { useQuery } from '@apollo/client'
import {
  SearchClinicDoctorAvailabilityResponse,
  SearchClinicDoctorAvailabilityVariables,
} from '@/entities/clinicDoctorAvailability/types'

export const useSearchClinicDoctorAvailability = (
  clinicDoctorId: string,
  dateFrom: string,
  dateTo: string,
) => {
  const {
    data,
    loading,
    error,
    refetch,
  } = useQuery<SearchClinicDoctorAvailabilityResponse, SearchClinicDoctorAvailabilityVariables>(
    SEARCH_CLINIC_DOCTOR_AVAILABILITY,
    {
      variables: { clinicDoctorId, dateFrom, dateTo },
      skip: !clinicDoctorId || !dateFrom || !dateTo, // Пропускать запрос, если отсутствуют необходимые параметры
    },
  )

  // Функция для рефетча данных
  const invalidateCache = () => {
    refetch()
  }


  return {
    availability: data?.searchClinicDoctorAvailability.elems || [],
    loading,
    error,
    invalidateCache,
  }
}