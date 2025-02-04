function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    const li = document.createElement("li");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        taskTextElement.classList.toggle("done");
    };
    
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    
    // Create the image element for the delete button
    const deleteImage = document.createElement("img");
    deleteImage.src = "./images/delete.png"; // Make sure the image path is correct
    deleteImage.alt = "Delete";
    deleteImage.width = 20;
    deleteImage.style.cursor = "pointer";  // Add a cursor pointer to indicate it's clickable
    deleteImage.onclick = function() {
        li.remove();
    };
    
    li.appendChild(checkbox);
    li.appendChild(taskTextElement);
    li.appendChild(deleteImage); // Append the image instead of the button
    
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value = ""; // Clear input field after adding task
}
