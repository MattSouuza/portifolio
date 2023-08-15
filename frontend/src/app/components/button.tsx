import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
    title: string
    btnType?: 'summer-gradiant-full' | 'summer-gradiant-outline'
    action?: () => void
}

const Button = ({ title, btnType = 'summer-gradiant-full', action, ...props }: ButtonProps) => {

    const bgStyle = btnType === 'summer-gradiant-full' ? 'bg-gradient-to-tr from-bloom-pink from-20% via-revolution-red via-50% to-sunnier-yellow to-95% active:scale-95 duration-300 hover:outline hover:outline-1 hover:outline-sunnier-yellow' : ''

    return (
        <button
            className={`flex items-center justify-center text-lg text-white w-48 h-12 rounded-2xl ${bgStyle} cursor-pointer`}
            {...props}
        >{title}</button>
    )
}

export default Button