import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {id:"children"}, 
    React.createElement("h1", {}, "Hello H1 here...")
);
root.render(parent);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const parent2 = React.createElement("div", {id:"children2"}, [
    React.createElement("h2", {key:"c1"}, "Hello React & Parcel"),
    React.createElement("p", {id:"myPara", key:"c2", style:{color:"orange"}}, "React with parcel is amaiging")
]);
root2.render(parent2);