import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Modal, ScrollView, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  // Lista inicial con tus productos (Bicarbonato, Zanahoria, Lechuga)
  const [productos, setProductos] = useState([
    {
      id: '1',
      nombre: 'Bicarbonato',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non facere, suscipit in quo dolore assumenda fugit tempora.',
      stock: '23',
      precio: '$1.000',
      imagen: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500'
    },
    {
      id: '2',
      nombre: 'Zanahoria',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam nemo voluptatum dolorum officia!',
      stock: '34',
      precio: '$3.000',
      imagen: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500'
    },
    {
      id: '3',
      nombre: 'Lechuga',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam nemo voluptatum dolorum officia!',
      stock: '34',
      precio: '$3.000',
      imagen: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500'
    }
  ]);


  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');
  const [precio, setPrecio] = useState('');


  const agregarProducto = () => {
    if (!nombre || !precio) {
      alert('Por favor ingresa al menos el nombre y el precio del producto.');
      return;
    }

    const nuevoProducto = {
      id: Date.now().toString(), 
      nombre: nombre,
      descripcion: descripcion || 'Sin descripción',
      stock: stock || '0',
      precio: precio,
      imagen: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500' 
    };


    setProductos([...productos, nuevoProducto]);

    setNombre('');
    setDescripcion('');
    setStock('');
    setPrecio('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Cabecera */}
      <View style={styles.cabecera}>
        <Text style={styles.textoCabecera}>LISTADO DE PRODUCTOS</Text>
        <StatusBar style="auto" />
      </View>
      <Pressable style={styles.botonAbrir} onPress={() => setModalVisible(true)}>
        <Text style={styles.textoBoton}>+ Agregar Nuevo Producto</Text>
      </Pressable>

      {/* CONTENEDOR CON SCROLL PARA LA LISTA DE PRODUCTOS */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {productos.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.imagen} />
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
            <Text style={styles.stock}>Stock: {item.stock}</Text>
            <View style={styles.precioContainer}>
              <Text style={styles.precioTexto}>{item.precio}</Text>
            </View>
            <Pressable style={styles.carritoBoton}>
              <Text style={styles.carritoTexto}>Agregar al carrito</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalCenteredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitulo}>Registrar Producto</Text>
            
            <TextInput 
              style={styles.input}
              placeholder='Nombre del producto'
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput 
              style={styles.input}
              placeholder='Descripción'
              value={descripcion}
              onChangeText={setDescripcion}
            />
            <TextInput 
              style={styles.input}
              placeholder='Stock'
              keyboardType='numeric'
              value={stock}
              onChangeText={setStock}
            />
            <TextInput 
              style={styles.input}
              placeholder='Precio (ej. $2.500)'
              value={precio}
              onChangeText={setPrecio}
            />

            <View style={styles.modalBotones}>
              <Pressable style={[styles.btnModal, styles.btnGuardar]} onPress={agregarProducto}>
                <Text style={styles.textoBoton}>Guardar</Text>
              </Pressable>

              <Pressable style={[styles.btnModal, styles.btnCancelar]} onPress={() => setModalVisible(false)}>
                <Text style={styles.textoBoton}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    paddingTop: 40,
  },
  cabecera: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center',
  },
  textoCabecera: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botonAbrir: {
    backgroundColor: 'green',
    padding: 12,
    margin: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 30,
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
  },
  // Estilos del Modal
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  modalBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btnModal: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  btnGuardar: {
    backgroundColor: 'green',
  },
  btnCancelar: {
    backgroundColor: '#e74c3c',
  }
});