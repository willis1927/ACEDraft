
import { Navbar, Section, Card } from './components'
import './App.css'
import BackgroundEffect from './BackgroundEffect'

function App() {
  return (
    <>
      <BackgroundEffect />
      <Navbar />
      
      <main style={{ marginTop: '100px' }}>
        <h1 className="pageTitle">ACE Podcast Nation</h1>
        {/* Events Section */}
        <Section
          id="events"
          title="Events"
          subtitle="Stay updated with our latest podcast events and episodes"
          icon="🎙️"
        >
          <div className="grid">
            <Card
              title="Upcoming Live Recording"
              description="Join us for our next live recording session where we discuss the latest trends in sports and entertainment."
              image="📹"
              cta={{ text: 'Learn More', href: '#' }}
            />
            <Card
              title="Special Guest Episode"
              description="Featuring industry experts and influencers sharing their insights and experiences."
              image="⭐"
              cta={{ text: 'Register', href: '#' }}
            />
            <Card
              title="Monthly Meetup"
              description="Connect with fellow podcast enthusiasts and network with our community members."
              image="👥"
              cta={{ text: 'Join Us', href: '#' }}
            />
            <Card
              title="Upcoming Live Recording"
              description="Join us for our next live recording session where we discuss the latest trends in sports and entertainment."
              image="📹"
              cta={{ text: 'Learn More', href: '#' }}
            />
            <Card
              title="Upcoming Live Recording"
              description="Join us for our next live recording session where we discuss the latest trends in sports and entertainment."
              image="📹"
              cta={{ text: 'Learn More', href: '#' }}
            />
            <Card
              title="Upcoming Live Recording"
              description="Join us for our next live recording session where we discuss the latest trends in sports and entertainment."
              image="📹"
              cta={{ text: 'Learn More', href: '#' }}
            />
          </div>
        </Section>

        {/* Sports Section */}
        <Section
          id="sports"
          title="Sports"
          subtitle="Your destination for sports commentary and analysis"
          icon="⚽"
        >
          <div className="grid">
            <Card
              title="Weekly Sports Roundup"
              description="Comprehensive coverage of all major sports events happening around the world."
              image="🏆"
              cta={{ text: 'Listen Now', href: '#' }}
            />
            <Card
              title="Athlete Interviews"
              description="Exclusive conversations with professional athletes discussing their journey and achievements."
              image="🎖️"
              cta={{ text: 'Explore', href: '#' }}
            />
            <Card
              title="Fantasy League Talk"
              description="Tips, strategies, and discussions about fantasy sports leagues and competitions."
              image="📊"
              cta={{ text: 'Discover', href: '#' }}
            />
          </div>
        </Section>

        {/* Channels Section */}
        <Section
          id="channels"
          title="Channels"
          subtitle="Explore our diverse podcast channels"
          icon="📻"
        >
          <div className="grid">
            <Card
              title="Main Channel"
              description="Our flagship channel featuring in-depth discussions and interviews."
              image="🎭"
              cta={{ text: 'Subscribe', href: '#' }}
            />
            <Card
              title="News & Updates"
              description="Daily briefings and news updates covering current events."
              image="📰"
              cta={{ text: 'Follow', href: '#' }}
            />
            <Card
              title="Deep Dives"
              description="Long-form content exploring topics in comprehensive detail."
              image="🔍"
              cta={{ text: 'Browse', href: '#' }}
            />
            <Card
              title="Community Series"
              description="Stories and voices from our listener community."
              image="🤝"
              cta={{ text: 'Participate', href: '#' }}
            />
          </div>
        </Section>

        {/* Live Streaming Section */}
        <Section
          id="livestream"
          title="Live Streaming"
          subtitle="Tune in to our live shows"
          icon="📡"
        >
          <div className="grid">
            <Card
              title="Daily Live Stream"
              description="Watch us live every weekday at 6 PM. Interactive sessions with our hosts and audience."
              image="🔴"
              cta={{ text: 'Watch Live', href: '#' }}
            />
            <Card
              title="Weekend Special"
              description="Extended live sessions on weekends featuring special guests and community Q&A."
              image="🌟"
              cta={{ text: 'Set Reminder', href: '#' }}
            />
            <Card
              title="Replay Archive"
              description="Catch up on all past live streams and special events."
              image="🎬"
              cta={{ text: 'Watch Replays', href: '#' }}
            />
          </div>
        </Section>

        {/* About Section */}
        <Section
          id="about"
          title="About ACE Podcast Nation"
          subtitle="Learn about our mission and team"
          icon="ℹ️"
        >
          <div className="infoContent">
            <p>
              ACE Podcast Nation is your premier destination for podcasts covering sports, entertainment, culture, and current events. 
              We bring together diverse voices and perspectives to create engaging, thought-provoking content.
            </p>
            <div className="grid">
              <Card
                title="Our Mission"
                description="To inspire, inform, and entertain through high-quality podcast content that connects people."
              />
              <Card
                title="Our Team"
                description="A passionate group of podcast enthusiasts, journalists, and content creators."
              />
              <Card
                title="Our Community"
                description="Join thousands of listeners who engage with us daily across all platforms."
              />
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section
          id="contact"
          title="Contact Us"
          subtitle="Get in touch with the ACE Podcast Nation team"
          icon="✉️"
        >
          <div className="contactContent">
            <div className="contactForm">
              <form>
                <div className="formGroup">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="formGroup">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="submitBtn">Send Message</button>
              </form>
            </div>
            <div className="contactInfo">
              <Card
                title="Email"
                description="contact@acepodcastnation.com"
              />
              <Card
                title="Phone"
                description="+1 (555) 123-4567"
              />
              <Card
                title="Address"
                description="123 Podcast Lane, Media City, MC 12345"
              />
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="footer">
          <div className="footerContent">
            <p>&copy; 2024 ACE Podcast Nation. All rights reserved.</p>
            <div className="footerLinks">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

//export default App

// export default App
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

export default App
