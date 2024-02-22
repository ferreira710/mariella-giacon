type Props = {
    text: string
}

export default function ImageBanner({ text }: Props) {
    return (
        <div className='absolute bottom-0 flex h-6 w-full items-center bg-black/80 p-2'>
            <p className='text-white'>{text}</p>
        </div>
    )
}
