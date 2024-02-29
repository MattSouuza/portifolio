import nodejsImage from '@/app/assests/images/nodejs.png'
import csharpImage from '@/app/assests/images/csharp.png'
import htmlcssjsImage from '@/app/assests/images/htmlcssjs.png'
import sqlImage from '@/app/assests/images/sql.png'
import reactImage from '@/app/assests/images/react.png'

import Image from 'next/image'

export const SkillsCard = () => {
    return (
        <section className="w-full h-60 flex flex-col bg-gradient-to-b from-transparent to-night-bg-light rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-night-bg-light">
            {/* todo: responsive card */}
            <figure className='flex items-center justify-around w-full h-full'>
                <Image className='object-fit w-32' src={nodejsImage} alt='NodeJs'/>
                <Image className='object-fit w-24' src={csharpImage} alt='NodeJs'/>
                <Image className='object-fit w-24' src={htmlcssjsImage} alt='NodeJs'/>
                <Image className='object-fit w-24' src={sqlImage} alt='NodeJs'/>
                <Image className='object-fit w-36' src={reactImage} alt='NodeJs'/>
            </figure>
        </section>
    )
}