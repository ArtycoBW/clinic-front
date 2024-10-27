'use client'

import { ChartSchedule } from '@/components/chart'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Flame, User, Users } from 'lucide-react'
import { useAppContext } from '@/components/AppContext'
import { useSearchCustomer } from '@/entities/customer/hooks/useSearchCustomer'
import { Spinner } from '@/components/spinner'

export default function ClientPage() {
  const name = useAppContext()?.userInfo?.name

  const { customers, loading } = useSearchCustomer('')

  return (
    <div className="w-full">
      <Header path="Главная" />
      <div className="flex flex-col gap-6 mt-20 mx-12 mb-6">
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

        <div className="flex gap-8 flex-1">
          <Card className="p-8 bg-white border-none flex justify-center items-center w-1/3">
            <CardContent className="p-6 flex justify-center items-center  gap-4">
              <div className="w-14 h-14 bg-[#7a40f2] rounded-full p-2 flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <div className="grid gap-4">
                <h2 className="font-semibold text-xl text-[#6E7191]">
                  {!customers || loading ? <Spinner /> : customers.length}
                </h2>
                <span className="text-xl text-[#6E7191]">Новых пациентов</span>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white border-none flex justify-center items-center w-1/3">
            <CardContent className="p-6 flex justify-center items-center  gap-4">
              <div className="w-14 h-14 bg-[#71ddb1] rounded-full p-2 flex items-center justify-center">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <div className="grid gap-4">
                <h2 className="font-semibold text-xl text-[#6E7191]">328</h2>
                <span className="text-xl text-[#6E7191]">Проведено приёмов</span>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white border-none flex justify-center items-center w-1/3">
            <CardContent className="p-6 flex justify-center items-center  gap-4">
              <div className="w-14 h-14 bg-[#3fbdf1] rounded-full p-2 flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="grid gap-4">
                <h2 className="font-semibold text-xl text-[#6E7191]">54</h2>
                <span className="text-xl text-[#6E7191]">Постоянных клиентов</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-2/3 ">
          <ChartSchedule />
        </div>
      </div>
    </div>
  )
}
