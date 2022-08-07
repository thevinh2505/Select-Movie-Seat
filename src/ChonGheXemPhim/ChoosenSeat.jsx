import React, { Component } from "react";
import { connect } from "react-redux";

export class ChoosenSeat extends Component {
	handleButton = () => {
		const deleteSeat = {
			seatId: this.props.index,
			price: this.props.item.seatPrice,
		};
		const action = {
			type: "DELETE_SELECTED_SEAT",
			payload: deleteSeat,
		};
		this.props.dispatch(action);
		console.log(deleteSeat.seatId);
	};
	render() {
		const { item, index } = this.props;
		return (
			<>
				<tr key={index}>
					<td>{item.seatId}</td>
					<td>{item.seatPrice}</td>
					<td>
						<button
							className="btn btn-danger"
							onClick={this.handleButton}
						>
							X
						</button>
					</td>
				</tr>
			</>
		);
	}
}

export default connect()(ChoosenSeat);
