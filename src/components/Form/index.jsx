import React from "react";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Form ({id}) {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    const dados = {
        comentarios:[]
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!name){
            alert('Nome é obrigatório!')
            return
        } if (!email){
            alert ('Email obrigatório!')
            return
        } if (!comment) {
            alert ('Comentário é obrigatório!')
            return
        }
        const comentario = {
            nome:name,
            endereco:email,
            mensagem:comment
        }
        const data = dados.comentarios.push(comentario);
        localStorage.setItem(id, JSON.stringify(data))
        
        
        // var name = document.querySelector('#name')
        // var comment = document.querySelector('#comment')
        // var resultado = document.querySelector('li')

        // function comentarios() {
        //     resultado.innerHTML = (name.value) + (comment.value)
            
        // }
        // comentarios()

    }
    return(
        <center>
            <form onSubmit = {handleSubmit} className="form-comments">
                <div>
                    <div className="all-comments">
                        <h3 className="comments-new">Comentários:</h3>
                        <ol><li></li></ol>  
                    </div>
                    <h3>Deixe um comentário:</h3>
                    <p>Name:</p><input type="text" className="name-form" name="" id="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/><br/>
                    <p>E-mail:</p><input type="email" className="email-form"name="Email" id="" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)}/><br/>
                    <p>Seu comentário:</p><textarea className="comments-form" name="" id="comment" cols="30" rows="10" placeholder="Insira um comentário" value={comment} onChange={(event) => setComment(event.target.value)}></textarea>
                    <div className="col-md-2">
                        <button className="btn-form" type="submit">Enviar</button> 
                    </div>
                    <p><b>Agradecemos seu comentário.<br/> Volte sempre!</b></p>
                    
                
                </div>
            
            </form>
        </center>
        
       )



}

  


export default Form;