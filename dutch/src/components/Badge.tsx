import React from 'react'

type Props = {
  children: React.ReactNode
  themeType?: keyof typeof Theme
}

const Theme = {
  primary: {
    color: 'text-white',
    bgColor: 'bg-indigo-950',
    border: 'border-indigo-950',
  }
}

export const Badge: React.FC<Props> = ({ children, themeType='primary' }) => {
  return (
    <div className={`${Theme[themeType].color} ${Theme[themeType].bgColor} h-12 text-3xl flex justify-center items-center`}>
      {children}
    </div>
  )
}
