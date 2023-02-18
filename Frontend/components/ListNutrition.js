import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

export default function ListNutrition({
    kcal,
    protein,
    carbo,
    fat,
    sugar
}) {
    return (
        <View>
            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ fontFamily: 'NotoSansThai-Regular'}}
                    title="แคลอรี่ (kcal)"
                    left={(props) => <Avatar.Icon {...props} icon="food" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{kcal}</Text>}
                />
            </View>

            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ fontFamily: 'NotoSansThai-Regular'}}
                    title="โปรตีน (g)"
                    left={(props) => <Avatar.Icon {...props} icon="egg" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{protein}</Text>}
                />
            </View>

            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ fontFamily: 'NotoSansThai-Regular' }}
                    title="คาร์โบไฮเดรต (g)"
                    left={(props) => <Avatar.Icon {...props} icon="hamburger" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{carbo}</Text>}
                />
            </View>

            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ fontFamily: 'NotoSansThai-Regular' }}
                    title="ไขมันทั้งหมด (g)"
                    left={(props) => <Avatar.Icon {...props} icon="water" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{fat}</Text>}
                />
            </View>

            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ fontFamily: 'NotoSansThai-Regular' }}
                    title="น้ำตาล (g)"
                    left={(props) => <Avatar.Icon {...props} icon="spoon-sugar" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{sugar}</Text>}
                />
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 18,
        paddingRight: 18,
    },
    text_details: {
        paddingRight: 10,
        fontSize: 14,
        fontFamily: 'NotoSansThai-Regular'
    }
});