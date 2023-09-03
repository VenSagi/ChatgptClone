
const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>howdy</li>
        </ul>
        <nav>
          <p>ChatGPT Clone by Venkat Sagi</p>
        </nav>
      </section>

      <section className="main">
        <h1>CloneGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit">➤</div>
          </div>
          <p className="info">
            Free Research Preview. ChatGPT may produce 
            inaccurate information about people, places, or facts. ChatGPT 
            August 3 Version
          </p>
        </div>
      </section>
    </div>
  )
}

export default App;
