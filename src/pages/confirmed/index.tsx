import React from 'react';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import './style.css';

const Confirmed = () => {
    return (
        <div id="page">
            <div id="content">
                <FiCheckCircle color="#34CB79" size="40" />
                <label id="msg">Cadastro concluído</label>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </div>
        </div>
    );
};

export default Confirmed;