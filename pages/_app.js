import '../styles/globals.scss'



function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />

    <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link crossOrigin="true" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600;700&display=swap" />
    <link crossOrigin="true" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
    <link crossOrigin="true" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" />
    <link crossOrigin="true" href="https://fonts.googleapis.com/css2?family=Anton&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />


    <div id="modal-root"></div>
  </>
}

export default App