let list = [];
while (true) {
  let whatToDo = prompt("What would you like to do?");
  if (whatToDo.toLowerCase() === "quit") {
    console.log("You quit the app");
    break;
  }
  if (whatToDo === "new") {
    let ToAdd = prompt("What would you like to add?");
    list.push(ToAdd);
    console.log(`${ToAdd} added to the list`);
  }
  if (whatToDo === "list") {
    console.log("********");
    for (let i = 0; i < list.length; i++) {
      console.log(`${i}: ${list[i]}`);
    }
    console.log("********");
  }
  if (whatToDo === "delete") {
    let deleteToDo = parseInt(prompt("Enter the index of To Do to be deleted"));
    if (deleteToDo > list.length - 1) {
      console.log("there is no such index");
    } else if (!Number.isNaN(deleteToDo)) {
      console.log(`${list[deleteToDo]} has been removed from the list`);
      list.splice(deleteToDo, 1);
    } else {
      console.log("invalid entry");
    }
  }
}
