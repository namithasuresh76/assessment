let users = [
    { id: 1, name: "Rani" },
    { id: 2, name: "Suma" },
    { id: 3, name: "Kriti" },
    { id: 4, name: "Uma" }
  ];
  let button = document.querySelector("#add");
  button.addEventListener("click", function() {
    addItems(input);
  });
  let addItems = function(input) {
    console.log(input.value);
    let newElement = input.value;
    users.unshift({ name: newElement });
    appendNode(users.map(user => user.name));
    input.value = "";
  };

  let container = document.querySelector("#container");
  let input = document.querySelector("#key");


  

  let appendNode = function(list) {
    container.innerHTML = `
      <ul> 
       ${generateLi(list)}
      </ul>
      `;
  };

  let generateLi = function(liItems) {
    return liItems
      .map(
        liItem =>
          `<li>${liItem}  <span id=${liItem} class="delete" onClick="handleDelete(${liItem})">X</span></li>`
      )
      .join(" ");
  };

let handleDelete=function(data){
    console.log("Came inside handle delete");
    users=users.filter(user=>user.name != data.id);
    console.log("Updated");
    appendNode(users.map(user => user.name));
}
appendNode(users.map(user => user.name));

 

  let itemIndex = document.querySelectorAll(".delete");
  console.log(itemIndex);
  addEvents();