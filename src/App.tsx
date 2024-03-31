import React from "react";
import "./App.css";
import cards from "./data/cardsSml.json";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">Мои проекты:</header>
      <section className="App-section">
        {cards.cardsSml.items.map((card, i) => (
          <Card
            title={card.title}
            date={card.date}
            place={card.place}
            image={card.image}
            href={card.href}
            key={i}
          />
        ))}
      </section>
      <footer>
        <a
          href="https://github.com/funversuta?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Мой Гитхаб
        </a>
      </footer>
    </div>
  );
}

export default App;
