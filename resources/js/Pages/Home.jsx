import { Link } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Home({ posts }) {
    const route = useRoute();

    return (
        <>
            <h1 className="text-slate-700 text-center font-bold text-6xl py-6">
                Hello
            </h1>

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
