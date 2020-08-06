import React from 'react'

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="subject">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="subject">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://github.com/thiagodff.png" alt="Thiago Fernandes"/>
            <div>
              <strong>Thiago Fernandes</strong>
              <span>Geografia</span>
            </div>
          </header>

          <p>
            As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.
            <br/><br/>
            Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default TeacherList
