
todos = []
# define the task template that will be use to render new templates to the page
todo_template = Element("todo-template").select('.todo', from_content=True)
todo_list = Element("todo-list")
todo_input = Element("new-todo")
add_todo_btn = Element("add-todo")


def add_todo(*ags, **kws):
    # create todo
    todo_id = f"todo-{len(todos)}"
    todo = {"id": todo_id, "content": todo_input.element.value, "done": False}
    todos.append(todo)

    todoHtml = todo_template.clone(todo_id, to=todo_list)
    todoHtmlCheck = todoHtml.select('input')
    todoHtmlContent = todoHtml.select('p')
    todoHtmlContent.element.innerText = todo['content']
    todo_list.element.appendChild(todoHtml.element)

    def check_todo(evt=None):
        todo['done'] = not todo['done']
        if todo['done']:

            todoHtmlContent.element.style.textDecoration = "line-through"
        else:

            todoHtmlContent.element.style.textDecoration = "none"

    todo_input.clear()
    todoHtmlCheck.element.onclick = check_todo
