'use client'
import {
  BriefcaseMedical,
  Calendar,
  ChartPie,
  ChevronDown,
  ChevronUp,
  Heart,
  Home,
  Hospital,
  Settings,
  User,
} from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import SidebarLink from './SidebarLink'
import useGlobalStore from '@/store/counterStore'

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true)

  const { isSidebarCollapsed } = useGlobalStore()

  const sidebarClassNames = `relative flex flex-col h-[100vh] justify-between shadow-xl
    transition-all duration-300 ease h-full z-40 dark:bg-black overflow-y-auto bg-white  rounded-r-3xl min-w-64
    ${isSidebarCollapsed ? 'w-0 hidden' : 'w-64'}
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
        <nav className="z-10 mx-auto mt-8 grid gap-4">
          <SidebarLink icon={Home} label="Главная" href="/home" />
          <SidebarLink icon={ChartPie} label="Отчёты" href="/reports" />
          <SidebarLink icon={Heart} label="Клиенты" href="/clients" />
          <SidebarLink icon={User} label="Доктора" href="/doctors" />
          <SidebarLink icon={BriefcaseMedical} label="Услуги" href="/services" />
          <SidebarLink icon={Hospital} label="Клиники" href="/clinics" />
          <SidebarLink icon={Calendar} label="Расписание" href="/schedule" />
          <SidebarLink icon={Settings} label="Настройки" href="/settings" />
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
