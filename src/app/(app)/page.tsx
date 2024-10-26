'use client'
import { useSearchDoctorType } from "@/entities/doctorType/hooks/useSearchDoctorType";
import { useState } from "react";


export default function Home() {
  const [searchStr, setSearchStr] = useState("");
  const { doctors, loading, error, invalidateCache } = useSearchDoctorType(searchStr);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(event.target.value);
  };
  return (
    <div>
      <h1>Поиск врача</h1>
      <input
        type="text"
        placeholder="Введите имя врача"
        value={searchStr}
        onChange={handleInputChange}
      />
      <button onClick={invalidateCache}>Обновить данные</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <h2>{doctor.name}</h2>
            <p>{doctor.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
