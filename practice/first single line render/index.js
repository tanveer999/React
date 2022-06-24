// ReactDOM.render(<h1 className="header">Hello, everyone!</h1>, document.getElementById("root"))

// Below line throws as JSX supports only one parent element
// ReactDOM.render(<h1 className="header">Hello, everyone!</h1><p></p>, document.getElementById("root"))

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

// using variable

// const page = (
//     <div>
//         <h1>This is a heading</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page)

// ReactDOM.render(page, document.getElementById("root"))


// const navbar = (
//     <nav>
//         <h1>Website</h1>
//         <ul>
//             <li>
//                 Pricing
//             </li>
//             <li>
//                 About
//             </li>
//             <li>
//                 Contact
//             </li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(navbar, document.querySelector("#root"))

const page = (
    <div>
        <h1>Heading</h1>
        <p>Learning React</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
)

// document.getElementById("root").append(page) //output: [object Object]
ReactDOM.render(page, document.getElementById("root"))