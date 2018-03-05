import React from 'react';
import {Component} from 'react';
// import {connect} from 'react-redux';

// import { } from '../AC/index';
const API_KEY = 'nxONEWYugbpiXQOGp6my5yqBd4wfDiwD';
const DB_NAME = 'sample_shop';
const COLLECTION = 'nikooptschemas';

class App extends Component {

    componentDidMount() {
        fetch(`https://api.mlab.com/api/1/databases/${DB_NAME}/collections/${COLLECTION}?apiKey=${API_KEY}`)
          .then(res => console.log(res));
        //   .then(users => this.setState({ users }));
    }


    render() {
        return (
            <p>hi!</p>
        )
    }
}

// function mapStateToProps(state) {
//     // return {counter: state.count}
// }


// const mapToDispatch = {
//     // dispatchIncrement: increment
//     // increment: increment
// };

// export default connect(mapStateToProps, mapToDispatch )(App)
export default App;
