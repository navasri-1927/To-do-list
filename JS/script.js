
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;
      span.style.flex = "1";

      const actions = document.createElement("div");
      actions.classList.add("actions");

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✔";
      completeBtn.className = "complete-btn";
      completeBtn.onclick = () => {
        li.classList.toggle("completed");
      };

      const editBtn = document.createElement("button");
      editBtn.textContent = "✏";
      editBtn.className = "edit-btn";
      editBtn.onclick = () => {
        const newText = prompt("Edit task:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
          span.textContent = newText.trim();
        }
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => {
        taskList.removeChild(li);
      };

      actions.appendChild(completeBtn);
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actions);

      taskList.appendChild(li);
      taskInput.value = "";
    }

    // Optional: Press "Enter" to add task
    taskInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        addTask();
      }
    });
