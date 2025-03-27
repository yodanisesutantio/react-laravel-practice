import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import { useState } from "react";

export default function Home({ posts }) {
    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage();
    const [flashMsg, setFlashMsg] = useState(flash.message);
    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    return (
        <>
            <Head>
                <title>{component}</title>
            </Head>
            <h1 className="text-slate-700 text-center font-bold text-6xl py-6">
                Hello
            </h1>

            {flashMsg && (
                <div className="absolute top-20 right-5 bg-red-400 p-3 rounded-lg shadow-lg text-white">
                    {flashMsg}
                </div>
            )}

            {flash.success && (
                <div className="absolute top-20 right-5 bg-green-400 p-3 rounded-lg shadow-lg text-white">
                    {flash.success}
                </div>
            )}

            <div className="">
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        {/* <Link
                            href={`/posts/${post.id}`}
                            className="text-blue-500 underline font-medium"
                        >
                            Read More...
                        </Link> */}
                        <Link
                            href={route("posts.show", post.id)}
                            className="text-blue-500 underline font-medium"
                        >
                            Read More...
                        </Link>
                    </div>
                ))}
            </div>

            <div className="py-8 px-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-700 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-500"
                        ></span>
                    )
                )}
            </div>
        </>
    );
}
