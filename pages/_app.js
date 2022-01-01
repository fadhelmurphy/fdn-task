import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
  </Head>
  <style jsx global>
{`
body{
  font-family: 'Montserrat', sans-serif;
}
@media only screen and (max-width: 600px) {

.bottomFrame {
  width: 320px; height: 50px; border-radius: 0px;
}
}
@media only screen and (min-width: 600px) {

.bottomFrame {
  width: 468px; height: 60px; border-radius: 0px;
}
}
@media only screen and (min-width: 768px) {
  .topFrame {
    width: 970px; height: 50px; border-radius: 0px;
  }
  .internalCampaign {
    width: 970px; height: 250px; border-radius: 0px;
  }
  .billboard {
    width: 970px; height: 250px; border-radius: 0px;
  }
  .mr2 {
    width: 300px; height: 250px; border-radius: 0px;
  }
  .bottomFrame {
    width: 970px; height: 50px; border-radius: 0px;
  }
  .popular {
    width:23.111%
  }
}
`}
  </style>
  <Component {...pageProps} /></>
}

export default MyApp
