import { cva } from "class-variance-authority"

export const Button = () => {

  const buttonStyles = cva(["hover:bg-secondary-hover", 'transition-colors'])
  return (
    <button />
  )
}
