import React, { Component } from 'react'
import {connect} from 'react-redux'
import ChoosenSeat from './ChoosenSeat'
export class TableList extends Component {
  render() {
    return (
      <>
        {this.props.selectedSeatList.map((item, index) => {
							return (
								<ChoosenSeat item={item} index={index}/>
							);
						})}
      </>
    )
  }
}

const mapStateToProps=(state)=>{
    return {selectedSeatList:state.selectedSeatArray.selectedSeatList}
}
export default connect(mapStateToProps)(TableList)