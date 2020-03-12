import React from 'react';
import AlertBox from "./components/AlertBox";
import FetchButton from "./components/FetchButton";
import FactList from "./components/FactList";
import './App.css';
import LoadingScreen from "./components/LoadingScreen";

const Proxy = 'https:/cors-anywhere.herokuapp.com/';
const Query = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            hasError: false,
            errorMessage: '',
            facts: []
        };
    }

    handleClick = () => {
        console.log('FINDING ANOTHER FACT ABOUT CATS!');
        this.setState({isLoading: true});
        this.fetchData();
    };

    async fetchData() {
            await fetch( Proxy + Query )
            .then(response => response.json())
            .then(data => {
                this.setState({
                    facts: data,
                    isLoading: false
                });
            })
            .catch(error => {
                console.log('Oh snap! You got an error! The error message received: ' + error);
                this.setState({
                    errorMessage: error.message,
                    hasError: true,
                    isLoading: false
                });
            });
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return <div key={'header'} className={'body'}>
            <h1 className="App-header">The Random Cat Fact Generator</h1>
            <h5>Five amazing facts brought to you by a cat enthusiast</h5>
            {this.state.isLoading ?
                <LoadingScreen></LoadingScreen>
                :
                <body className={'App-body'}>
                    {this.state.hasError ?
                        <AlertBox children={this.state.errorMessage}></AlertBox>
                        :
                        <div key={'Facts'}>
                            <FactList children={this.state.facts}></FactList>
                            <FetchButton children={this.handleClick}></FetchButton>
                        </div>
                    }
                </body>
            }
        </div>
    }
}

export default App;
