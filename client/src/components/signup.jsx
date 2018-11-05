/*
signup view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

signup is a form
signup view has a Input located at the mid-top center of the view. the placeholder text is email
signup view has a Input located at the center center of the view. the placeholder text is password
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Row, Col, Input, InputGroup, InputGroupText } from "reactstrap"

import {
  sign_in_action,
  sign_in_action,
  sign_up_action
} from "../actions/signupActions.js"

class signupView extends React.Component {
  state = {
    show_loading_indicator: false,
    email: "",
    password: ""
  }

  // sign_in event
  sign_in = value => {
    const { sign_in_action } = this.props
    e.preventDefault()

    let sign_in_data = {}
    sign_in_data.email = this.state.email
    sign_in_data.password = this.state.password

    //Dispatch action mapped to redux
    sign_in_action(sign_in_data)

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }
  // sign_in event
  sign_in = value => {
    const { sign_in_action } = this.props
    e.preventDefault()

    let sign_in_data = {}
    sign_in_data.email = this.state.email
    sign_in_data.password = this.state.password

    //Dispatch action mapped to redux
    sign_in_action(sign_in_data)

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }
  // sign_up event
  sign_up = value => {
    const { sign_up_action } = this.props
    e.preventDefault()

    let sign_up_data = {}
    sign_up_data.email = this.state.email
    sign_up_data.password = this.state.password

    //Dispatch action mapped to redux
    sign_up_action(sign_up_data)

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount = () => {}

  render() {
    const { show_loading_indicator } = this.state
    const { data } = this.props

    return (
      <Row>
        {!data.error_message && show_loading_indicator === true ? (
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        ) : (
          <Col md={12}>
            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group input-white-black"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="email"
                />{" "}
              </InputGroup>{" "}
            </Col>

            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group input-white-black"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  placeholder="password"
                />{" "}
              </InputGroup>{" "}
            </Col>
          </Col>
        )}
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    data: state.signup
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sign_in_action, sign_in_action, sign_up_action },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signupView)
