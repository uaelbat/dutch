import React from 'react'

type Props = JSX.IntrinsicElements['button'] & {
  children: React.ReactNode
  padding?: number
  shapeType?: keyof typeof Shape
  themeType?: keyof typeof Theme
  onClick?: () => void
}

const Theme = {
  primary: {
    color: 'text-slate-500',
    bgColor: 'bg-blue-300',
    border: 'border-blue-200',
  }
}

const Shape = {
  rectangle: 'rounded-none',
  ellipse: 'ellipse', // index.cssで定義した独自クラス
  circle: 'rounded-full',
}

const InnerButton = (props: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { children, padding=10, shapeType='rectangle', themeType='primary', onClick, ...buttonProps } = props
  const buttonPadding = 'p-' + padding;
  return (
    <button
      className={`${Theme[themeType].color} ${Theme[themeType].bgColor} ${Theme[themeType].border} ${buttonPadding} ${Shape[shapeType]} border-solid border-4 text-4xl flex justify-center items-center`}
      onClick={onClick}
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  )
}

export const Button = React.forwardRef(InnerButton)
