import Link from "next/link";

export default function Index() {
  return (
      <div>
        <section id="works" className="works">
          <div className="container">
            <div className="section-header">
              <h2>how it works</h2>
              <p>Learn More about how our website works</p>
            </div>
            <div className="works-content">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="single-how-works">
                    <div className="single-how-works-icon">
                      <i className="flaticon-lightbulb-idea"></i>
                    </div>
                    <h2><Link href="#">choose <span> what to</span> do</Link></h2>
                    <p>
                      Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua. 
                    </p>
                    <button className="welcome-hero-btn how-work-btn">
                      read more
                    </button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="single-how-works">
                    <div className="single-how-works-icon">
                      <i className="flaticon-networking"></i>
                    </div>
                    <h2><Link href="#">find <span> what you want</span></Link></h2>
                    <p>
                      Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua. 
                    </p>
                    <button className="welcome-hero-btn how-work-btn">
                      read more
                    </button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="single-how-works">
                    <div className="single-how-works-icon">
                      <i className="flaticon-location-on-road"></i>
                    </div>
                    <h2><Link href="#">explore <span> amazing</span> place</Link></h2>
                    <p>
                      Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua. 
                    </p>
                    <button className="welcome-hero-btn how-work-btn">
                      read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>        
        </section>
      </div>
  );
}
