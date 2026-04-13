import Link from "next/link"

export default function Navbar() {

    const navLinks = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Help",
            href: "/help",
        }
    ]

    return (
        <nav className="w-full flex bg-white font-body">
            <div className="w-full flex items-center justify-between px-10 py-5">

                {/* Logo */}
                <div className="flex items-center gap-x-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-gray-400 group-hover:rotate-10 transition-all duration-200" />
                    <p className="font-heading font-semibold text-2xl text-black">Logo</p>
                </div>

                {/* Nav Links */}
                <div className="flex gap-x-10 text-black text-sm">
                    {navLinks.map((l) => {
                        return (
                            <div key={l.title}>
                                <Link href={l.href}>
                                    {l.title}
                                </Link>
                            </div>
                        )
                    })}
                </div>

                {/* Auth Button */}
                <div className="flex gap-x-3">
                    <Link href="/login" className="px-5 py-2 rounded-xl text-black">
                        Login
                    </Link>
                    <Link href="/register" className="px-5 py-2 rounded-xl text-black">
                        Register
                    </Link>
                </div>

            </div>
        </nav>
    )
}