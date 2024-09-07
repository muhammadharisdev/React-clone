/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Style from './style.module.css'
function Home () {
  return (
    <><section className={Style.hero}>
                   <img href="#" src="/images/logo.png" alt="logo" />
          <h1>React</h1>
          <p>The library for web and native user interfaces</p>
          <div className={Style.btns}>
              <button className={Style.btnO}>Learn React</button>
              <button className={Style.btnT}>API Reference</button>
          </div>
      </section>
      
      <section className={Style.section1}>
              <h1>Create user interfaces from components</h1>
              <p>
                  React lets you build user interfaces out of individual pieces called
                  components. Create your own React components like
                  <span className={Style.highlight}>Thumbnail</span>,
                  <span className={Style.highlight}>LikeButton</span>, and
                  <span className={Style.highlight}>Video</span>. Then combine them into entire
                  screens, pages, and apps.
              </p>
              <div className={Style.box}>
                  <img src="/images/input1.png" alt="code image" />
                  <img src="/images/output1.png" alt="output image" />
              </div>
              <p className="endp">
                  This markup syntax is called JSX. It is a JavaScript syntax extension
                  popularized by React. Putting JSX markup close to related rendering
                  logic makes React components easy to create, maintain, and delete.
              </p>
          </section>
          
          <section className={Style.section2}>
              <h1>Add interactivity wherever you need it</h1>
              <p>
                  React components receive data and return what should appear on the
                  screen. You can pass them new data in response to an interaction, like
                  when the user types into an input. React will then update the screen to
                  match the new data.
              </p>
              <div className={Style.box}>
                  <img src="/images/input2.png" alt="code image" />
                  <img src="/images/output2.png" alt="output image" />
              </div>
              <p className="endp">
                  You don’t have to build your whole page in React. Add React to your
                  existing HTML page, and render interactive React components anywhere on
                  it.
              </p>
              <div className={Style.btns}>
              <button className={Style.btnT}>Add React to your page</button>
          </div>
       
          </section><section className={Style.Section3}>
              <h1>Go full-stack with a framework</h1>
              <p>
                  React is a library. It lets you put components together, but it doesn’t
                  prescribe how to do routing and data fetching. To build an entire app
                  with React, we recommend a full-stack React framework like
                  <a href="#">Next.js</a> or <a href="#">Remix</a>.
              </p>
              <div className={Style.box}>
                  <img src="/images/output2.png" alt="code image" />
                  <img src="/images/input2.png" alt="output image" />
              </div>
              <p className="endp">
                  You don’t have to build your whole page in React. Add React to your
                  existing HTML page, and render interactive React components anywhere on
                  it.
              </p>
              <div className={Style.btns}>
              <button className={Style.btnT}>Add React to your page</button>
          </div>
          </section>
          
          <section className={Style.UsePlatform}>
              <h1>Use the best from every platform</h1>
              <p>
                  People love web and native apps for different reasons. React lets you
                  build both web apps and native apps using the same skills. It leans upon
                  each platform’s unique strengths to let your interfaces feel just right
                  on every platform.
              </p>
              <div className={Style.box}>
                  <img src="images/output1.png" alt="code image" />
                  <img src="images/input1.png" alt="output image" />
              </div>
              <p className="endp">
                  With React, you can be a web and a native developer. Your team can ship
                  to many platforms without sacrificing the user experience. Your
                  organization can bridge the platform silos, and form teams that own
                  entire features end-to-end.
              </p>
              <div className={Style.btns}>
              <button className={Style.btnT}>Add React to your page</button>
          </div>
          </section><section className={Style.JoinCommunity}>
              <h1>Join a community of millions</h1>
              <p>
                  You’re not alone. Two million developers from all over the world visit
                  the React docs every month. React is something that people and teams can
                  agree on.
              </p>
              <div className={Style.carousel1}>
                  <div className={Style.carousel2}>
                      <div className={Style.boximgs}>
                          <img src="/images/1.webp" alt="code image" />
                          <img src="/images/2.webp" alt="output image" />
                          <img src="/images/3.webp" alt="output image" />
                          <img src="/images/3.webp" alt="output image" />
                          <img src="/images/3.webp" alt="output image" />
                          <img src="/images/2.webp" alt="output image" />
                          <img src="/images/3.webp" alt="output image" />
                          <img src="/images/1.webp" alt="output image" />
                          <img src="/images/2.webp" alt="output image" />
                      </div>
                  </div>
              </div>
              <p className="endp">
                  This is why React is more than a library, an architecture, or even an
                  ecosystem. React is a community. It’s a place where you can ask for
                  help, find opportunities, and meet new friends. You will meet both
                  developers and designers, beginners and experts, researchers and
                  artists, teachers and students. Our backgrounds may be very different,
                  but React lets us all create user interfaces together.
              </p>
              <div className={Style.btns}>
              <button className={Style.btnT}>Add React to your page</button>
          </div>
              <div className={Style.reactxyz}>
                  <img src="/images/logo.png" alt="ReactX" />
                  <h1>
                      Welcome to the<br />
                      React community
                  </h1>
                  <button>Get Started</button>
              </div>
          </section></>
)
}

export default Home;