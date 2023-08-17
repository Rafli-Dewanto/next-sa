import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

async function getTodos() {
  const todos = await prisma.todo.findMany()
  return todos
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({
    data: {
      complete: complete
    },
    where: {
      id: id
    }
  })
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl">todo</h1>
        <Link className={`border border-slate-300 text-slate-300 px-2 py-1 rounded 
          hover:bg-slate-700 focus-within:bg-slate-700 outline-none`}
          href={'/new'}>
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} id={todo.id} name={todo.name} complete={todo.complete} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}
