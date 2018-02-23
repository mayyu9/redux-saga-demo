import React from 'react';
import { connect } from 'react-redux';

import { fetchDog } from './Actions';

import dogReducer from './reducers';

class DemoContainer extends React.Component {
  constructor(props){
    super(props);
    this.onClick= this.onClick.bind(this);
  }
  onClick(event){
    event.preventDefault();
    this.props.getDog();
  }
  render () {
    //console.log("demo container: "url);
    return (
      <div>
        <button onClick={this.onClick}>Show Dog</button>
          {this.props.loading
            ? <p>Loading...</p>
            : this.props.error
                ? <p>Error, try again</p>
                : <p><img src={this.props.url} alt="dog"/></p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //patientAttendanceData: state.patientAttendanceState.patientAttendance,
  url: state.dogState.url,
  loading: state.dogState.loading,
  error: state.dogState.error,
});

const mapDispatchToProps = (dispatch) => ({
  getDog: () => {
    console.log("mapDispatchToProps - getDog");
    dispatch(fetchDog());
  }
});


export default connect(mapStateToProps,mapDispatchToProps)(DemoContainer);

const reducer = Object.assign({}, { dogState: dogReducer })
export { reducer}
