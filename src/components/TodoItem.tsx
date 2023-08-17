"use client"

type TodoItemProps = {
    id: string;
    name: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ id, name, complete, toggleTodo }) => {
    return (
        <li className="flex items-center gap-1">
            <input
                id={id}
                defaultChecked={complete}
                onChange={(e) => toggleTodo(id, e.target.checked)}
                type="checkbox"
                className={`cursor-pointer peer`} />
            <label htmlFor={id} className={`peer-checked:line-through cursor-pointer peer-checked:text-slate-400`}>{name}</label>
        </li>
    )
}

export default TodoItem