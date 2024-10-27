'use client'

import { useAppContext } from '@/components/AppContext'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'

import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

export default function AppointmentsPage() {
  const name = useAppContext()?.userInfo?.name

  return (
    <div className="w-full">
      <Header path="Главная" />
      <div className="bg-white gap-6 mt-20 mx-12 mb-6 p-4 rounded-xl">
        <Card className="p-8 bg-[#c6aff6]">
          <CardContent className="p-0">
            <h1 className="text-3xl font-normal text-white">
              <span className="text-[#7A40F2] mr-2 pl-3">Привет,</span>
              {name}
            </h1>
            <p className="text-white text-lg pt-4 pb-8 pl-3">Ваш профиль был активирован</p>
            <Button variant="ghost" className="text-white p-3 flex justify-center items-center">
              <span className="font-extrabold mr-1 text-lg">Ознакомиться</span>
              <ChevronRight width={10} height={10} />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
