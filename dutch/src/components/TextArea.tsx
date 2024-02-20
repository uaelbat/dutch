import React from 'react'

type Props = {
  children: React.ReactNode
  padding?: string
}

export const TextArea: React.FC<Props> = ({ children, padding='6' }) => {
  const textAreaPadding = 'p-' + padding;
  return (
    <div className={`border-solid border-2 border-black h-full w-full text-lg ${textAreaPadding}`}>
      {children}
    </div>
  )
}
