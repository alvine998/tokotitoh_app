import {StyleSheet, Text, View, Modal, Button} from 'react-native';
import React from 'react';
import normalize from 'react-native-normalize';

interface Props {
  modal: any;
  setModal: any;
  children?: any;
}

export default function ModalRN(props: Props) {
  const {modal, setModal, children} = props;
  return (
    <View>
      <Modal
        animationType="slide" // or 'fade' or 'none'
        transparent={false} // makes the modal background transparent
        visible={modal.visible}
        onRequestClose={() => {
          // Required for Android, defines what happens when back button is pressed
          setModal({visible: !modal.visible});
        }}>
        <View style={styles.centeredView}>
          {children}
          {/* <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello, I am a modal!</Text>
            <Button
              title="Hide Modal"
              onPress={() => setModal({visible: false})}
            />
          </View> */}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    padding: normalize(20),
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
