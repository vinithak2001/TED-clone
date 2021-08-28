import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        fontFamily: 'SpellcasterRegular',
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const FlatListBasics = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    {
                        key: 'My list',
                        icon: search, page: 'talks'
                    },
                    { key: ' Likes', icon: search, page: 'talks' },
                    { key: 'Downloads', icon: search, page: 'talks' },
                    { key: 'history', icon: search, page: 'talks' },

                ]}
                renderItem={({ item }) => {

                    <TouchableHighlight onPress={() => this.props.navigation.navigate(`${item.page}`)}>
                        <Text >{item.icon}{item.key}</Text>
                    </TouchableHighlight>
                }
                }
            />
        </View>
    );
}

export default FlatListBasics;