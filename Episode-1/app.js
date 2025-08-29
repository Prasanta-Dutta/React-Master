const heading = React.createElement("h1", {}, "Hello Prasanta, from REACT, ~Root-1");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/*
const heading2 = React.createElement("h1", {id:"heading2", style:{color:"red"}}, "Hello Rakesh");

setTimeout(() => {
    root.render(heading2);
}, 2000);

*/

/* 
    <div id="parent">
        <div id="children">
            <h1>Hello I am H1</h1>
        </div>
    </div>
*/
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    const parent2 = React.createElement("div", {id:"parent2"}, 
        React.createElement("div", {id:"children2"}, 
            React.createElement("h1", {}, "Hello I am H1, ~Root-2")
        )
    );

    root2.render(parent2);


/*
    <div id="parent">
        <div id="children">
            <h1>Hello I am H1</h1>
            <h2>Hello I am H2</h2>
        </div>
    </div>
*/

    const root3 = ReactDOM.createRoot(document.getElementById("root3"));
    const parent3 = React.createElement("div", {id:"parent3"}, 
        React.createElement("div", {id:"children3"}, [
            React.createElement("h1", {}, "Hello I am H1, ~Root-3"),
            React.createElement("h2", {}, "Hello I am H2")
        ])
    );
    root3.render(parent3);


    /*
    <div id="parent4">
        <div id="children4">
            <h1>Hello I am H1</h1>
            <h2>Hello I am H2</h2>
        </div>
        <div id="children5">
            <h1>Hello I am H1</h1>
            <h2>Hello I am H2</h2>
        </div>
    </div>
*/

    const root4 = ReactDOM.createRoot(document.getElementById("root4"));
    const parent4 = React.createElement("div", {id:"parent4"}, [
            React.createElement("div", {id:"children4"}, [
            React.createElement("h1", {}, "Hello from H1, ~Root-4"),
            React.createElement("h2", {}, "Hello from h2")
        ]),
        React.createElement("div", {id:"children5"}, [
            React.createElement("h1", {}, "Hello from H1"),
            React.createElement("h2", {}, "Hello from h2")
        ])
    ]);
    root4.render(parent4);
