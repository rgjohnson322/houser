import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP } from "../store"


class Wizard extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
        }
        this.addHouse = this.addHouse.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    addHouse() {
        axios
            .post('/api/wizard/add', {
                name: this.props.name,
                address: this.props.address,
                city: this.props.city,
                state: this.props.state,
                zip: this.props.zip
            })
            .then(response => {
                this.setState({
                    name: response.data.name,
                    address: response.data.address,
                    city: response.data.city,
                    state: response.data.state,
                    zip: response.data.zip
                })
            })
            .catch(() => {
                console.log('error')
            })
    }
    cancel() {
        this.setState({ name: '', address: '', city: '', state: '', zip: 0 })
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }
    saveChanges() {
        store.dispatch({ type: UPDATE_NAME, payload: this.state.name });
        store.dispatch({ type: UPDATE_ADDRESS, payload: this.state.address });
        store.dispatch({ type: UPDATE_CITY, payload: this.state.city });
        store.dispatch({ type: UPDATE_STATE, payload: this.state.state });
        store.dispatch({ type: UPDATE_ZIP, payload: this.state.zip });
    }

    render() {
        let { updateName, updateAddress, updateCity, updateState, updateZip } = this.props;

        return (
            <main>
                <header className='typing'>
                    <h1>Add New Listing</h1>
                    <button><Link to='/'>cancel</Link></button>
                </header>
                <section className='inputs'>
                    <h3>Property Name</h3>
                    <input type="text" onChange={e => updateName(e.target.value)} />
                    <h3>Address</h3>
                    <input type="text" onChange={e => updateAddress(e.target.value)} />
                    <h3>City</h3>
                    <input type="text" onChange={e => updateCity(e.target.value)} />
                    <h3>State</h3>
                    <input type="text" onChange={e => updateState(e.target.value)} />
                    <h3>Zip</h3>
                    <input type="text" onChange={e => updateZip(e.target.value)} />
                </section>
                <Link to="/">
                    <button onClick={event => this.addHouse(this.props)}>Submit</button>
                </Link>
            </main>
        )
    }
}

export default Wizard 