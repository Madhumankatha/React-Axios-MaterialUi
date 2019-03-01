import React from 'react';
import api from './api/Github'
import NavAppBar from "./components/NavAppBar";
import CardList from "./components/CardList";
import App from "./App";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {results : []};
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit = async (term) => {
        const response = await api.get('search/repositories',{
                params : {
                    q : term,
                    sort : 'stars',
                    orders : 'desc'
                }
            }).catch(() => <App/>);
        this.setState({results : response.data.items});
        };

    render() {
        return (
            <div>
                <NavAppBar onSearch={this.onSearchSubmit}/>
                <CardList results={this.state.results}/>
            </div>
        );
    }
}

export default Home;