import Script from "next/script";

const cosmetics = [
  { id: "cowboy", name: "Chapeau de cowboy", price: "$2" },
  { id: "propeller", name: "Casquette à hélice", price: "$4" },
  { id: "crown", name: "Couronne premium", price: "$6" },
  { id: "glasses", name: "Lunettes de trader", price: "$3" },
  { id: "tie", name: "Nœud papillon Wall Street", price: "$5" },
  { id: "halo", name: "Auréole néon", price: "$8" },
];

export default function ChatbotExperience() {
  return (
    <>
      <div className="brand">
        <b>TechCorp</b> · Assistant Financier
      </div>
      <canvas id="scene" />

      <div id="belly-chat" className="hidden">
        <div id="boot" />
        <div id="chat-ui">
          <div className="chat-head" id="chat-head">
            <span className="dot" />
            Phi-3.5 Financial
            <span className="status" id="chat-status">
              En ligne · Phi-3.5 Finance
            </span>
          </div>
          <div className="chat-log" id="chat-log">
            <div className="msg bot">
              Bonjour. Je suis l&apos;assistant financier de TechCorp.
              Posez-moi une question sur la finance, le budget,
              l&apos;investissement ou l&apos;économie.
            </div>
          </div>
          <div className="chat-input">
            <input
              id="chat-text"
              type="text"
              placeholder="Votre question…"
              autoComplete="off"
            />
            <button id="chat-send">Envoyer</button>
          </div>
        </div>
      </div>

      <div className="hint">
        Bouton power : allumer / éteindre · une fois <b>éteint</b> :
        molette pour zoomer, glisser pour le faire tourner (5 tours = surprise)
      </div>

      <button id="to-shop" className="nav-arrow" title="Aller à la boutique">
        Boutique
      </button>
      <button id="to-penalty" className="nav-arrow" title="Jouer au tir au but">
        Tir au but
      </button>
      <button id="to-blackjack" className="nav-arrow" title="Jouer au blackjack">
        Blackjack
      </button>
      <button
        id="to-bank"
        className="nav-arrow hidden"
        title="Retour à la banque"
      >
        Banque
      </button>

      <button id="shop-btn">Boutique</button>
      <div id="shop-panel" className="hidden">
        <div className="shop-head">
          Boutique cosmétique <span id="shop-close">X</span>
        </div>
        <div className="wallet">
          <span>Solde</span>
          <span id="wallet-balance">$0</span>
        </div>

        {cosmetics.map((cosmetic) => (
          <div
            className="shop-item"
            data-cosmetic={cosmetic.id}
            key={cosmetic.id}
          >
            <div className="shop-info">
              <div className="shop-name">{cosmetic.name}</div>
              <div className="shop-price">{cosmetic.price}</div>
            </div>
            <button className="shop-buy" data-buy={cosmetic.id}>
              Acheter
            </button>
          </div>
        ))}
      </div>

      <div id="penalty-panel" className="hidden">
        <div className="penalty-head">
          Tir au but <span id="penalty-close">X</span>
        </div>
        <div className="penalty-score">
          <span>Score</span>
          <span id="penalty-score">0 / 0</span>
        </div>
        <div id="penalty-status" className="penalty-status">
          Clique dans la cage pour tirer.
        </div>
      </div>

      <div id="blackjack-panel" className="hidden">
        <div className="blackjack-head">
          Blackjack <span id="blackjack-close">X</span>
        </div>
        <div className="blackjack-table">
          <div className="blackjack-bankroll">
            <span>Solde</span>
            <strong id="blackjack-balance">$0</strong>
            <label htmlFor="blackjack-bet">Mise</label>
            <input id="blackjack-bet" type="number" min="1" defaultValue="1" />
          </div>
          <div className="blackjack-row dealer">
            <div className="blackjack-label">
              Banque <span id="dealer-score">0</span>
            </div>
            <div id="dealer-hand" className="card-row" />
          </div>
          <div id="blackjack-status" className="blackjack-status">
            Fais 21 sans dépasser.
          </div>
          <div className="blackjack-row player">
            <div className="blackjack-label">
              Joueur <span id="player-score">0</span>
            </div>
            <div id="player-hand" className="card-row" />
          </div>
          <div className="blackjack-actions">
            <button id="blackjack-hit">Carte</button>
            <button id="blackjack-stand">Rester</button>
            <button id="blackjack-new">Miser</button>
          </div>
        </div>
      </div>

      <Script src="/chatbot/app.js" type="module" strategy="afterInteractive" />
    </>
  );
}
