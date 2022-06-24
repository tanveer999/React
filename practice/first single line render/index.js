ReactDOM.render(<h1 className="header">Hello, everyone!</h1>, document.getElementById("root"))
// below render replaces the first render if uncommented
// ReactDOM.render(
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//     </ul>,
//     document.querySelector("#root")
// )

// vanilla javascript

// document.body.onload = addElement;

// function addElement() {
//     // create a new h1 element
//     const newHeading = document.createElement("h1")
//     newHeading.className = "header"
//     // and give it some content
//     const newContent = document.createTextNode("Hi User")

//     // add text to newly created h1
//     newHeading.appendChild(newContent)

//     const element = document.getElementById("root")
//     element.appendChild(newHeading)
// } 