import React, { useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário</label>
            <input type="text" name="github_username" id="github_username" />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>

          <li className="dev-item">
            <header>
              <img src="http://placehold.it/360x360" alt="Fulano da Silva"/>
              <div className="user-info">
                <strong>Fulano da Silva</strong>
                <span>PHP, Javascript, MySQL</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem esse consectetur provident, blanditiis necessitatibus quis eius ipsam error illum ratione!</p>
            <a href="https://github.com/alande-amorim">Ver perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="http://placehold.it/360x360" alt="Fulano da Silva"/>
              <div className="user-info">
                <strong>Fulano da Silva</strong>
                <span>PHP, Javascript, MySQL</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem esse consectetur provident, blanditiis necessitatibus quis eius ipsam error illum ratione!</p>
            <a href="https://github.com/alande-amorim">Ver perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="http://placehold.it/360x360" alt="Fulano da Silva"/>
              <div className="user-info">
                <strong>Fulano da Silva</strong>
                <span>PHP, Javascript, MySQL</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem esse consectetur provident, blanditiis necessitatibus quis eius ipsam error illum ratione!</p>
            <a href="https://github.com/alande-amorim">Ver perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="http://placehold.it/360x360" alt="Fulano da Silva"/>
              <div className="user-info">
                <strong>Fulano da Silva</strong>
                <span>PHP, Javascript, MySQL</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem esse consectetur provident, blanditiis necessitatibus quis eius ipsam error illum ratione!</p>
            <a href="https://github.com/alande-amorim">Ver perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="http://placehold.it/360x360" alt="Fulano da Silva"/>
              <div className="user-info">
                <strong>Fulano da Silva</strong>
                <span>PHP, Javascript, MySQL</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem esse consectetur provident, blanditiis necessitatibus quis eius ipsam error illum ratione!</p>
            <a href="https://github.com/alande-amorim">Ver perfil no GitHub</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
