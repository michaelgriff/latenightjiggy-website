import "./App.css";
import wonderfi from "./images/wonderfi.png";
import profile from "./images/profile.png";
import check from "./images/check.png";
import ig from "./images/ig.png";
import disc from "./images/disc.png";
import twitter from "./images/twitter.png";
import eth from "./images/eth.png";
import flavors_vid from "./images/flavors-vid.mp4";
import apple from "./images/apple-music.png";
import spotify from "./images/spotify.png";
import profile_two from "./images/profile-2.png";
import profile_three from "./images/profile-3.png";
import arrow from "./images/down-arrow.png";
import logo from "./images/ledge-logo.png";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <div class="header">
        <p class="labs">Ledge Labs</p>
        {/* <div class="powered">
          <p>Powered by</p>
          <img
            class="wonder"
            src={wonderfi}
            alt={"wonderfi"}
            width={54}
            height={11}
          />
        </div> */}
      </div>
      <div class="top-container">
        <div class="left-top">
          <div class="socials">
            <div class="socials-content">
              <a href="https://instagram.com/latenightjiggy?igshid=YmMyMTA2M2Y=">
                <img class="social-icon ig" src={ig} alt={"check"} />
              </a>
              <a href="https://twitter.com/latenightjiggy?s=21&t=PaqW5F7NjlNOIMK2D4KhfA">
                <img class="social-icon twitter" src={twitter} alt={"check"} />
              </a>
              <a href="https://discord.com/invite/theledge">
                <img class="social-icon disc" src={disc} alt={"check"} />
              </a>
            </div>
          </div>
          <img class="profile" src={profile} alt={"alt"} />
          <div class="title">
            <div class="title-contents">
              <p class="title-text">LATE NIGHT JIGGY</p>
              <img class="check" src={check} alt={"check"} />
            </div>
          </div>
        </div>
        <div class="right-top">
          <div class="divider">
            <div class="new">
              <p class="new-text">NEW</p>
            </div>
            <div class="collectables">
              <p class="collectables-text">DIGITAL COLLECTABLES</p>
            </div>
            <img class="arrow-down" src={arrow} alt={"arrow"} />
          </div>
          <div class="flavors">
            <img class="eth" src={eth} alt={"eth"} width={19} height={32} />
            <p class="flavors-title">Flavors 3</p>
            <p class="flavors-supply">
              Limited Supply: <span class="flavors-supply-total">100</span>
            </p>
          </div>
          <div class="flavors-photo-container">
            <video class="flavors-photo" loop autoPlay muted playsInline>
              <source
                class="flavors-photo"
                src={flavors_vid}
                type={"video/mp4"}
              />
            </video>
            {/* <img class="flavors-photo" src={flavors} alt={"flavors"} /> */}
          </div>
          <a class="coming-soon-a" href="https://lnk.bio/latenightjiggy">
            <div class="coming-soon-container">
              <p class="coming-soon-text">COMING SOON</p>
            </div>
          </a>
          <div class="music-logos">
            <a href="https://open.spotify.com/artist/34OTRVwyaE8DkOrGMQa7Ah?si=f_dF6MmFSZu1fZ-5214LvA">
              <img src={spotify} alt={"spotify"} height={36} width={118} />
            </a>
            <a href="https://music.apple.com/us/artist/latenightjiggy/1435083760">
              <img
                class="apple-music"
                src={apple}
                alt={"apple"}
                height={25}
                width={107}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="video-responsive">
        <div class="what-more-container">
          <p class="what-more">"WHAT MORE"</p>
          <p class="out-now">OUT NOW</p>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/4izTUPj7nro`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div class="tour-dates">
        <a
          href="https://www.songkick.com/artists/10107098"
          class="songkick-widget about-yellow"
          data-theme="dark"
          data-track-button="on"
          data-detect-style="true"
          data-background-color="transparent"
          data-locale="en"
        >
          LATENIGHTJIGGY tour dates
        </a>
        <Helmet>
          <script src="//widget.songkick.com/10107098/widget.js" />
        </Helmet>
      </div>
      <div class="bottom-container">
        <img class="profile-two" src={profile_two} alt={"profile-2"} />
        <div class="about-div">
          <p class="about-title">
            About <span class="about-yellow">Jiggy</span>
          </p>
          <img class="profile-three" src={profile_three} alt={"three"} />
          <div class="about-text-container">
            <p class="about-text-top about-text">
              Remezcla calls LATENIGHTJIGGY “a musical force to be reckoned
              with.” Ones to Watch says “he can both steer and stir the pot.” By
              mixing reggaeton and R&B, hip-hop and afrobeats, Spanish and
              English, the Trinidadian-American artist born in Gaithersburg, MD
              spans across cultures and defies strict genre lines.
            </p>
            <br class="break"></br>
            <p class="about-text">
              As one of the faces of Spotify’s 2022 MIXTO campaign and a TikTok
              Artist to Watch in June, Jiggy became an ambassador for music
              without borders.
            </p>
            <br class="break"></br>
            <p class="about-text">
              Some of today’s biggest artists – including J Balvin, El Alfa,
              Eladio Carrión, and Sech – have recognized his talent; at his
              shows, both English- and Spanish-speaking fans sing his hit single
              “Mimosas” word-for-word. With the final installment of his EP
              trilogy, “Flavors 3,” releasing September 9, LATENIGHTJIGGY is
              sure to continue bending genres and capturing listeners around the
              world.
            </p>
          </div>
          <div class="button-container">
            <a href="https://lnk.bio/latenightjiggy">
              <div class="buy-buttons">
                <p class="button-text">MORE INFO</p>
              </div>
            </a>
            <a href="https://latenightjiggy.lnk.to/flavors3">
              <div class="buy-buttons">
                <p class="button-text">FLAVORS 3</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
