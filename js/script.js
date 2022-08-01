const contentTable = document.querySelector(".table-content")
const fantasyClick = document.querySelector("#fantasy")

fantasyClick.onclick = () => {
  contentTable.classList.toggle("invisible")
}