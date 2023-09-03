import {useState, useEffect} from 'react'



const App = () => {

  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try
    {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
      setMessage(data.choices[0].message)
    }
    catch (error)
    {
      console.error(error)
    }
  }


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
            <div id="submit" onClick={getMessages}>➤</div>
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
