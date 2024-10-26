import { FC, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="wrapper">{children}</div>
  )
}
