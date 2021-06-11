import React, { useContext, useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel, Input,
  Modal, ModalBody, ModalCloseButton, ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const ProofForm = ({ timerId, updateList }) => {
  const { token } = useContext(AuthContext);
  const { request } = useHttp();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({
    percentage: 0,
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const makeProof = async (onClose) => {
    try {
      console.log(form);
      const data = await request(`/proofs`, 'POST', {
        percentage: Number(form.percentage),
        timer_id: timerId,
      }, {
        Authorization: `Bearer ${token}`,
      });
      console.log(data);
      if (data.message) {
        onClose();
        updateList();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Button
        bg={'#2F855A'} color={'#F7FAFC'}
        onClick={onOpen}>Proof</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make a proof</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Percentage</FormLabel>
              <Input name='percentage' ref={initialRef} placeholder='percentage' onChange={changeHandler} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => makeProof(onClose)}>
              Proof
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};