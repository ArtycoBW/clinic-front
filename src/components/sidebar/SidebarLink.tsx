import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarLinkProps {
  href: string
  icon: LucideIcon
  label: string
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href || (pathname === '/' && href === '/dashboard')

  return (
    <Link href={href} className="w-full">
      <div
        className={cn`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-[#f2ecfe] rounded-lg hover:text-[#804af3]   ${
          isActive ? 'bg-[#f2ecfe] text-white' : ''
        } justify-start p-3 pr-16`}>
        <Icon size={22} className={cn(!isActive ? 'text-[#6e7191] hover:text-[#804af3]' : 'text-[#804af3]')} />
        <span className={cn('font-medium text-lg', !isActive ? 'text-[#6e7191]' : 'text-[#804af3]')}>{label}</span>
      </div>
    </Link>
  )
}

export default SidebarLink
