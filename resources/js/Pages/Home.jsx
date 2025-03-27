import { Link } from "@inertiajs/react";

export default function Home({ name }) {
    return (
        <>
            <h1 className="text-slate-700 text-center font-bold text-6xl py-6">
                Hello {name}
            </h1>

            <Link preserveScroll className="block mt-[750px]" href="/">
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    );
}
