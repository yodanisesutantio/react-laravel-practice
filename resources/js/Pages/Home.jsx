import { Link } from "@inertiajs/react";

export default function Home({ posts }) {
    console.log(posts);
    return (
        <>
            <h1 className="text-slate-700 text-center font-bold text-6xl py-6">
                Hello
            </h1>

            <div className="">
                {posts.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
