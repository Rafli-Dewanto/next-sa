import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
    "use server"
    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid")
    }
    await prisma.todo.create({
        data: {
            name: title,
            complete: false
        }
    })
    redirect("/")
}

export default function Page() {
    return (
        <>
            <header className="flex items-center justify-between">
                <h1 className="text-2xl">New</h1>
            </header>

            <form action={createTodo} className="flex flex-col gap-2">
                <input
                    type="text"
                    name="title"
                    className="px-2 py-1 bg-transparent border rounded outline-none border-slate-300" />

                <div className="flex gap-1 justify-end">
                    <Link
                        className="px-2 py-1 border rounded outline-none border-slate-300 
                        text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700"
                        href="..">Cancel</Link>

                    <button
                        className="px-2 py-1 border rounded outline-none border-slate-300 
                        text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700"
                        type="submit">
                        Create
                    </button>
                </div>
            </form>
        </>
    )
};
