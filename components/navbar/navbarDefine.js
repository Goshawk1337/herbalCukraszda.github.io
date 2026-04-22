class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
        nav {
          width: 100vw;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color:  #fff;
         }

        ul {
          padding: 0;
          display: flex;
          list-style-type: none;
          margin: 0;
          flex: 1;
          justify-content: center;
        }

        a {
          font-weight: 700;
          margin: 0 25px;
          color: var(--foreground);
          text-decoration: none;
          display: flex;
          align-items: center;
          flex: 1;
           gap: 8px; /* Adds space between icon and text */
        }

        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }
        
        /* Optional: resize icons */
        .lucide {
          width: 18px;
          height: 18px;
        }

        #cake-icon {
          width: 32px;
          height: 32px;
        }

        #Name {
          margin-left: 18px;
          display: flex;
           align-items: center;
          flex-direction: row;
          gap: 5px;
          font-size: 13px;
          font-weight: bold;
          color: var(--primary);
        }
        
        #Name h1 {
          margin: 0;
        }

        button {
          margin-right: 18px;
          color: #fff;
          background-color: var(--primary);
          border: 2px solid #fff;
          padding: 8px 16px;
          cursor: pointer;
          font-weight: thin;
          height: 40px;
          width: 120px;
          border-radius: var(--radius);
        }

        button:hover {
          background-color: #fff;
          color: #0a0a23;
        }
          </style>
          <header>
        <nav>
          <div id="Name">
            <i id="cake-icon" data-lucide="cake"></i>
            <h1>Herbál Cukrászda</h1>
          </div>
          <ul>
          <li><a href="about.html"><i data-lucide="info"></i>Főoldal</a></li>
            <li><a href="about.html"><i data-lucide="info"></i>Rólunk</a></li>
            <li><a href="work.html"><i data-lucide="briefcase"></i>Termékek</a></li>
            <li><a href="contact.html"><i data-lucide="mail"></i>Elérhetőség</a></li>
          </ul>
          <button>Rendelés</button>
        </nav>
          </header>
        `;
    
    // Initialize Lucide icons inside this element
    if (window.lucide) {
        lucide.createIcons({
            root: this
        });
    }
    }
}

customElements.define('navbar-component', Header);