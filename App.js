import React from "react";
import ReactDOM from "react-dom/client";

// JSX is transpiled before it reaches JS - Parcel - Babel

// JSX => React.CreateElement => React Element - JS Object => HTML Element( React Render ).
const heading = <h1 className="heading">Hello World, this is React using JSX.</h1>;
const headingMultipleLine = ( <h1 className="heading">
    Hello World, this is React using JSX.
</h1> );

const elem = <span>This is a span tag content.</span>;
const Title = () => {
    return <h1 id="heading">This is the heading coming from Title component. {elem}</h1>;
}

const num = 440;
//Functional Component.
const HeadingComponent = () => {
    return (
        <div className="container">
            <Title />
            <h2 className="heading">Hello World {num}, this is Heading level 2 using functional component - HeadingComponent.</h2>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("container__root"));

root.render( <HeadingComponent />);
