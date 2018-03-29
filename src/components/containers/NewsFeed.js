import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	This container serves primarily as an example of how to execute basic
	user tasks like login, logout, etc. Feel free to re-purpose this componenet 
	for your own project or create your own components using the functions 
	from here as a guide.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

class NewsFeed extends Component {
	constructor(){
		super()
		this.state = {
		}
	}

	render(){
		return (
			<div className="container" >
				<div className="row" >
					<div className="col-lg-3 col-md-3 col-sm-2" ></div>

					<div className="col-lg-6 col-md-6 col-sm-8" >
						<div className="card">
							<img />
						</div>
					</div>

					<div className="col-lg-3 col-md-3 col-sm-2" ></div>
				</div>
			</div>
		)
	}
}

const stateToProps = (state) => {

}

const dispatchToProps = (dispatch) => {

}

export default connect(stateToProps, dispatchToProps)(NewsFeed)