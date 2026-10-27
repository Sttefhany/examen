import { Pressable, StyleSheet, Text, View, Image } from "react-native";

export default function Productos() {
    return(
        <View style={styles.productosContainer}>

            {/* Producto 1 */}
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500' }}
                    style={styles.imagen}
                /> 
                <Text style={styles.nombre}>Acetaminofen</Text>
                <Text style={styles.descripcion}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non facere, suscipit in quo dolore assumenda fugit tempora.</Text>
                <Text style={styles.stock}>Stock: 23</Text>
                <View style={styles.precioContainer}>
                    <Text style={styles.precioTexto}>$1.000</Text>
                </View>
                <Pressable style={styles.carritoBoton}>
                    <Text style={styles.carritoTexto}>Agregar al carrito</Text>
                </Pressable>
            </View>

            {/* Producto 2 */}
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500' }}
                    style={styles.imagen}
                />
                <Text style={styles.nombre}>Zanahoria</Text>
                <Text style={styles.descripcion}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam nemo voluptatum dolorum officia!</Text>
                <Text style={styles.stock}>Stock: 34</Text>
                <View style={styles.precioContainer}>
                    <Text style={styles.precioTexto}>$3.000</Text>
                </View>
                <Pressable style={styles.carritoBoton}>
                    <Text style={styles.carritoTexto}>Agregar al carrito</Text>
                </Pressable>
            </View>

            {/* Producto 3 */}
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500' }}
                    style={styles.imagen}
                />
                <Text style={styles.nombre}>Lechuga</Text>
                <Text style={styles.descripcion}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam nemo voluptatum dolorum officia!</Text>
                <Text style={styles.stock}>Stock: 34</Text>
                <View style={styles.precioContainer}>
                    <Text style={styles.precioTexto}>$3.000</Text>
                </View>
                <Pressable style={styles.carritoBoton}>
                    <Text style={styles.carritoTexto}>Agregar al carrito</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productosContainer: {
        flexDirection: 'column',
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    imagen: {
        width: '100%',
        height: 150,
        borderRadius: 6,
        marginBottom: 10,
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    descripcion: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    stock: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    precioContainer: {
        marginBottom: 10,
    },
    precioTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
    carritoBoton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    carritoTexto: {
        color: '#fff',
        fontWeight: 'bold',
    }
});