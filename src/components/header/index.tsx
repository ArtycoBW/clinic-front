import { BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import InputSearch from '@/components/icons/input-search-icon.svg'
import { Input } from '@/components/ui/input'
import { FC } from 'react'

interface IHeaderProps {
  path: string
}

export const Header: FC<IHeaderProps> = ({ path }) => {
  return (
    <div className="wrapper flex justify-between items-center p-top">
      <BreadcrumbPage>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Страницы</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{path}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbPage>
      <div
        className="flex items-center justify-center max-w-320 max-h-45 rounded-[7px] bg-white pl-[12px] pr-[12px]">
        <InputSearch />
        <Input placeholder="Поиск" className="border-none outline-none ring-0 shadow-none" />
      </div>
    </div>
  )
}