import React, {Component} from 'react';
import axios from 'axios';
import { Jumbotron, Row } from 'reactstrap';

class Info extends Component {

    state = {
        loadedCountry: null,
        border: []
    };

    componentDidUpdate() {
        const loadedCountry = this.state.loadedCountry;
        const newCountryId = this.props.countryId;

        if (newCountryId) {
            if (!loadedCountry || newCountryId !== loadedCountry.id) {
                axios.get('alpha/' + this.props.countryId).then(response => {
                    const requests = response.data.borders.map(country => {
                        return axios.get('alpha/' + country).then(response => {
                            return response.data
                        });
                    });

                    return Promise.all(requests)
                        .then(countries =>
                            this.setState({
                                loadedCountry: response.data,
                                border: [...countries]
                            })
                        ).catch(error => {
                            console.log(error);

                        });
                })
            }
        }
    }

    render() {
        return (
            this.state.loadedCountry ? <div>
                <Jumbotron className="mt-4 mr-4 mb-0" style={{ height: 580, overflowY: 'scroll'}}>
                    <h1 className="text-danger mb-4">{this.state.loadedCountry.name} <img className="float-right" style={{ height: 200, width: 300}} src={this.state.loadedCountry.flag} alt="#"/></h1>
                    <h5 className="text-left">Столица: {this.state.loadedCountry.capital}</h5>
                    <h5 className="mb-5 text-left">Население: {this.state.loadedCountry.population} человек</h5>
                    <div className="text-left">Граничит с:
                        <div className="mt-3 ml-5">
                            {this.state.border.map(country =>
                                <p className="ml-5"> -- {country.name} -- </p>
                            )}
                        </div>
                    </div>
                </Jumbotron>
            </div> :
                <Jumbotron className="mt-4 mr-4 mb-0" style={{ height: 580}}>
                    <h2 className="text-warning">Выберите страну чтобы узнать об этой стране по больше</h2>
                </Jumbotron>
        );
    }
}

export default Info;