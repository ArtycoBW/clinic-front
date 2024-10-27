// Хук для поиска офисов клиник
import { useQuery } from '@apollo/client'
import { SearchClinicOfficeResponse, SearchClinicOfficeVariables } from '@/entities/clinicOffice/types'
import { SEARCH_CLINIC_OFFICE } from '@/entities/clinicOffice/gql/queries'

export const useSearchClinicOffice = (clinicId: string, officeNumber: string) => {
  const {
    data,
    loading,
    error,
    refetch,
  } = useQuery<SearchClinicOfficeResponse, SearchClinicOfficeVariables>(SEARCH_CLINIC_OFFICE, {
    variables: { clinicId, officeNumber },
    // skip: !clinicId || !officeNumber, // Пропустить запрос, если clinicId или officeNumber пустые
  })

  // Функция для рефетча данных
  const invalidateCache = () => {
    refetch()
  }


  return {
    offices: data?.searchClinicOffice.elems || [],
    loading,
    error,
    invalidateCache,
  }
}