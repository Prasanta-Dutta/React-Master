import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement("h1", {}, "Hello React Developers👩‍💻");
const jsxHeading = <h1 className="heading">React Developer from jsx 👩‍💻</h1>
const jsxHeading2 = (
    <h1>
        When write jsx in multiple line use ()
    </h1>
);

// This is a react element --> Which gives/retuen an object
const jsxHeading3 =
    <>
        <h1>
            When write jsx in multiple line use ()
        </h1>
        <h2>
            Using two element so use fragments or wrap into a div
        </h2>
    </>;


// Functional Components
const Title = () => <h3>I am Title 👑</h3>

const HeadingComponent = () => (
    <>
        <h1>
            This is a functional component.
        </h1>
        <h2>
            When rendering - render like render like component name with angular bracket.
        </h2>

        <Title/>
        <Title></Title>
        {Title()}  

        {/* This three things are same */}

    </>
);

// Rendering react element
// root.render(jsxHeading3);

// Rendering functional component
root.render(<HeadingComponent />);