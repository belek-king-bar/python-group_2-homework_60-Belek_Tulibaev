import React, {Component, Fragment} from 'react';
import Countries from '../../components/Countries/Countries.js';
import Blog from '../../components/CountriesBlog/CountriesBlog.js'
import Info from '../../components/InfoCountry/InfoCountry.js';
import axios from 'axios';
import { Row, Col} from 'reactstrap';


class Country extends Component {
        state = {
            countries: [],
            selectedCountryId: null
        };

        componentDidMount() {
            axios.get('all?fields=name;alpha3Code').then(response => {
                const requests = response.data.map(country => {
                    return {...country };
                });

                return Promise.all(requests);
            }).then(countries =>
                this.setState({countries})
            ).catch(error => {
                console.log(error);
            });
        }

        countryClicked = (countryId) => {
            this.setState({
                ...this.state,
                selectedCountryId: countryId
            });
        };

        render() {
            return (
                <Fragment>
                    <Row>
                        <Col xs={4}>
                            <Blog>
                                {this.state.countries.map(country => (
                                    <Countries
                                        key={country.alpha3Code}
                                        name={country.name}
                                        clicked={() => this.countryClicked(country.alpha3Code)}
                                        />
                                    ))}
                            </Blog>
                        </Col>
                        <Col xs={8}>
                                <Info countryId={this.state.selectedCountryId}/>
                        </Col>
                    </Row>
                </Fragment>
            )
        }
}

export default Country;