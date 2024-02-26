import './App.css';

function App() {
  return (
    <div className="App">

      <div className='container'>
        <nav className='navbar'>

          <div className='logo'>
            <div className='logo-img'>
              <img src='./logo.png' alt='karigar-logo' />
            </div>
            <div className='logo-name'>
              <span>Kareegar</span>
            </div>
          </div>

          <div className='nav-list'>
            <ul>
              <li ><a href='#' className='active'>Home</a></li>
              <li ><a href='about' >About</a></li>
              <li ><a href='product' >Product</a></li>
              <li ><a href='contact' >Contact</a></li>

            </ul>
          </div>
          <div className='btn'>
            <button className='class-btn'>Login</button>
            <button className='class-btn'>Sign up</button>

          </div>
        </nav>
        <div className='hero-container'>
          <div className='content'>
            <p className='content_para'>Trusted by 1 Million people</p>
            <h1 className='content_h1'>Find your <span className='content_h1_span'>Kareegar</span></h1>
            <h1 className='content_easyFast'>Easy & Fast</h1>
            <p className='content_message'>A Platform where you can get your desire Kareegar without any fatigue</p>
          </div>
            <form className='email-form'>

            <input className='email' type='email' placeholder='Enter your email' />
            <button className='btn-submit'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default App;
