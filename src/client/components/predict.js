import React, {Component, PropTypes} from 'react'
import GoToHome from './../utils/'
import {Form} from 'semantic-ui-react'

class Predict extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div>
                <h1 className="ui header">Predict Screen</h1>
                <GoToHome className="ui_header"></GoToHome>
                <div className="company_form">
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input label='Company name' placeholder='Company name'/>
                            <Form.Input label='Company size' placeholder='Company size'/>
                            <Form.Input label='Tech Stack' placeholder='Tech Stack'/>
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input label='Founded Year' placeholder='Year Founded'/>
                            <Form.Input label='Contact Person' placeholder='Enter contacting person'/>
                            <Form.Input label='Specialties' placeholder='Specialties'/>
                        </Form.Group>
                            <Form.Input label='Company Website' placeholder='Company Website..'/>
                        <div className="center">
                            <Form.Button>Predict</Form.Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}


export default Predict
