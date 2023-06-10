import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useState } from 'react';
import Modal from 'react-modal'

const FormTwo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


 
  const [formErrors, setFormErrors] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    passwordConfirm: ''
  });

  const {form,onChangeForm,resetForm} =useForm({
    nome:'',
    sobrenome:'',
    email: '',
    confirmEmail:'',
    password: '',
    passwordConfirm:''
  })
  const validateForm = () => {
    let errors = {};
    if (form.email !== form.confirmEmail) {
      errors.confirmEmail = 'Os emails não correspondem';
    }
    if (form.password !== form.passwordConfirm) {
      errors.passwordConfirm = 'As senhas não correspondem';
    }
    setFormErrors(errors);
  
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if(Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {   
        setFormData([...formData, form]);
        setIsLoading(false);
        resetForm();
      }, 3000);
    }
  };
  
  const handleRemoveItem = (index) => {
    setFormData(formData.filter((item, i) => i !== index));
  };


  const handleOpenModal = (item) => {
    setSelectedItem(formData[item]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
   
    setIsModalOpen(false);
  };



  return (
    <>
       <h2>Faça seu Cadastro em nosso Banco</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome
          <input type="text"
          id='nome'
          name='nome'
          value={form.nome}
          onChange ={onChangeForm}
          required
          />
        </label>     
        <label>Sobrenome
          <input type="text"
          id='sobrenome'
          name='sobrenome'
          value={form.sobrenome}
          onChange ={onChangeForm}
          required
          />
        </label>
        <label>Email
          <input type="Email"
             id='email'
             name='email'
             value={form.email}
             onChange ={onChangeForm}
             required
         placeholder='Digite seu Email'/>
          {formErrors.email && <p>{formErrors.email}</p>}
        </label>
        <label>Confirma Email
          <input type="Email"
            id='confirmEmail'
            name='confirmEmail'
            value={form.confirmEmail}
            onChange ={onChangeForm}
            required
           placeholder='Confirme seu Email'/>
        {formErrors.confirmEmail && <p>{formErrors.confirmEmail}</p>}
        </label>
        <label>Senha
          <input type="password"
           id='password'
           name='password'
           value={form.password}
           onChange ={onChangeForm}
           required
           placeholder='Crie uma senha de 8 caracteres'/>
           {formErrors.password && <p>{formErrors.password}</p>}
        </label>
        <label>Confirma senha
          <input type="password"
            id='passwordConfirm'
            name='passwordConfirm'
            value={form.passwordConfirm}
            onChange ={onChangeForm}
            required 
          placeholder='Confirme sua senha'/>
          {formErrors.passwordConfirm && <p>{formErrors.passwordConfirm}</p>}
        </label>
        {isLoading ? <p>Enviando formulário...</p> : <button
       
     
        >Enviar</button>}
      </form>
      {formData.map((item,index)=>(
          <div key={index} className="ItemsForm">
            <p>Nome: {item.nome}</p>
            <p>Sobrenome: {item.sobrenome}</p>
            <p>Email: {item.email}</p>
            <p>Confirmação do Email: {item.confirmEmail}</p>
            <p>Senha: {item.password}</p>
            <p>Confirmação da senha: {item.passwordConfirm}</p>
            <button onClick={() => handleRemoveItem(index)}>Excluir</button>
            <button onClick={() => handleOpenModal(index)}>Detalhes</button>
          </div>
        ))}
       {selectedItem && (
        <Modal isOpen={isModalOpen} className="Modal">
          <div className='ModalOpen'>
            <button onClick={()=> handleCloseModal()} >Fechar</button>
            <p>Nome: {selectedItem.nome}</p>
            <p>Sobrenome: {selectedItem.sobrenome}</p>
            <p>Email: {selectedItem.email}</p>
            <p>Confirmação do Email: {selectedItem.confirmEmail}</p>
            <p>Senha: {selectedItem.password}</p>
            <p>Confirmação da senha: {selectedItem.passwordConfirm}</p>
          </div>
        </Modal>
      )}
    </>
  )
}

export default FormTwo
