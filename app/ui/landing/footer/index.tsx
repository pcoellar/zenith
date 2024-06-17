import Link from "next/link";

export default function Index() {
  return (
      <div>
        <footer id="footer"  className="footer">
          <div className="container">
            <div className="footer-menu">
                     <div className="row">
                       <div className="col-sm-3">
                          <div className="navbar-header">
                            <Link className="navbar-brand" href="index.html">list<span>race</span></Link>
                        </div>
                       </div>
                       <div className="col-sm-9">
                         <ul className="footer-menu-item">
                              <li className="scroll"><Link href="#works">how it works</Link></li>
                              <li className="scroll"><Link href="#explore">explore</Link></li>
                              <li className="scroll"><Link href="#reviews">review</Link></li>
                              <li className="scroll"><Link href="#blog">blog</Link></li>
                              <li className="scroll"><Link href="#contact">contact</Link></li>
                              <li className=" scroll"><Link href="#contact">my account</Link></li>
                          </ul>
                       </div>
                   </div>
            </div>
            <div className="hm-footer-copyright">
              <div className="row">
                <div className="col-sm-5">
                  <p>
                    &copy;copyright. designed and developed by <Link href="https://www.themesine.com/">themesine</Link>
                  </p>
                </div>
                <div className="col-sm-7">
                  <div className="footer-social">
                    <span><i className="fa fa-phone"> +1  (222) 777 8888</i></span>
                    <Link href="#"><i className="fa fa-facebook"></i></Link>  
                    <Link href="#"><i className="fa fa-twitter"></i></Link>
                    <Link href="#"><i className="fa fa-linkedin"></i></Link>
                    <Link href="#"><i className="fa fa-google-plus"></i></Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
    
          <div id="scroll-Top">
            <div className="return-to-top">
              <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
            </div>
            
          </div>  
        </footer>
      </div>
  );
}
