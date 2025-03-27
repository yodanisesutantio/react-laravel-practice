import { Head, useForm } from "@inertiajs/react";

export default function Edit({ post }) {
    // console.log(useForm());
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });

    function submit(e) {
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route("posts.update", post));
    }

    return (
        <>
            <Head title="Edit" />
            <h1 className="text-slate-700 text-center font-bold text-5xl py-6">
                Edit your Post
            </h1>

            <div className="w-1/2 mx-auto">
                <form
                    action=""
                    className="flex flex-col gap-6"
                    onSubmit={submit}
                >
                    <textarea
                        className={`border border-slate-800 p-4 rounded-lg ${
                            errors.body
                                ? "ring ring-red-500 border-slate-800/0"
                                : ""
                        }`}
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                    ></textarea>
                    {errors.body && (
                        <p className="text-red-500">{errors.body}</p>
                    )}

                    <button
                        className="bg-slate-800 hover:bg-slate-700 text-slate-100 py-3 rounded-lg duration-300"
                        disabled={processing}
                    >
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
}
