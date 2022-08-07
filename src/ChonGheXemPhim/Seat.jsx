import React, { Component } from "react";
import { connect } from "react-redux";
export class Seat extends Component {
	handleChange = (e) => {
		const selectedSeat = {
			seatId: e.target.value,
			seatPrice: this.props.item2.gia,
		};
		const action = {
			type: "UPDATE_SELECTED_SEAT",
			payload: selectedSeat,
		};
		this.props.dispatch(action);
		console.log(selectedSeat);
	};
	render() {
		const { item2 } = this.props;
		if(item2.daDat===false){
			return (
				<div>
					<input
						onChange={this.handleChange}
						type="checkbox"
						className="seats"
						value={item2.soGhe}
					/>
				</div>
			);
		}
		else{
			return (
				<div>
					<input
						
						type="checkbox"
						className="booked-seats"
						value={item2.soGhe}
					/>
				</div>
			);
		}
		
	}
}

const mapStateToProps = (state) => {
	return {
		seatList: state.seatListArray.seatList,
	};
};
export default connect(mapStateToProps)(Seat);
