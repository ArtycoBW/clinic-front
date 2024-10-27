'use client'
import { Bell } from 'lucide-react'
import { DatePicker } from '../datePicker'
import { Card, CardContent } from '../ui/card'

const Info = () => {
  const sidebarClassNames = `relative right-0 flex flex-col h-[100vh] justify-between shadow-xl
    transition-all duration-300 ease h-full z-40 dark:bg-black overflow-y-auto bg-white  rounded-l-3xl min-w-64
  `

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="flex flex-col items-center justify-start gap-5 border-gray-200 px-8 py-4 dark:border-gray-700">
          <div className="flex flex-col justify-start pb-4 border-b-[1.5px] ">
            <span className="text-xl font-bold tracking-wide text-[#59748a] py-4">Календарь</span>
            <DatePicker />
          </div>
          <div className="flex flex-col justify-start w-full">
            <span className="text-xl font-bold tracking-wide text-[#59748a] py-2">Уведомления</span>
            <div className="grid gap-6 py-4">
              <div className="flex justify-start items-center gap-4 pb-4">
                <div className="bg-[#effbf6] p-3 rounded-lg">
                  <Bell size={22} fill="#71ddb1" className="text-[#71ddb1]" />
                </div>

                <div>
                  <p className="font-light text-[#858585] text-sm">Подтвердить приём</p>
                  <p className="font-light text-[#858585] text-sm">Пациент 1</p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-4">
                <div className="bg-[#effbf6] p-3 rounded-lg">
                  <Bell size={22} fill="#7a40f2" className="text-[#7a40f2]" />
                </div>

                <div>
                  <p className="font-light text-[#858585] text-sm">Подтвердить приём</p>
                  <p className="font-light text-[#858585] text-sm">Пациент 2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start border-t-[1.5px] w-full">
            <span className="text-xl font-bold tracking-wide text-[#59748a] py-4">Текущие приёмы</span>
            <Card className="bg-[#f4faf9]">
              <CardContent className="grid">
                <h3 className="font-semibold text-[16px] text-[#59748a] py-4">Осмотр</h3>
                <span className="font-normal text-[16px] text-[#59748a]">5:00 - 6:00</span>
                <span className="font-normal text-[16px] text-[#59748a]">Каб 321 : Врач1</span>
              </CardContent>
            </Card>
            <Card className="bg-[#f4faf9] mt-4">
              <CardContent className="grid">
                <h3 className="font-semibold text-[16px] text-[#59748a] py-4">Осмотр</h3>
                <span className="font-normal text-[16px] text-[#59748a]">5:00 - 6:00</span>
                <span className="font-normal text-[16px] text-[#59748a]">Каб 321 : Врач1</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
