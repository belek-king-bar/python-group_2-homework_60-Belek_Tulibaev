import React, {Component} from 'react';
import axios from 'axios';
import { Jumbotron } from 'reactstrap';

class Info extends Component {

    state = {
        loadedCountry: null
    };

    componentDidUpdate() {
        const loadedCountry = this.state.loadedCountry;
        const newCountryId = this.props.countryId;

        if (newCountryId) {
            if (!loadedCountry || newCountryId !== loadedCountry.id) {
                axios.get('alpha/' + this.props.countryId).then(response => {
                    this.setState({loadedCountry: response.data});
                });
            }
        }
    }

    render() {
        return (
            this.state.loadedCountry ? <div>
                <Jumbotron className="mt-3 mr-3" style={{ height: 600}}>
                    <h1 className="text-danger mb-4">{this.state.loadedCountry.name} <img className="float-right" style={{ height: 200}} src={this.state.loadedCountry.flag} alt="#"/></h1>
                    <h5 className="text-left">Capital: {this.state.loadedCountry.capital}</h5>
                    <h5 className="mb-5 text-left">Population: {this.state.loadedCountry.population}</h5>
                    <div className="text-left">Borders with:
                            <p>{this.state.loadedCountry.borders}</p>
                    </div>
                </Jumbotron>
            </div> : null
        );
    }
}

export default Info;