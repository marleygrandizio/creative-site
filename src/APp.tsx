import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'

function App() {
  return (
    <div id="top" className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <section id="the-design" className="editorial-section design-section">
          <div className="section-copy">
            <p className="eyebrow">The design</p>
            <h2>A sunset state of mind.</h2>
            <p>The Google Island Sunset Tee brings a little pink-sky energy to your everyday rotation. Easy to wear, and made to stand out in its own simple way.</p>
          </div>
          <img
            className="product-photo"
            src={`${import.meta.env.BASE_URL}google-island-sunset-tee.webp`}
            alt="Google Sunset Pink Tee, shown from the front"
            width="1500"
            height="1500"
          />
        </section>

        <section id="the-details" className="editorial-section details-section">
          <p className="eyebrow">The details</p>
          <h2>One tee. A whole new mood.</h2>
          <p className="details-intro">A familiar everyday staple, with a sunset-inspired point of view.</p>
          <div className="detail-rule" />
          <div className="detail-labels">
            <span>Google</span>
            <span>Island Sunset</span>
            <span>Pink Tee</span>
          </div>
        </section>

        <section id="about" className="about-section">
          <p className="eyebrow">A brighter everyday</p>
          <h2>Catch the feeling.</h2>
          <a className="pill-button about-button" href="#top">Back to the top <span aria-hidden="true">↑</span></a>
        </section>
      </main>
    </div>
  )
}

export default App
