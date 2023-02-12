import React from "react"
import Head from "next/head"
import { useState,useEffect } from "react";



// const LoadingAnimation = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }, []);

//   return (
//     <div style={{ display: loading ? "block" : "none" }} className="bg-cover h-screen w-screen my-auto mx-auto place-content-center mt-56">
//       <img src="/giphy.gif" alt="Loading animation" />
//     </div>
//   );
// };


const Home = () => {
 
  return (
    <div>
      <Head>
        <title>Get F'ed</title>
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
      </Head>
      
      <div class='container'>
        <div class='text'>
          <h1 class='main-heading'>Learn <br/>interactively.</h1>
          <p class='sub-text'><span class='project-name'>Get F'ed</span> is a platform that<br/>empowers you with financial<br/>knowledge and assists you in<br/>reaching your financial goals.</p>
          <button type="button" class='main-button'>Start Exploring</button>

        </div>

        <div class='image'>
          <img src='/giphy3.gif' alt='image here'/>
        </div>

      </div>

      <div class='infosection'>
        <div class='infocontainer'>
          <div class='learn'>
            <h2>Learn Everything</h2>
            <p>
              "I think we showed many good things, but still, we have a lot to improve," Martinez said after Wednesday night’s victory. "It's a good result, I think we controlled the game today. In training, we [him and Lindelof] work with each other and I think we're doing a really good job."  
            </p>
            <p>
              Lindelof is unlikely to be starting regularly for United should both Varane and Martinez be fit and available, but the former Benfica player has done his chances no harm. The relationship shared by the two first-choice central defenders off the pitch also bodes well for United.
            </p>
            <p>
              Former United defender Rio Ferdinand was immediately impressed by their connection, describing them as “almost like the perfect couple”. They have established themselves as fan favourites at Old Trafford this season
            </p>
            <button primary="true" class='info_button'>
              Learn
            </button>        
          </div>
          <img class='learn_image' src='/learn.png' alt='tree gif'/>
        </div>

        <div class='infocontainer'>
          <img class='ai_image' src='/ask.png' alt='tree gif'/>
          <div class='ai'>
              <h2>Ask Anything</h2>
              <p>
                Harry Maguire, Aaron Wan-Bissaka and Scott McTominay will not leave Manchester United this month; Wan-Bissaka has impressed manager Erik ten Hag with his performances recently; United to consider loan offers for forwards Anthony Elanga and Facundo Pellistri  
              </p>
              <p>
                Chelsea’s policy of dishing out long-term contracts to new signings, which UEFA want to outlaw, has also left them in a strong position with regards to Financial Fair Play rules.
              </p>
              <p>
                Despite the prospect of being sold in the near future, United have to tread more carefully to navigate those restrictions, largely due to over-spending on signings who have flopped in previous windows.
              </p>
              <button primary="true" class='info_button'>
                Ask
              </button>        
            </div> 
        </div>



      </div>

      <div id="newsletter-container">
        <h2 id='newsletter-heading'>Stay Informed</h2>
        <h2 id='newsletter-subscribe'>Subscribe to Our Newsletter</h2>
        <p>Stay up-to-date with the latest news and offers from our website</p>
        <form id="newsletter-form">
          <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
          <input type="submit" value="Subscribe"/>
        </form>
      </div>


        <footer class='bottom-container'>
          <div class="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
          <div class="social-media">
            <a href="https://www.facebook.com/" target="_blank">
              <i class="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <i class="fa fa-twitter-square"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
            {/* <p class="copyright">© 2023 Get F'ed.</p> */}
          </div>
        </footer>

    </div>
  )
}

export default Home;
