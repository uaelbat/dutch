import React from 'react'

type Props = {
  children: React.ReactNode
  height?: number
  themeType?: keyof typeof Theme
}

const Theme = {
  primary: {
    color: 'text-white',
    bgColor: 'bg-indigo-950',
    border: 'border-indigo-950',
  }
}

export const Header: React.FC<Props> = ({ children, height=12, themeType='primary' }) => {
  const headerHeight = 'h-' + height;
  return (
    <div className={`${Theme[themeType].color} ${Theme[themeType].bgColor} ${headerHeight} text-3xl flex justify-center items-center`}>
      {children}
    </div>
  )
}
