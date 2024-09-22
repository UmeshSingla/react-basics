import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
      <div>
          <h1>About</h1>
          <p>Here comes the description about Namaste React app.</p>
          <UserClass name={"Umesh Kumar - Class Based."} location={"Nag Tibba"}/>
      </div>
    );
}

export default About;
