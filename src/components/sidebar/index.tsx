'use client'
import { BriefcaseMedical, Calendar, ChartPie, Heart, Home, Hospital, Settings, User } from 'lucide-react'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import useGlobalStore from '@/store/globalStore'
import { useAppContext } from '../AppContext'
import { Button } from '../ui/button'

const Sidebar = () => {
  const keycloak = useAppContext().keycloak
  const isAdmin = keycloak?.resourceAccess?.clinic?.roles[0] !== 'customer'

  console.log(keycloak, 'keycloak')

  const { isSidebarCollapsed } = useGlobalStore()

  const sidebarClassNames = `relative flex flex-col h-[100vh] justify-between shadow-xl
    transition-all duration-300 ease h-full z-40 dark:bg-black overflow-y-auto bg-white rounded-r-3xl min-w-80
    ${isSidebarCollapsed ? 'w-0 hidden' : 'w-72'}
  `

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.svg" alt="Logo" width={29} height={31} />
          <div>
            <span className="text-xl font-bold tracking-wide dark:text-gray-200">
              <span className="text-[#77deb5]">Сбер</span>
              <span className="text-[#7a40f2]">Бинт</span>
            </span>
          </div>
        </div>

        {/* NAVBAR LINKS */}
        <nav className="z-10 mx-4 mt-8 grid gap-4">
          <SidebarLink icon={Home} label="Главная" href="/home" />
          <SidebarLink icon={ChartPie} label="Отчёты" href="/reports" />
          <SidebarLink icon={User} label="Пользователи" href="/persons" />
          <SidebarLink icon={ChartPie} label={isAdmin ? "Отчёты" : "Запись на приём"} href={isAdmin ? "/reports" : '/appointments'} />
          <SidebarLink icon={Heart} label="Клиенты" href="/clients" />
          <SidebarLink icon={User} label="Доктора" href="/doctors" />
          <SidebarLink icon={BriefcaseMedical} label="Услуги" href="/services" />
          <SidebarLink icon={Hospital} label="Клиники" href="/clinics" />
          <SidebarLink icon={Calendar} label="Запись к врачу" href="/schedule" />
          <SidebarLink icon={Settings} label="Настройки" href="/settings" />
        </nav>

        <Button
          className="bg-[#77deb5] rounded-xl py-4 px-5 mx-6 mt-28"
          onClick={() => keycloak?.logout()}
        >
          <span className="text-white">Выйти</span>
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
