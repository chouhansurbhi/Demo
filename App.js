const heading = React.createElement("h1", {id: "heading"}, "Hello World!") // we are creating h1 element with react 
console.log(heading)  //return an object
const root = ReactDOM.createRoot(document.getElementById("root")) //So we need to create a root element for DOM manipulation , that will create a bridge between React and browser 
root.render(heading)