import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card,Text, ProgressBar } from 'react-native-paper';

export default function ListFood({
    kcal,
    protein,
    carbo,
    fat,
    sugar

}) {
    return (
        <View>
            {/* Information */}
            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ color: "#1A212F" ,fontFamily: 'NotoSansThai-Regular' }}
                    title="แคลอรี่ (kcal)"
                    left={(props) => <Avatar.Icon {...props} icon="food" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{kcal}</Text>}
                />
                <ProgressBar progress={0.5} color='#E2D784' style={styles.progress} />
            </View>

            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ color: "#1A212F",fontFamily: 'NotoSansThai-Regular'  }}
                    title="โปรตีน (g)"
                    left={(props) => <Avatar.Icon {...props} icon="egg" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{protein}</Text>}
                />
                <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />

            </View>

            <View style={styles.container}>

                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ color: "#1A212F",fontFamily: 'NotoSansThai-Regular'  }}
                    title="คาร์โบไฮเดรต (g)"
                    left={(props) => <Avatar.Icon {...props} icon="hamburger" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{carbo}</Text>}
                />
                <ProgressBar progress={0.5} color="#50BFC3" style={styles.progress} />

            </View>

            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ color: "#1A212F" ,fontFamily: 'NotoSansThai-Regular' }}
                    title="ไขมันทั้งหมด (g) "
                    left={(props) => <Avatar.Icon {...props} icon="water" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{fat}</Text>}
                />
                <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />
            </View>

            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ color: "#1A212F" ,fontFamily: 'NotoSansThai-Regular' }}
                    title="น้ำตาล (g) "
                    left={(props) => <Avatar.Icon {...props} icon="spoon-sugar" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>{sugar}</Text>}
                />
                <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 10
    },
    text_details: {
      paddingRight: 10,
      fontSize: 14,
      fontFamily: 'NotoSansThai-Regular' 
    },
    progress: {
      height: 8,
      borderRadius: 8
    }
  
  });