import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as theme from '../theme';

export default class Block extends Component {
    render() {

        const {
            flex,
            row,
            column,
            center,
            middle,
            color,
            style,
            children,
            ...props
        } = this.props;

        const blockStyles = [
            styles.block,
            flex && { flex },
            flex === false && { flex: 0 }, // reset /disable flex
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            color && styles[color], // predefined styles colors for backgroundColor
            color && !styles[color] && { backgroundColor: color }, //custom backgroundColor
            style, //rewrite predefined styles 
        ];

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
    card: {
        borderRadius: theme.sizes.border,
    },
    center: {
        alignItems: 'center',
    },
    middle: {
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    accent: { backgroundColor: theme.colors.accent, },
    primary: { backgroundColor: theme.colors.accent, },
    secondary: { backgroundColor: theme.colors.accent, },
    tertiary: { backgroundColor: theme.colors.accent, },
    black: { backgroundColor: theme.colors.accent, },
    white: { backgroundColor: theme.colors.accent, },
    gray: { backgroundColor: theme.colors.accent, },
    gray2: { backgroundColor: theme.colors.accent, },

})