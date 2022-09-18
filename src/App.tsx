import React from 'react';

function App() {
  console.log('truong')
  console.log('tien')
  console.log('nguyen')
  console.log('tuyen')
  return (
    <div className="App">
      <aside className='relative z-[100] w-60 h-screen bg-slate-300'>
        <div className="wrapper">
          <nav className="navbar">
            <div className="navbar-brand"></div>
          </nav>
          <nav className="navbar-main">
            <ul className="navbar-menu">
              <li className="navbar-item">
                <a title="home" href="/">
                  <i className="icon"></i>
                  <i>Home</i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <header  className='relative z-[100] w- h-screen bg-slate-300'>header</header>

      <main>main</main>
    </div>
  );
}

export default App;
