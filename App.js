import React from "react";
import ReactDOM from "react-dom/client";

// JSX is transpiled before it reaches JS - Parcel - Babel

const Heading2 = () => <h2 className="heading-l2">This is a heading level 2 using JSX Functional Component</h2>;
const Heading3 = () => <h3 className="heading-l3">This is a heading level 3 using JSX Functional Component</h3>
const ContainerDiv = () => (
    <div className="title">
        <Heading2 />
        <Heading3 />
    </div>
);

const rootOld = ReactDOM.createRoot( document.getElementById("container__root"));

rootOld.render( <ContainerDiv />);

const Logo = () => <img className="header__logo" src="https://pd.w.org/2024/04/3466141ebf053de0.18000183-768x778.jpeg" alt ="WordPress Logo" />;
const SearchInput = () => <input type="text" name="search" placeholder="Search.." />;
const UserIcon = () => <img className="header__user-icon" src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt ="User Icon" />;

// JSX => React.CreateElement => React Element - JS Object => HTML Element( React Render ).
const Header = () => (
    <div className="header">
        <Logo />
        <SearchInput />
        <UserIcon />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("container__page"));

root.render( <Header />);
