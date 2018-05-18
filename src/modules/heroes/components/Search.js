import React, { Component } from 'react'
import { View, TextInput, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { search } from '../../../redux/actions/Heroes'
import Styles from './styles/Search'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            term: ''
        }
    }

    search = () => {  
        this.props.search(this.state.term)
    }

    clear = () => {
        this.setState({ term: '' })
        this.props.search('')        
    }

    render() {
        return (    
            <View style={Styles.container}>
                <TouchableHighlight 
                    underlayColor="#fff" 
                    style={Styles.btnSearch} 
                    onPress={() => this.search()}
                >
                    <Icon name="search" size={30} color="#5d5d5d" />
                </TouchableHighlight>

                <View style={Styles.inputSearch}>
                    <TextInput 
                        placeholder='Search Heroes...'
                        underlineColorAndroid='transparent'
                        onChangeText={(term) => this.setState({ term })}
                        style={Styles.input}
                        value={this.state.term}
                    />
                </View>
            
                {this.props.term !== '' || this.state.term !== '' ? 
                <TouchableHighlight 
                    underlayColor="#fff" 
                    style={Styles.btnClear} 
                    onPress={() => this.clear()}
                >
                    <Icon name="clear" size={30} color="#5d5d5d" />
                </TouchableHighlight> : null }
            </View>
        )   
    }
}

const mapStateToProps = (state) => ({
    term: state.heroes.search
})

export default connect(mapStateToProps, { search })(Search)
