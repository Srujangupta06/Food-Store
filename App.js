// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML = "Welcome To React";
// root.appendChild(heading);

/*
<div id="parent">
<div id='child'>
<h1>Iam a Child 1</h1>
<h1>Iam a Child 2</h1>
</div>

</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam a Child 1"),
    React.createElement("h1", {}, "Iam a Child 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam a Child 1"),
    React.createElement("h1", {}, "Iam a Child 2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", className: "main-heading" },
  "Hello React! 🤗"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

