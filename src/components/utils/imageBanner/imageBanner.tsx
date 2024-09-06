type Props = {
  text: string
}

export default function ImageBanner({ text }: Props) {
  return (
    <div className="flex justify-end w-full bg-black/80 p-1">
      <p className="text-white text-sm">{text}</p>
    </div>
  )
}
