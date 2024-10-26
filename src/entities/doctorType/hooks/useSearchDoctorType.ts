import { useQuery } from "@apollo/client";
import { useCallback } from "react";

import { SearchDoctorTypeResponse } from "../types";
import { QUERY } from "../gql/queries";

export const useSearchDoctorType = (searchStr: string) => {
  const { data, loading, error, refetch } = useQuery<SearchDoctorTypeResponse>(QUERY, {
    variables: { searchStr },
  });

  // Логи для отладки
  console.log("Loading status:", loading);
  console.log("Error if any:", error);
  console.log("Full data received from GraphQL:", JSON.stringify(data, null, 2));

  const invalidateCache = useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    doctors: data?.searchDoctorType?.elems || [],
    loading,
    error,
    invalidateCache,
  };
};
