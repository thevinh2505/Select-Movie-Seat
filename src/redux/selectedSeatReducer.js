const initialState = {
	selectedSeatList: [],
};
const reducer = (currentState = initialState, action) => {
	switch (action.type) {
		case "UPDATE_SELECTED_SEAT":
			const cloneSelectedSeatList = [...currentState.selectedSeatList];
			const foundSeat = cloneSelectedSeatList.find((item) => {
				return item.seatId === action.payload.seatId;
			});
			if (foundSeat) {
				foundSeat.seatId = action.payload.seatId;
			} else {
				cloneSelectedSeatList.push(action.payload);
			}
			return { ...currentState, selectedSeatList: cloneSelectedSeatList };
		case "DELETE_SELECTED_SEAT":
			const cloneSelectedSeatList2 = [...currentState.selectedSeatList];
			// const foundSeat2 = cloneSelectedSeatList2.find((item) => {
			// 	return item.seatId === action.payload.seatId;
			// });
			cloneSelectedSeatList2.splice(
				
				action.payload.seatId,1
			);
			return {
				...currentState,
				selectedSeatList: cloneSelectedSeatList2,
			};
		default:
			return currentState;
	}
};
export default reducer;
