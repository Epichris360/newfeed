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

					<div className="col-lg-6 col-md-6 col-sm-8" style={style.div} >
						
						<div class="card" >

							<div class="card-body" style={style.margin} >
								<img style={style.profilePic} src={profileImgUrl} /> 
								<span> Name of Person</span>
								<button class="btn btn-warning pull-right">Subscribe</button>
							</div>
							<br />
							<img class="card-img-top text-center" style={style.img} src="https://lh3.googleusercontent.com/PCYlrBN8dVuBfN1ESH7vQjrKHYZG_GWPXDOl1v3wGulbtthYDxNHdM3YH2Wb1XkjRuU7ZRKYKLTLNHt2HAIv-MS_DxI" alt="Card image cap"/>
							<div class="card-body"  >
								<hr />
								<p class="card-text">Description Goes Here!</p>
								<hr/>
								<i class="fa fa-eye" style={{fontSize:'40px'}} ></i> 
								<span >   30 views</span>
								<hr/>
								<img style={style.profilePic} src={profileImgUrl} /> 
							</div> 
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

const style = {
	div:{
		marginBottom:'5px',
		
		boxShadow: '10px 10px 5px grey',
		borderStyle: 'solid',
		borderColor: 'grey',
    	borderWidth: '1px'
	},
	card:{
		width: '18rem'
	},
	img:{
		maxHeight: '100%',
		maxWidth: '100%',
		marginLeft:'auto',
      	marginRight:'auto'
	},
	profilePic:{
		width:"40px", height:"40px", borderRadius: '50%'
	},
	margin:{
		marginTop:'5px'
	}
}

const profileImgUrl = "https://lh3.googleusercontent.com/lqOYf__cprrWffF0GHa8zHEbdTrFMHVYgBspgD0i1Bc7TO1upOsAZAe85sZFUFPHYicEOEYmqJT7775ADo5cGqMlvy4"