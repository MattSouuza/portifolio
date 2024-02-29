import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
    title: string
    btnType?: 'summer-gradient-full' | 'summer-gradient-outline'
    action?: () => void
}

const Button = ({ title, btnType = 'summer-gradient-full', action, ...props }: ButtonProps) => {

    const bgStyle = btnType === 'summer-gradient-full' ? 'bg-summer-gradient' : ''

    return (
        <button
            className={`flex items-center justify-center text-lg text-white w-48 h-12 rounded-2xl ${bgStyle} cursor-pointer hover:border-t-neon-green border-solid`}
            {...props}
        >{title}</button>
    )
}

export default Button