import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="TopBar">
        <div>
          faxt
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
      <body className="PageContent">
        <div className="SideBar"></div>
        <div className="MovieContent">
          <img
            src="/images/dandelione.png"
            className="ImageBackground"
            alt="logog"
          />

          <div className="MovieInfo"></div>
          <div className="gg">
            <div className="the">
              <div className="EntireMovieComponent">
                <div className="MovieComponent">
                  <img
                    src="/images/zaddy.jpg"
                    className="MovieThumbnail"
                    alt="logog"
                  />

                  <div className="MovieHeader">
                    <div className="FloatAbout">
                      <p className="year">2017</p>
                      <h1 className="name">Cyberpunk 2077: Edgerunners</h1>
                      <p className="genre">Action,Romance</p>
                      <p className="Rating">
                        <p>IMBD</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        &nbsp;8.0(3,000)
                      </p>
                    </div>

                    <div className="AboutMovie">
                      <h1 className="AboutMovieH"> About Movie</h1>
                      <p>
                        Cyberpunk 2077 is an open-world, action-adventure story
                        set in Night City, a megalopolis obsessed with power,
                        glamour and body modification. You play as V, a
                        mercenary outlaw going after a one-of-a-kind implant
                        that is the key to immortality.
                      </p>
                      <p>
                        A street kid tries to survive in a technology and body
                        modification-obsessed city of the future; with
                        everything to lose, he chooses to stay alive by becoming
                        an edgerunner: a mercenary outlaw, also known as a
                        cyberpunk.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="DetSection">
                  <div className="moviedetails">
                    Movie details
                    <p className="body1">
                      <span>Directed :</span>
                      <span className="dettext">Hiroyuki Imaishi</span>
                    </p>
                    <p className="body1">
                      <span>produced :</span>
                      <span className="dettext">Satoru Honma</span>
                    </p>
                    <p className="body1">
                      <span>Screenplay :</span>
                      <span className="dettext">Masahiko Otsuka</span>
                    </p>
                    <p className="body1">
                      <span>Writers:</span>
                      <span className="dettext">Yoshiki Usa</span>
                    </p>
                    <p className="body1">
                      <span> Box office:</span>
                      <span className="dettext">$ 500,000,000</span>
                    </p>
                  </div>
                  <div className="SimilarMovie">
                    Similar Movie
                    <div className="SimilarFlex">
                      <div className="InSimilarMovie">
                        <img
                          src="/images/blackadam.jpg"
                          className="SimilarMovieImage1"
                          alt="logog"
                        />
                        <div className="InSimilarmovieText">
                          <h1 className="similarMovieName">Black Adam</h1>
                          <p>2022&nbsp;•&nbsp;Action</p>
                          <p>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            &nbsp;8.0(3,000)
                          </p>
                          <p>
                            <button className="similarMoviesWatchNow">
                              <span className="similarMoviesWatchnowText">
                                Watch Now&nbsp;{" "}
                              </span>
                              <span class="fa fa-play similarMoviesWatchNowicon2">
                                {" "}
                              </span>
                            </button>
                          </p>
                        </div>
                      </div>
                      <div className="InSimilarMovie">
                        <img
                          src="/images/blackadam.jpg"
                          className="SimilarMovieImage1"
                          alt="logog"
                        />
                        <div className="InSimilarmovieText">
                          <h1 className="similarMovieName">Black Adam</h1>
                          <p>2022&nbsp;•&nbsp;Action</p>
                          <p>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            &nbsp;8.0(3,000)
                          </p>
                          <p>
                            <button className="similarMoviesWatchNow">
                              <span className="similarMoviesWatchnowText">
                                Watch Now&nbsp;{" "}
                              </span>
                              <span class="fa fa-play similarMoviesWatchNowicon2">
                                {" "}
                              </span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <iframe
                    className="VideoTrailer"
                    width="100%"
                    height="615"
                    src="https://www.youtube.com/embed/h4VJGNNSQnw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="MoviePreview">
                <div className="EntirePreview">
                  <div className="EntirePreviewComp">
                    <button className="PhotosButton">Photos (12)</button>
                    <button className="VideosButton">Videos(6)</button>
                    <button className="ArticlesButton">Articles(2)</button>
                  </div>
                  <div className="PreviewHolder">
                    <img
                      src="/images/cyber2.jpg"
                      className="App-photo1"
                      alt="logog"
                    />
                    <img
                      src="/images/cyber1.jpg"
                      className="App-photo2"
                      alt="logog"
                    />
                    <img
                      src="/images/cyber4.jpg"
                      className="App-photo3"
                      alt="logog"
                    />
                  </div>
                </div>
                <div className="EpisodePreview">
                  <div className="EntireSeasonComp">
                    <button className="Season1Button">Season 1</button>
                    <button className="Season2Button">Season 2</button>
                    <button className="Season3Button">Season 3</button>
                  </div>
                  <div className="SeasonPreviewHolder">
                    <button className="EpisodeButton">
                      <div className="Episode1Preview">
                        <img
                          src="/images/season1.jpeg"
                          className="Episode1Image"
                          alt="logog"
                        />
                        <div className="episode1Text">
                          <h1>Episode 1</h1>
                          <p>30:23</p>
                        </div>
                      </div>
                    </button>
                    <button className="EpisodeButton">
                      <div className="Episode1Preview">
                        <img
                          src="/images/season 2.jpg"
                          className="Episode1Image"
                          alt="logog"
                        />
                        <div className="episode1Text">
                          <h1>Episode 1</h1>
                          <p>30:23</p>
                        </div>
                      </div>
                    </button>
                    <button className="EpisodeButton">
                      <div className="Episode1Preview">
                        <img
                          src="/images/season 5.png"
                          className="Episode1Image"
                          alt="logog"
                        />
                        <div className="episode1Text">
                          <h1>Episode 1</h1>
                          <p>30:23</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="MoviesToWatch">
              &nbsp;Movies to Watch
              <div className="MoviesBox">
                <div className="MoviesToWatchFlex">
                  <div className="InMoviesToWatch">
                    <img
                      src="/images/blackadam.jpg"
                      className="SimilarMovieImage1"
                      alt="logog"
                    />
                    <div className="InSimilarmovieText">
                      <h3 className="similarMovieName">Black Adam</h3>
                      <p>2022&nbsp;•&nbsp;Action</p>
                      <p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        &nbsp;8.0(3,000)
                      </p>
                      <p>
                        <button className="similarMoviesWatchNow">
                          <span className="similarMoviesWatchnowText">
                            Watch Now&nbsp;{" "}
                          </span>
                          <img
                            src="/images/play.png"
                            className="similarMoviesWatchNowicon2"
                            alt="logog"
                          />
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="MoviesToWatchFlex">
                  <div className="InMoviesToWatch">
                    <img
                      src="/images/blackadam.jpg"
                      className="SimilarMovieImage1"
                      alt="logog"
                    />
                    <div className="InSimilarmovieText">
                      <h3 className="similarMovieName">Black Adam</h3>
                      <p>2022&nbsp;•&nbsp;Action</p>
                      <p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        &nbsp;8.0(3,000)
                      </p>
                      <p>
                        <button className="similarMoviesWatchNow">
                          <span className="similarMoviesWatchnowText">
                            Watch Now&nbsp;{" "}
                          </span>
                          <img
                            src="/images/play.png"
                            className="similarMoviesWatchNowicon2"
                            alt="logog"
                          />
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="MoviesToWatchFlex">
                  <div className="InMoviesToWatch">
                    <img
                      src="/images/blackadam.jpg"
                      className="SimilarMovieImage1"
                      alt="logog"
                    />
                    <div className="InSimilarmovieText">
                      <h3 className="similarMovieName">Black Adam</h3>
                      <p>2022&nbsp;•&nbsp;Action</p>
                      <p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        &nbsp;8.0(3,000)
                      </p>
                      <p>
                        <button className="similarMoviesWatchNow">
                          <span className="similarMoviesWatchnowText">
                            Watch Now&nbsp;{" "}
                          </span>
                          <img
                            src="/images/play.png"
                            className="similarMoviesWatchNowicon2"
                            alt="logog"
                          />
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="MoviesToWatchFlex">
                  <div className="InMoviesToWatch">
                    <img
                      src="/images/blackadam.jpg"
                      className="SimilarMovieImage1"
                      alt="logog"
                    />
                    <div className="InSimilarmovieText">
                      <h3 className="similarMovieName">Black Adam</h3>
                      <p>2022&nbsp;•&nbsp;Action</p>
                      <p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        &nbsp;8.0(3,000)
                      </p>
                      <p>
                        <button className="similarMoviesWatchNow">
                          <span className="similarMoviesWatchnowText">
                            Watch Now&nbsp;{" "}
                          </span>
                          <img
                            src="/images/play.png"
                            className="similarMoviesWatchNowicon2"
                            alt="logog"
                          />
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="MoviesToWatchFlex">
                  <div className="InMoviesToWatch">
                    <img
                      src="/images/blackadam.jpg"
                      className="SimilarMovieImage1"
                      alt="logog"
                    />
                    <div className="InSimilarmovieText">
                      <h3 className="similarMovieName">Black Adam</h3>
                      <p>2022&nbsp;•&nbsp;Action</p>
                      <p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        &nbsp;8.0(3,000)
                      </p>
                      <p>
                        <button className="similarMoviesWatchNow">
                          <span className="similarMoviesWatchnowText">
                            Watch Now&nbsp;{" "}
                          </span>
                          <img
                            src="/images/play.png"
                            className="similarMoviesWatchNowicon2"
                            alt="logog"
                          />
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
