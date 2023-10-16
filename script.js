
        const newTodoInput = document.getElementById("newTodo");
        const addButton = document.getElementById("add-button");
        const todoList = document.getElementById("todo-list");

        addButton.addEventListener("click", addTodo);

        function addTodo() {
            const todoText = newTodoInput.value;
            if (todoText.trim() === "") {
                alert("Please enter a task.");
                return;
            }

            const li = document.createElement("li");
            const task = document.createElement("div");
            task.classList.add("task");

            const text = document.createElement("span");
            text.textContent = todoText;

            const actions = document.createElement("div");
            actions.classList.add("actions");

            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            completeButton.addEventListener("click", completeTask);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", deleteTask);

            actions.appendChild(completeButton);
            actions.appendChild(deleteButton);

            task.appendChild(text);
            task.appendChild(actions);
            li.appendChild(task);
            todoList.appendChild(li);

            newTodoInput.value = "";
        }

        function completeTask() {
            const task = this.parentElement.parentElement;
            task.classList.toggle("completed");
        }

        function deleteTask() {
            const task = this.parentElement.parentElement;
            task.remove();
        }
    