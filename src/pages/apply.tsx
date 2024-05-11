import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Apply(): JSX.Element {
  const [showOther, setShowOther] = useState(false);

  const handleOptionChange = (event) => {
    setShowOther(event.target.value === 'other');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Отправка данных формы
    console.log(formData);
  };

  return (
    <Layout
      title="Анкета для доступа на сервер"
      description="Заполните анкету, получите доступ, играйте! Присоединяйтесь к дружному сообществу проекта Hardshard."
    >
      <div className="padding-top--lg padding-bottom--lg text--center">
        <h1>Анкета для доступа на сервер Hardshard</h1>
        <p>Как правило заявки обрабатываются в течение дня.</p>
        <p>Если вам долго не отвечают после отправки анкеты — напишите любому администратору в <a href="https://t.me/hardshardchat" target="_blank">Telegram</a> или <a href="https://discord.com/invite/2tHYZcJYR3" target="_blank">Discord</a>.</p>
      </div>
      <main>
        <div className="container">
          <form onSubmit={handleSubmit} className="apply-form margin-top--lg margin-bottom--lg">
            <div className="form-section">
              <label htmlFor="nickname">Ваш никнейм в Minecraft</label>
              <input type="text" id="nickname" name="nickname" required />
            </div>
            <div className="form-section">
              <label htmlFor="age">Ваш возраст</label>
              <input type="text" id="age" name="age" required />
            </div>
            <div className="form-section">
              <label>Откуда вы узнали о сервере?</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="how"
                    value="hotMc"
                    onChange={handleOptionChange}
                    required
                  />
                  Мониторинг hotMC
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="how"
                    value="minecraftRating"
                    onChange={handleOptionChange}
                    required
                  />
                  Мониторинг MinecraftRating
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="how"
                    value="frends"
                    onChange={handleOptionChange}
                    required
                  />
                  Рекомендация знакомых
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="how"
                    value="telegram"
                    onChange={handleOptionChange}
                    required
                  />
                  Канал Telegram
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="how"
                    value="vk"
                    onChange={handleOptionChange}
                    required
                  />
                  Группа ВКонтакте
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="how"
                    value="other"
                    onChange={handleOptionChange}
                    required
                  />
                  Другое
                </label>
                {showOther && (
                  <input
                    type="text"
                    id="otherOption"
                    name="otherOption"
                    placeholder="Укажите другой способ"
                    required
                  />
                )}
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="minecraftExperience">Как давно вы играете в Minecraft?</label>
              <input type="text" id="minecraftExperience" name="minecraftExperience" required />
            </div>
            <div className="form-section">
              <label htmlFor="plans">Что вы планируете делать на HardShard?</label>
              <p className="hint">Постарайтесь дать развернутый ответ.</p>
              <textarea id="plans" name="plans" required />
            </div>
            <div className="form-section">
              <label htmlFor="code">Введите пароль из правил:</label>
              <p className="hint">Прочитайте <a href="/docs/rules">правила</a> и найдите в них пароль.</p>
              <input type="text" id="code" name="code" required />
            </div>
            <div className="form-section">
              <label htmlFor="contacts">Как с вами связаться?</label>
              <p className="hint">Укажите ваш Telegram и/или Discord.</p>
              <input type="text" id="contacts" name="contacts" required />
            </div>
            <div className="form-section">
              <label htmlFor="adequacy">Что вы понимаете под термином «адекватность»?</label>
              <textarea id="adequacy" name="adequacy" required />
            </div>
            <div>
              <button type="submit" className="button button--primary">Отправить</button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}
