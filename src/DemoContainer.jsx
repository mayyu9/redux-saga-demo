import React from 'react';
import { connect } from 'react-redux';

import { fetchDog } from './Actions';

import dogReducer from './reducers';

class DemoContainer extends React.Component {
  constructor(props){
    super(props);
    this.onClick= this.onClick.bind(this); /*we have to bind the click action so that scope of this is available*/
  }
  onClick(event){
    event.preventDefault();
    this.props.getDog();
  }
  render () {
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

/* when the store updated with new value, we read those values using mapStateToProps*/
const mapStateToProps = state => ({
  url: state.dogState.url,
  loading: state.dogState.loading,
  error: state.dogState.error,
});

/* we dispatch actions using mapDispatchToProps*/
const mapDispatchToProps = (dispatch) => ({
  getDog: () => {
    dispatch(fetchDog());
  }
});


export default connect(mapStateToProps,mapDispatchToProps)(DemoContainer);

/*creating reducer object using object.assign */
const reducer = Object.assign({}, { dogState: dogReducer })
export { reducer}
