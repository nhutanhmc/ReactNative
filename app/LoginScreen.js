
import { ScrollView, Text, StyleSheet, View, Image} from 'react-native';  

export default function LoginScreen() {  
    return (  
        <ScrollView style={styles.container}>  
            <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 2,
          }}>
                <Image 
                    source={require('@/assets/images/440928482_847617570509764_3211127870211822018_n.png')}
                    style={styles.logo} 
                />
                <Text style={styles.headerText}> Little Lemon</Text>  
            </View>
        </ScrollView>  
    );  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,    
    },
    rowContainer: {
        flexDirection: 'row', // Sắp xếp các thành phần theo hàng ngang
        alignItems: 'center', // Căn chỉnh các thành phần vào trung tâm theo chiều dọc
        padding: 20,
    },  
    logo: {
        width: 50, // Độ rộng của ảnh
        height: 50, // Độ cao của ảnh
        marginRight: 20, // Khoảng cách giữa ảnh và văn bản
    },
    headerText: {  
        fontSize: 30,  
        color: '#EDEFEE',  
    },  
    regularText: {  
        fontSize: 24,  
        padding: 20,  
        marginVertical: 8,  
        color: '#EDEFEE',  
        textAlign: 'center',  
    },  
});