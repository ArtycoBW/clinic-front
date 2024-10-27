'use client'

import { useAppContext } from '@/components/AppContext'
import { Header } from '@/components/header'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Award, Ghost, Github, Gitlab, Hop, Shield, Speech, Syringe, Tablets } from 'lucide-react'
import Link from 'next/link'

export default function AppointmentsPage() {
  const name = useAppContext()?.userInfo?.name

  const [selectedSpecialty, setSelectedSpecialty] = useState('')

  const handleSpecialtyClick = (specialty: string) => {
    setSelectedSpecialty(specialty)
  }

  return (
    <div className="w-full">
      <Header path="Главная" />
      <div className="gap-32 mt-16 mx-12 mb-6 rounded-xl">
        <Card className="p-6 bg-white mt-6">
          <CardContent className="p-0">
            <h1 className="text-4xl text-[#26364b] font-bold ml-7">Популярные специальности</h1>
            <div className="mt-3 flex gap-x-16 gap-y-10 max-w-full flex-wrap overflow-y-auto max-h-[525px] justify-center items-center">
              <Link
                href={`/appointments/pathologist`}
                onClick={() => handleSpecialtyClick('Патологоанатом')}
                className="border-2 border-[#ecf1fb] rounded-2xl flex flex-col justify-center items-center w-56 h-48 hover:bg-[#ede4fe] bg-transparent gap-3 cursor-pointer">
                <Ghost width={45} height={45} className="text-red-500" />
                <p className="text-2xl text-[#414f61]">Патологоанатом</p>
              </Link>
              <Link
                href={`/appointments/manager`}
                onClick={() => handleSpecialtyClick('Ген.дир')}
                className="border-2 border-[#ecf1fb] rounded-2xl flex flex-col justify-center items-center w-56 h-48 hover:bg-[#ede4fe] bg-transparent gap-3 cursor-pointer">
                <Hop width={50} height={50} className="text-[#95efd4]" />
                <p className="text-2xl text-[#414f61]">Ген.дир</p>
              </Link>
              <Link
                href={`/appointments/smoker`}
                onClick={() => handleSpecialtyClick('Покурист')}
                className="border-2 border-[#ecf1fb] rounded-2xl flex flex-col justify-center items-center w-56 h-48 hover:bg-[#ede4fe] bg-transparent gap-3 cursor-pointer">
                <Github width={50} height={50} className="text-blue-500" />
                <p className="text-2xl text-[#414f61]">Покурист</p>
              </Link>
              <Link
                href={`/appointments/venereologist`}
                onClick={() => handleSpecialtyClick('Венеролог')}
                className="border-2 border-[#ecf1fb] rounded-2xl flex flex-col justify-center items-center w-56 h-48 hover:bg-[#ede4fe] bg-transparent gap-3 cursor-pointer">
                <Gitlab width={50} height={50} className="text-green-500" />
                <p className="text-2xl text-[#414f61]">Венеролог</p>
              </Link>
              <Link
                href={`/appointments/superintendent`}
                onClick={() => handleSpecialtyClick('Заведующий Отделением Терапии')}
                className="border-2 border-[#ecf1fb] rounded-2xl flex flex-col justify-center items-center w-56 h-48 hover:bg-[#ede4fe] bg-transparent gap-3 cursor-pointer">
                <Syringe width={50} height={50} className="text-purple-500" />
                <p className="text-2xl text-[#414f61] text-center">Заведующий Отделением Терапии</p>
              </Link>
              <Link
                href={`/appointments/psychotherapist`}
                onClick={() => handleSpecialtyClick('Психотерапевт')}
                className="border-2 border-[#ecf1fb] rounded-2xl flex flex-col justify-center items-center w-56 h-48 hover:bg-[#ede4fe] bg-transparent gap-3 cursor-pointer">
                <Speech width={50} height={50} className="text-[#ff859b]" />
                <p className="text-2xl text-[#414f61]">Психотерапевт</p>
              </Link>
              <Link
                href={`/appointments/therapist`}
                onClick={() => handleSpecialtyClick('Терапевт')}
                className="border-2 border-[#ecf1fb] rounded-2xl flex flex-col justify-center items-center w-56 h-48 hover:bg-[#ede4fe] bg-transparent gap-3 cursor-pointer">
                <Tablets width={50} height={50} className="text-orange-500" />
                <p className="text-2xl text-[#414f61]">Терапевт</p>
              </Link>
              <Link
                href={`/appointments/surgeon`}
                onClick={() => handleSpecialtyClick('Хирург')}
                className="border-2 border-[#ecf1fb] rounded-2xl flex flex-col justify-center items-center w-56 h-48 hover:bg-[#ede4fe] bg-transparent gap-3 cursor-pointer">
                <Shield width={50} height={50} className="text-sky-500" />
                <p className="text-2xl text-[#414f61]">Хирург</p>
              </Link>
              <Link
                href={`/appointments/topDoctor`}
                onClick={() => handleSpecialtyClick('Топ врач')}
                className="border-2 border-[#ecf1fb] rounded-2xl flex flex-col justify-center items-center w-56 h-48 hover:bg-[#ede4fe] bg-transparent gap-3 cursor-pointer">
                <Award width={50} height={50} className="text-cyan-500" />
                <p className="text-2xl text-[#414f61]">Топ врач</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
