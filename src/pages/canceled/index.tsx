import React from 'react';
import { FiXCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Canceled = () => {
    return (
        <div id="page">
            <div id="content">
                <FiXCircle color="#b2442e" size="40" />
                <label id="msg">Falha no Cadastro</label>

                <Link to="/create-point">
                    <FiArrowLeft />
                    Voltar para criar o ponto
                </Link>
            </div>
        </div>
    );
}

export default Canceled;