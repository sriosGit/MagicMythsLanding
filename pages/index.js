import Head from 'next/head'
import { motion, MotionConfig } from "framer-motion"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="big-banner">
          <div className="content">

            <video id="background-video" autoplay loop muted>
              <source src="mm_banner.mp4" type="video/mp4" />
            </video>
            <div className="title">
              ÚNETE A LA BATALLA
            </div>
            <div className="link">
            <form method="get" action="Magic Myths v2.0.5.rar">
              <button type="submit">Descargar Magic Myths 2.0</button>
              </form>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="header">
            <div className="title">
              Características
            </div>
          </div>
          <div className="characteristics">
            <div className="box">
              <div className="img-container">
                <img src="first-section-1.png" alt="construction_method" />
              </div>
              <div className="title">
                Un tributo a los clásicos
              </div>
            </div>
            <div className="box">
              <div className="img-container">
              <img src="first-section-2.png" alt="multiplayer" />
              </div>
              <div className="title">
                Multiplayer
              </div>
            </div>
            <div className="box">
              <div className="img-container">
                <img src="image32.png" alt="construction_method" />
              </div>
              <div className="title">
                Mejora continua
              </div>
            </div>
          </div>
          <div className="header">
            <div className="title">
              Novedades
            </div>
          </div>
          <div className="new-things">
            <div className="box">
              <div className="img-container">
                <img src="second-section-2.png" alt="construction_method" />
              </div>
              <div className="title">
                Nuevo sistema de construcción
              </div>
            </div>
            <div className="box">
              <div className="img-container">
              <img src="second-section-1.png" alt="construction_method" />
              </div>
              <div className="title">
                Mapas nuevos y renovados
              </div>
            </div>
            <div className="box">
              <div className="img-container">
              <img src="second-section-3.png" alt="construction_method" />
              </div>
              <div className="title">
                Mejoras visuales
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
      </footer>

      <style jsx>{`
        .big-banner {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Mokoto";
        }
        .big-banner .content .title{
          font-size: 80px;
          color: #fff;
          text-align: center;
          -webkit-animation: glow 2s ease-in-out infinite alternate;
          -moz-animation: glow 2s ease-in-out infinite alternate;
          animation: glow 2s ease-in-out infinite alternate;
        }
        .big-banner .content .link{
          margin-top: 60px;
          display: flex;
          justify-content: center;
        }
        .link button, .link button::after {
          width: 470px;
          height: 86px;
          font-size: 15px;
          font-family: 'Mokoto';
          background: linear-gradient(45deg, transparent 5%, #c50000 5%);
          border: 0;
          color: #fff;
          letter-spacing: 3px;
          line-height: 88px;
          box-shadow: 6px 0px 0px #00E6F6;
          outline: transparent;
          position: relative;
          cursor: pointer;
        }
        
        .link button::after {
          --slice-0: inset(50% 50% 50% 50%);
          --slice-1: inset(80% -6px 0 0);
          --slice-2: inset(50% -6px 30% 0);
          --slice-3: inset(10% -6px 85% 0);
          --slice-4: inset(40% -6px 43% 0);
          --slice-5: inset(80% -6px 5% 0);
          
          content: 'DESCARGAR MAGIC MYTHS 2.0';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
          text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
          clip-path: var(--slice-0);
        }
        
        .link button:hover::after {
          animation: 1s glitch;
          animation-timing-function: steps(2, end);
        }
        
        .contact-us button, .contact-us button::after {
          margin-top: 20px;
          width: 150px;
          height: 60px;
          font-size: 12px;
          font-family: 'Mokoto';
          background: linear-gradient(45deg, transparent 5%, #c50000 5%);
          border: 0;
          color: #fff;
          letter-spacing: 3px;
          line-height: 60px;
          box-shadow: 6px 0px 0px #00E6F6;
          outline: transparent;
          position: relative;
          cursor: pointer;
        }
        
        .contact-us button::after {
          --slice-0: inset(50% 50% 50% 50%);
          --slice-1: inset(80% -6px 0 0);
          --slice-2: inset(50% -6px 30% 0);
          --slice-3: inset(10% -6px 85% 0);
          --slice-4: inset(40% -6px 43% 0);
          --slice-5: inset(80% -6px 5% 0);
          
          content: 'ENVIAR';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
          text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
          clip-path: var(--slice-0);
        }
        
        .contact-us button:hover::after {
          animation: 1s glitch;
          animation-timing-function: steps(2, end);
        }

        @keyframes glitch {
          0% {
            clip-path: var(--slice-1);
            transform: translate(-20px, -10px);
          }
          10% {
            clip-path: var(--slice-3);
            transform: translate(10px, 10px);
          }
          20% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 10px);
          }
          30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 5px);
          }
          40% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 0px);
          }
          50% {
            clip-path: var(--slice-3);
            transform: translate(5px, 0px);
          }
          60% {
            clip-path: var(--slice-4);
            transform: translate(5px, 10px);
          }
          70% {
            clip-path: var(--slice-2);
            transform: translate(-10px, 10px);
          }
          80% {
            clip-path: var(--slice-5);
            transform: translate(20px, -10px);
          }
          90% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 0px);
          }
          100% {
            clip-path: var(--slice-1);
            transform: translate(0);
          }
        }
        @-webkit-keyframes glow {
          from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #53a66f, 0 0 40px #53a66f, 0 0 50px #53a66f, 0 0 60px #53a66f, 0 0 70px #53a66f;
          }
          to {
            text-shadow: 0 0 20px #fff, 0 0 30px #7cd147, 0 0 40px #7cd147, 0 0 50px #7cd147, 0 0 60px #7cd147, 0 0 70px #7cd147, 0 0 80px #7cd147;
          }
        }
        .big-banner .content video {
          width: 99vw;
          height: 100vh;
          object-fit: cover;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: -1;
        }
        .characteristics {
          max-width: 1400px;
          margin-top: 50px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: space-between;
        }
        .characteristics .box .title {
          text-align: center;
        }

        .new-things {
          max-width: 1400px;
          margin-top: 50px;
          margin-bottom: 50px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: space-between;
        }
        .box .img-container img{
          border-radius: 12px;
          width: 350px;
          height: 500px;
        }
        .box .title {
          font-size: 15px;
          margin-top: 4px;
        }
        .new-things  .box .title {
          text-align: center;
        }
        .content .header .title {
          margin-top: 40px;
          font-size: 40px;
          font-family: 'Mokoto';
          text-align: center;
        }
        .contact-us {
          background: black;
          padding: 0 40px;
          min-height: 400px;
          display: flex;
          align-items: center;
          margin-top: 50px;
        }
        .contact-us .content {
          max-width: 540px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .contact-us .content input, .contact-us .content textarea {
          width: 100%;
          height: 45px;
          font-size: 20px;
          margin: 10px 0;
        }
        .contact-us .content .title {
          color: white;
          text-align: center;
          font-size: 35px;
        }
        .contact-us .content button {
          max-width: 270px;
          
        }
        @font-face {
          font-family: 'Mokoto';
          src: url('fonts/mokoto/Mokoto_Glitch.ttf');
          font-weight: 400;
          font-style: normal;
          }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Mokoto";
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
