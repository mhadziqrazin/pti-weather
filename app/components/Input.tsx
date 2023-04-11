import { ComponentPropsWithoutRef } from "react"

interface InputProps {
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<
  InputProps &
  ComponentPropsWithoutRef<'input'>> = ({
    type, placeholder, value, onChange, ...props
  }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        spellCheck={false}
        {...props}
      />
    )
  }

export default Input