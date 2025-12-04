import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="">
            <ul className="flex space-x-4 p-4 bg-teal-900 text-white">
                <li className="hover:underline"><Link href="/">Home</Link></li>
                <li className="hover:underline"><Link href="/map">Map</Link></li>
            </ul>
        </nav>
    )
}