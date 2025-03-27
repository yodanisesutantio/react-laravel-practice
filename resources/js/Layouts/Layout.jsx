import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header className="w-full py-2 px-24 bg-slate-800">
                <nav className="w-full flex flex-row justify-between">
                    <Link
                        href="/"
                        className="p-3 hover:cursor-pointer text-slate-200 hover:bg-slate-600 duration-300 rounded-lg"
                    >
                        Home
                    </Link>
                    <Link
                        href="/posts/create"
                        className="p-3 hover:cursor-pointer text-slate-200 hover:bg-slate-600 duration-300 rounded-lg"
                    >
                        Create
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
