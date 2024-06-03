const heading1 = React.createElement("h1", {}, "This is a nested heading level 1 inside a parent and child div.");
const heading2 = React.createElement("h2", {}, "This is a nested heading level 2 inside a parent and child div.");
const child = React.createElement("div", {id: "child"}, [heading1, heading2] );
const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    child 
);

const root = ReactDOM.createRoot(document.getElementById("container__root-react"));
root.render(parent);
