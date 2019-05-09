import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as theme from '../theme';

export default class Block extends Component {
    render() {

        const { style, children, ...props } = this.props;
        const blockStyles = [
            styles.block,
            style, //rewrite predefined styles 
        ]
        
        return (
            <View style={blockStyles} {...props}>
                {children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    center: {
        alignItems: 'center',
    },
    middle: {
        justifyContent: 'center',
    },

})