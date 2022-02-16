const todosEl = document.querySelector("#todos");

const todos = [
  { id: 0, text: "Create a schedule for retreat", isCompleted: false },
  { id: 1, text: "Call to my mom", isCompleted: true },
  { id: 2, text: "Go to the swiminng pool", isCompleted: false },
];

const createHtmlTodo = (todo) =>
  `<li class="desc__item ${todo.isCompleted ? "desc__item--completed" : ""}">
    <div class="item__submit">
      <input
        id="input-submit"
        type="checkbox"
        name="checkbox-group"
        ${todo.isCompleted ? "checked" : ""}
      />
      
      <label for="input-submit" class="submit"></label>
    </div>

    <div class="item__text">
      <span href="#" class="text">${todo.text}</span>
    </div>

    <div class="item__cross">
      <input type="image" src="./img/close.png" alt="cross" class="cross" />
    </div>
  </li>`;

const htmlTodos = todos
  .map(createHtmlTodo)
  .reduce((prevItem, currentItem) => prevItem + currentItem, "");

todosEl.innerHTML = htmlTodos;
