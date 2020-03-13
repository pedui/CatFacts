import React from 'react';
import AlertBox from "./components/AlertBox";
import FetchButton from "./components/FetchButton";
import FactList from "./components/FactList";
import './App.css';
import LoadingSpinner from "./components/LoadingSpinner";

//As calling the API seems to cause CORS header issues, I added a proxy to fix the header situation.
const proxy = 'https:/cors-anywhere.herokuapp.com/';
const query = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5';

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
        console.log('Finding more fun facts...');
        this.setState({isLoading: true});
        this.fetchData();
    };

    async fetchData() {
            await fetch( proxy + query )
            .then(response => response.json())
            .then(data => {
                //Saving the fetched data and toggling the loading variable (LoadingScreen off).
                this.setState({
                    facts: data,
                    isLoading: false
                });
            })
            .catch(error => {
                console.log('Oh snap! You got an error! The error message received: ' + error);
                //Saving error details to view them in the UI as an error screen.
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

    //Screens are rendered based on the variables that describe the error or loading state of application.
    render() {
        return <div key={'header'} className={'body'}>
            <h1 className="App-header">The Random Cat Fact Generator</h1>
            <h5>Five amazing facts brought to you by a cat enthusiast</h5>
            {this.state.isLoading ?
                <LoadingSpinner></LoadingSpinner>
                :
                <body className={'App-body'}>
                    {this.state.hasError ?
                        <AlertBox children={this.state.errorMessage}></AlertBox>
                        :
                        <div key={'facts'}>
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
