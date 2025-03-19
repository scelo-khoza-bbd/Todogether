const task = document.getElementById("task");
const columns = document.querySelectorAll(".column");

task.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
});

columns.forEach((column) => {
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text");
        const taskElement = document.getElementById(taskId);
        column.appendChild(taskElement);
    });
});
