import React from "react";
import {WPMUDEV_MEMBERS} from "../utils/constants";
class userClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const users = await fetch(WPMUDEV_MEMBERS);
        const usersData = await users.json();
        this.setState({
            users: usersData,
        })
    }

    render() {
        return (
            console.log(this.state.users),
            <div className="user-card-wrapper">
                {
                    this.state.users.map(({login, avatar_url, html_url}) => {
                        console.log(login);
                        return (
                            <div className="user-card">
                                <h2>{login}</h2>
                                <img src={avatar_url} alt={login + " avatar"}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default userClass;