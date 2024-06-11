// Get references to the button, input box, and list elements in the DOM
const button = document.getElementById("button");
const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

// Function to add a task
function addTask() {
  // Get the value from the input box
  let value = inputBox.value;

  // If the input box is empty, show an alert
  if (value === "") {
    alert("You must write something!");
  } else {
    // Create a new list item
    let li = document.createElement("li");
    li.classList.add("list-group-item");

    // Create a new checkbox and add it to the list item
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input", "me-2");
    li.appendChild(checkbox);

    // Create a new text node with the input value and add it to the list item
    let textNode = document.createTextNode(value);
    li.appendChild(textNode);

    // Add the list item to the list
    list.appendChild(li);

    // Create a new span element for the delete button and add it to the list item
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Add an event listener to the delete button to remove the list item when clicked
    span.addEventListener("click", function (e) {
      li.remove();
      saveData();
    });
  }

  // Clear the input box
  inputBox.value = "";

  // Save the current state of the list to local storage
  saveData();
}

// Add an event listener to the button to add a task when clicked
button.addEventListener(
  "click",
  function (e) {
    addTask();
  },
  false
);

// Function to save the current state of the list to local storage
function saveData() {
  localStorage.setItem("data", list.innerHTML);
  console.log("saved the following data: ", list.innerHTML);
}

// Function to load the list from local storage
function showList() {
  items = localStorage.getItem("data");
  console.log("retrieved the following data: ", items);
  list.innerHTML = items;
}

// Load the list from local storage when the page loads
showList();