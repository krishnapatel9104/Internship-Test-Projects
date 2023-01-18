let para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let searchWord = "Ipsum";

console.log("searchWord is in para or not? ", para.includes(searchWord));
console.log("searchWord position in para : ", para.search(searchWord));
console.log("searchWord length : ", searchWord.length);
console.log("last 3 char of searchWord : ", searchWord.slice(-3));