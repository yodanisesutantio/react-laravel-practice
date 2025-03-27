import { Link, useForm } from "@inertiajs/react";

export default function Show({ post }) {
    const { delete: destroy } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        destroy(route("posts.destroy", post.id));
    }

    return (
        <>
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Posted on: </span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <p className="font-medium">{post.body}</p>

                <div className="flex items-center justify-end gap-2">
                    <form action="" onSubmit={submit}>
                        <button className="bg-red-500 rounded-lg px-4 py-3 text-white">
                            Delete
                        </button>
                    </form>
                    {/* <Link
                        href={`/posts/${post.id}/edit`}
                        className="bg-green-500 rounded-lg px-4 py-3 text-white"
                    >
                        Update
                    </Link> */}

                    <Link
                        href={route("posts.edit", post)}
                        className="bg-green-500 rounded-lg px-4 py-3 text-white"
                    >
                        Update
                    </Link>
                </div>
            </div>
        </>
    );
}
