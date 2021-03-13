import {Component} from 'react';
import { connect } from 'react-redux';
import { getProducts } from './actions/ProductAction';
import { Redirect } from 'react-router';
import Products from './viewProductDetail';
import axios from 'axios';

class Home extends Component{

    state = {
        products: []
    }

    componentWillMount() {       
		axios.get('http://localhost:5003/shops')
        .then(res=>{this.setState({products:res.data})});
    }

    render(){
        const { products } =  this.state;
        return !this.props.isAuthenticated ? <Redirect to='/login'></Redirect> : 
        <div>
            <div className="jumbotron">
                {products.map((product, index) => (
                    <Products product={product} key={index}/>
                ))}
            </div>
        </div>
    }
}

const mapStatetoProps = state => ({
    isAuthenticated: state.login.isAuthenticated
});

export default connect(mapStatetoProps, { getProducts })(Home);