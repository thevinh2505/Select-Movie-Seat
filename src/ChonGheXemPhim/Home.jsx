import React, { Component } from "react";
import { connect } from "react-redux";
import Seat from "./Seat";
import "./Home.css";
import TableList from "./TableList";
export class Home extends Component {
	// handleChange = (e) => {
	// 	console.log(this.props.item);
	// 	const deleteSeat = {
	// 		seatId: this.props.item.seatId,
	// 		price: this.props.item.seatPrice,
	// 	};
	// 	const action = {
	// 		type: "DELETE_SEAT",
	// 		payload: deleteSeat,
	// 	};
	// 	this.props.dispatch(action);
	// 	console.log(this.props.item);
	// };
	render() {
		return (
			<div className="main ">
				<div className="col-left">
					<div className="heading-screen">
						<h1>Movie Seat Selection</h1>
						<h1>Màn Hình </h1>
					</div>
					<table id="seatBlock" />
					<tbody>
						{/* Số thứ tự hàng ghế  */}
						<tr>
							<td className="td-heading"></td>
							<td className="td-heading">1</td>
							<td className="td-heading">2</td>
							<td className="td-heading">3</td>
							<td className="td-heading">4</td>
							<td className="td-heading">5</td>
							<td className="td-heading">6</td>
							<td className="td-heading">7</td>
							<td className="td-heading">8</td>
							<td className="td-heading">9</td>
							<td className="td-heading">10</td>
							<td className="td-heading">11</td>
							<td className="td-heading">12</td>
						</tr>
						{/* {this.props.selectedSeatList.map((item) => {
							if (item.daDat) {
							}
						})} */}
						{}
						{this.props.seatList.map((item, index) => {
							return (
								// 1 hàng ngang dãy ghế
								<tr key={index}>
									<td>{item.hang}</td>
									{/* duyệt mảng in ra 1 hàng ghế  */}
									{item.danhSachGhe.map((item2, index2) => {
										return (
											<td key={index2}>
												<Seat
													item2={item2}
													index2={index2}
												/>
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</div>
				<div className="col-right">
					<h1>Danh Sách Ghế Bạn Chọn</h1>
					<div className="seat-type">
						<div className="booked-seat"></div>
						<span>Ghế Đã Đặt</span>
					</div>
					<div className="seat-type">
						<div className="selected-seat"></div>
						<span>Ghế Đang Chọn</span>
					</div>
					<div className="seat-type">
						<div className="free-seat"></div>
						<span>Ghế Chưa Đặt</span>
					</div>

					<table className="table-info">
						<tr>
							<td>Số Ghế</td>
							<td>Giá</td>
							<td>Hủy</td>
						</tr>
						<TableList />
						{/* {this.props.selectedSeatList.map((item, index) => {
							return (
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
							);
						})} */}

						<tr>
							<td>Tổng Tiền</td>
							<td>
								{this.props.selectedSeatList.reduce(
									(accumulator, currentValue) => {
										return (accumulator +=
											currentValue.seatPrice);
									},
									0
								)}
							</td>
							<td></td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
	updateDSGhe = () => {
		const action = {
			type: "UPDATE_DANH_SACH_GHE",
			payload: [
				{
					hang: "A",
					danhSachGhe: [
						{ soGhe: "A1", gia: 75000, daDat: false },
						{ soGhe: "A2", gia: 75000, daDat: false },
						{ soGhe: "A3", gia: 75000, daDat: false },
						{ soGhe: "A4", gia: 75000, daDat: false },
						{ soGhe: "A5", gia: 75000, daDat: false },
						{ soGhe: "A6", gia: 75000, daDat: false },
						{ soGhe: "A7", gia: 75000, daDat: false },
						{ soGhe: "A8", gia: 75000, daDat: false },
						{ soGhe: "A9", gia: 75000, daDat: false },
						{ soGhe: "A10", gia: 75000, daDat: false },
						{ soGhe: "A11", gia: 0, daDat: true },
						{ soGhe: "A12", gia: 0, daDat: true },
					],
				},
				{
					hang: "B",
					danhSachGhe: [
						{ soGhe: "B1", gia: 75000, daDat: false },
						{ soGhe: "B2", gia: 75000, daDat: false },
						{ soGhe: "B3", gia: 75000, daDat: false },
						{ soGhe: "B4", gia: 75000, daDat: false },
						{ soGhe: "B5", gia: 75000, daDat: false },
						{ soGhe: "B6", gia: 75000, daDat: true },
						{ soGhe: "B7", gia: 75000, daDat: false },
						{ soGhe: "B8", gia: 75000, daDat: false },
						{ soGhe: "B9", gia: 75000, daDat: false },
						{ soGhe: "B10", gia: 75000, daDat: false },
						{ soGhe: "B11", gia: 75000, daDat: false },
						{ soGhe: "B12", gia: 75000, daDat: false },
					],
				},
				{
					hang: "C",
					danhSachGhe: [
						{ soGhe: "C1", gia: 75000, daDat: false },
						{ soGhe: "C2", gia: 75000, daDat: false },
						{ soGhe: "C3", gia: 75000, daDat: false },
						{ soGhe: "C4", gia: 75000, daDat: false },
						{ soGhe: "C5", gia: 75000, daDat: false },
						{ soGhe: "C6", gia: 75000, daDat: false },
						{ soGhe: "C7", gia: 75000, daDat: false },
						{ soGhe: "C8", gia: 75000, daDat: false },
						{ soGhe: "C9", gia: 75000, daDat: false },
						{ soGhe: "C10", gia: 75000, daDat: true },
						{ soGhe: "C11", gia: 75000, daDat: false },
						{ soGhe: "C12", gia: 75000, daDat: false },
					],
				},
				{
					hang: "D",
					danhSachGhe: [
						{ soGhe: "D1", gia: 75000, daDat: true },
						{ soGhe: "D2", gia: 75000, daDat: false },
						{ soGhe: "D3", gia: 75000, daDat: false },
						{ soGhe: "D4", gia: 75000, daDat: false },
						{ soGhe: "D5", gia: 75000, daDat: false },
						{ soGhe: "D6", gia: 75000, daDat: false },
						{ soGhe: "D7", gia: 75000, daDat: false },
						{ soGhe: "D8", gia: 75000, daDat: false },
						{ soGhe: "D9", gia: 75000, daDat: false },
						{ soGhe: "D10", gia: 75000, daDat: false },
						{ soGhe: "D11", gia: 75000, daDat: false },
						{ soGhe: "D12", gia: 75000, daDat: false },
					],
				},
				{
					hang: "E",
					danhSachGhe: [
						{ soGhe: "E1", gia: 75000, daDat: false },
						{ soGhe: "E2", gia: 75000, daDat: false },
						{ soGhe: "E3", gia: 75000, daDat: false },
						{ soGhe: "E4", gia: 75000, daDat: false },
						{ soGhe: "E5", gia: 75000, daDat: false },
						{ soGhe: "E6", gia: 75000, daDat: false },
						{ soGhe: "E7", gia: 75000, daDat: true },
						{ soGhe: "E8", gia: 75000, daDat: true},
						{ soGhe: "E9", gia: 75000, daDat: false },
						{ soGhe: "E10", gia: 75000, daDat: false },
						{ soGhe: "E11", gia: 75000, daDat: false },
						{ soGhe: "E12", gia: 75000, daDat: false },
					],
				},
				{
					hang: "F",
					danhSachGhe: [
						{ soGhe: "F1", gia: 75000, daDat: false },
						{ soGhe: "F2", gia: 75000, daDat: false },
						{ soGhe: "F3", gia: 75000, daDat: false },
						{ soGhe: "F4", gia: 75000, daDat: true },
						{ soGhe: "F5", gia: 75000, daDat: false },
						{ soGhe: "F6", gia: 75000, daDat: false },
						{ soGhe: "F7", gia: 75000, daDat: false },
						{ soGhe: "F8", gia: 75000, daDat: false },
						{ soGhe: "F9", gia: 75000, daDat: false },
						{ soGhe: "F10", gia: 75000, daDat: false },
						{ soGhe: "F11", gia: 75000, daDat: false },
						{ soGhe: "F12", gia: 75000, daDat: false },
					],
				},
				{
					hang: "G",
					danhSachGhe: [
						{ soGhe: "G1", gia: 75000, daDat: false },
						{ soGhe: "G2", gia: 75000, daDat: false },
						{ soGhe: "G3", gia: 75000, daDat: false },
						{ soGhe: "G4", gia: 75000, daDat: false },
						{ soGhe: "G5", gia: 75000, daDat: false },
						{ soGhe: "G6", gia: 75000, daDat: true },
						{ soGhe: "G7", gia: 75000, daDat: false },
						{ soGhe: "G8", gia: 75000, daDat: false },
						{ soGhe: "G9", gia: 75000, daDat: false },
						{ soGhe: "G10", gia: 75000, daDat: false },
						{ soGhe: "G11", gia: 75000, daDat: false },
						{ soGhe: "G12", gia: 75000, daDat: false },
					],
				},
				{
					hang: "H",
					danhSachGhe: [
						{ soGhe: "H1", gia: 75000, daDat: false },
						{ soGhe: "H2", gia: 75000, daDat: false },
						{ soGhe: "H3", gia: 75000, daDat: false },
						{ soGhe: "H4", gia: 75000, daDat: false },
						{ soGhe: "H5", gia: 75000, daDat: false },
						{ soGhe: "H6", gia: 75000, daDat: false },
						{ soGhe: "H7", gia: 75000, daDat: false },
						{ soGhe: "H8", gia: 75000, daDat: false },
						{ soGhe: "H9", gia: 75000, daDat: false },
						{ soGhe: "H10", gia: 75000, daDat: false },
						{ soGhe: "H11", gia: 75000, daDat: false },
						{ soGhe: "H12", gia: 75000, daDat: false },
					],
				},
				{
					hang: "I",
					danhSachGhe: [
						{ soGhe: "I1", gia: 75000, daDat: false },
						{ soGhe: "I2", gia: 75000, daDat: false },
						{ soGhe: "I3", gia: 75000, daDat: false },
						{ soGhe: "I4", gia: 75000, daDat: false },
						{ soGhe: "I5", gia: 75000, daDat: false },
						{ soGhe: "I6", gia: 75000, daDat: false },
						{ soGhe: "I7", gia: 75000, daDat: false },
						{ soGhe: "I8", gia: 75000, daDat: false },
						{ soGhe: "I9", gia: 75000, daDat: false },
						{ soGhe: "I10", gia: 75000, daDat: false },
						{ soGhe: "I11", gia: 75000, daDat: true },
						{ soGhe: "I12", gia: 75000, daDat: true },
					],
				},
				{
					hang: "J",
					danhSachGhe: [
						{ soGhe: "J1", gia: 75000, daDat: false },
						{ soGhe: "J2", gia: 75000, daDat: false },
						{ soGhe: "J3", gia: 75000, daDat: false },
						{ soGhe: "J4", gia: 75000, daDat: false },
						{ soGhe: "J5", gia: 75000, daDat: false },
						{ soGhe: "J6", gia: 75000, daDat: false },
						{ soGhe: "J7", gia: 75000, daDat: false },
						{ soGhe: "J8", gia: 75000, daDat: false },
						{ soGhe: "J9", gia: 75000, daDat: false },
						{ soGhe: "J10", gia: 75000, daDat: false },
						{ soGhe: "J11", gia: 75000, daDat: false },
						{ soGhe: "J12", gia: 75000, daDat: false },
					],
				},
			],
		};
		this.props.dispatch(action);
	};
	componentDidMount() {
		this.updateDSGhe();
	}
}
const mapStateToProps = (state) => {
	return {
		seatList: state.seatListArray.seatList,
		selectedSeatList: state.selectedSeatArray.selectedSeatList,
	};
};

export default connect(mapStateToProps)(Home);
