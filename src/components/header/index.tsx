import { BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import InputSearch from '@/components/icons/input-search-icon.svg'
import { Input } from '@/components/ui/input'
import { FC } from 'react'

interface IHeaderProps {
  path: string
}

export const Header: FC<IHeaderProps> = ({ path }) => {
  return (
    <div className="flex justify-between items-center mx-12">
      <BreadcrumbPage className="w-full">
        <BreadcrumbList>
          <BreadcrumbItem>
            <span className="font-normal text-[14px] text-[#6E7191]">Страницы</span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="font-normal text-[14px] text-[#6E7191]">{path}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbPage>
      {/*<div className="flex items-center justify-center rounded-lg h-12 bg-white pl-[12px] w-3/5">*/}
      {/*  <InputSearch />*/}
      {/*  <Input placeholder="Поиск" className="border-none outline-none ring-0 shadow-none" />*/}
      {/*</div>*/}
    </div>
  )
}
