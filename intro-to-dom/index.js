// 1. Add Item when user click on Submit Button
// 1A. Get Submit Button Element
const submitButton = document.getElementById("task-submit")
const listItemsElement = document.getElementById("task-items")

// 1B. Add Event Listner
submitButton.addEventListener("click", () => {
    // 2. Get Value of Input Field
    const inputField = document.getElementById("task-input")

    // 3. Add Item to List
    listItemsElement.innerHTML += `<li id="task-item">${inputField.value} <button id="task-item-delete" onclick=>Delete</button></li>`
})

// 4. Delete Task Item
const taskItemDeleteButton = document.getElementById("task-item-delete")

// 4A. Get Value of an item
taskItemDeleteButton.addEventListener("click", function (event) {
    console.log("HERE", event.target)
})
