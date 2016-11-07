

import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent){

    class Authentication extends Component{
        static contextTypes= {
            router:this.PropTypes.object}
        componentWillMount(){
            if (!this.props.authenticated){
            this.context.router.push('/')}
        }
        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.push('/')
            }
        }
        render() {
            return <ComposedComponent {...this.props}></ComposedComponent>
        }
    }
    function mapStateToProps(state){
        return {authenticated:state.authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}