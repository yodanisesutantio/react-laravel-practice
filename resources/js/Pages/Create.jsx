import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    // console.log(useForm());
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    console.log(errors);

    return (
        <>
            <Head title="Create" />
            <h1 className="text-slate-700 text-center font-bold text-5xl py-6">
                Create a New Post
            </h1>

            <div className="w-1/2 mx-auto">
                <form
                    action=""
                    className="flex flex-col gap-6"
                    onSubmit={submit}
                >
                    <textarea
                        className={`border border-slate-800 rounded-lg ${
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
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
}
