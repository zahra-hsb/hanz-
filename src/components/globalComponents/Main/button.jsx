import Link from 'next/link'

const Button = ({ title, url, border, color, hover }) => {
    return (
        <>
            <Link href={url} className={`lg:z-50 text-green text-sm lg:text-md px-4 py-1 mt-[100px] rounded-3xl transition-colors ${border} ${color} ${hover}`}>{title} ←</Link>
        </>
    )
}

export default Button