import Header from "./Header";
import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
      <div>
          <Header />
          <h1>Oops!</h1>
          <p>Something went wrong, this page probably doesn't exists! {err.statusText}</p>
      </div>
    );
}

export default Error;
