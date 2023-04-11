import { ComponentPropsWithoutRef, ReactComponentElement } from "react"

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined
  disabled: boolean
  children: React.ReactNode
}

const Button: React.FC<
  ButtonProps &
  ComponentPropsWithoutRef<'button'>> = ({
    type, disabled, children, ...props
  }) => {
    return (
      <button
        type={type}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }

export default Button