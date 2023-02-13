import React from "react"
import Head from "next/head"

import Link from "next/link";

const Home = () => {
 
  return (
    <div>
      <Head>
        <title>FinWise</title>
        <link rel="icon" href="/logu.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
      </Head>
      
      <div class='container'>
        <div class='text'>
          <h1 class='main-heading'>Learn <br/>interactively.</h1>
          <p class='sub-text'><span class='project-name'>FinWise</span> is a platform that<br/>empowers you with financial<br/>knowledge and assists you in<br/>reaching your financial goals.</p>
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
              Financial literacy is a critical life skill that enables individuals to make informed decisions about their finances and investments. Our financial literacy web app is designed to help individuals of all ages learn about money management, budgeting, saving, investing, and other crucial financial topics. 
            </p>
            <p>
              It provides a comprehensive and user-friendly interface with interactive tools and resources to help users gain a deeper understanding.
            </p>
            <p>
              Learn everything enjoyabily and effectively through engaging and interactive lessons, quizzes, and magazines. Whether you are a student, a working professional, or a retiree, our platform provides the knowledge and tools you need to take control of your financial future and achieve your financial goals.  
            </p>
            <Link href='/Learn'>
            <button primary="true" class='info_button'>
              Learn
            </button>  
            </Link>      
          </div>
          <img class='learn_image' src='/learn.png' alt='tree gif'/>
        </div>

        <div class='infocontainer'>
          <img class='ai_image' src='/ask.png' alt='tree gif'/>
          <div class='ai'>
              <h2>Ask Anything</h2>
              <p>
                Wise AI is an AI-based innovative tool that can answer all of your questions related to finance. This tool uses advanced natural language processing and machine learning algorithms to understand and respond to your queries. 
              </p>
              <p>
                Whether you need help with budgeting, saving, investing, or managing debt, F'ed AI can provide you with relevant information and advice. It is a convenient and accessible way to learn about finance, as you can access F'ed AI from anywhere, at any time, simply by sending a message. 
              </p>
              <p>  
                With its ability to understand and respond to a wide range of financial questions, this AI-based tool is a valuable resource for anyone looking to improve their financial literacy. 
              </p>
              <Link href='/finchat'>
              <button primary="true" class='info_button'>
                Ask
              </button>    
              </Link>    
            </div> 
        </div>

        <div class='infocontainer'>
          <div class='contact'>
            <h2>FAQ</h2>
            <p>
              Welcome to our FAQ section! Here, you will find answers to the most commonly asked questions about our products and services. This section is designed to provide quick and convenient support to our valued customers. 
            </p>
            <p>
              If you're unable to find the answer to your question, don't hesitate to contact us through our support channels. We're always here to help and ensure that your experience with us is a positive one.  
            </p>

<Link href='/Faq'>
            <button primary="true" class='info_button'>
              FAQ
            </button>  
            </Link>      
          </div>
          <img class='faq_image' src='/faq.png' alt='tree gif'/>
        </div>

        <div class='infocontainer'>
          <img class='contact_image' src='/contact.png' alt='tree gif'/>
          <div class='contact'>
              <h2>Reach Us</h2>
              <p>
                Thank you for visiting our website! We value your feedback and questions, and are here to assist you in any way we can. 
              </p>
              <p>
                If you need to get in touch with us, please don't hesitate to use the contact form on this page or send an <a class='email-link' href = "mailto: abc@example.com">email</a>. 
              </p>
              <p>
                Our team will respond to you as soon as possible. For the quickest assistance, please include as much detail as possible in your message. We look forward to hearing from you! 
              </p>
              <button primary="true" class='info_button'>
                Contact
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
