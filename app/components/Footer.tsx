import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
        <aside>
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src="/logo.png"/>
                </div>
            </div>
            <p>
            Hümsan Makine Otomasyon Sanayi Ticaret Limited Şirketi
            <br />
            Modern tarım ve hayvancılığın geleceği için yüksek kaliteli makineler ve yenilikçi çözümler
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Sosyal Medya</h6>
            <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/humsanmakina" target="_blank" rel="noopener noreferrer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
            </a>
            <a href="https://instagram.com/humsanmakina" target="_blank" rel="noopener noreferrer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                    d="M7.5 1C3.36 1 0 4.36 0 8.5v7C0 19.64 3.36 23 7.5 23h7c4.14 0 7.5-3.36 7.5-7.5v-7C22 4.36 18.64 1 14.5 1h-7zM19 8.5v7c0 2.5-2 4.5-4.5 4.5h-7C5 20 3 18 3 15.5v-7C3 6 5 4 7.5 4h7C17 4 19 6 19 8.5zm-7 2a3.5 3.5 0 1 0 .001 7.001A3.5 3.5 0 0 0 12 10.5zm4.5-6.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 1 0 0-2.5z"></path>
                </svg>
            </a>
          <a href="https://facebook.com/humsanmakina" target="_blank" rel="noopener noreferrer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
            </a>
            </div>
        </nav>
    </footer>
  )
}

export default Footer;
