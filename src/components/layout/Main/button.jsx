import Link from 'next/link'

const Button = ({ title, url, border, color }) => {
    return (
        <>
            <Link href={url} className={`z-50 text-green text-lg px-4 py-1 mt-[100px] border-2 border-green rounded-3xl ${border} ${color}`}>{title} ←</Link>
        </>
    )
}

export default Button