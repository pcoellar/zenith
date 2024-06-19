import Link from "next/link";

export default function Index() {
    return (
		<section className="top-area">
			<div className="header-area">
			    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

			        <div className="container">

			            <div className="navbar-header">
			                <Link className="navbar-brand" href="">list<span>race</span></Link>
			            </div>

			            <div className="menu-ui-design" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="scroll active"><Link style={{lineHeight: '0px'}} href="#home">home</Link></li>
                                <li className="scroll"><Link style={{lineHeight: '0px'}} href="#works">how it works</Link></li>
                                <li className="scroll"><Link style={{lineHeight: '0px'}} href="#explore">explore</Link></li>
                                <li className="scroll"><Link style={{lineHeight: '0px'}} href="#reviews">review</Link></li>
                                <li className="scroll"><Link style={{lineHeight: '0px'}} href="#blog">blog</Link></li>
                                <li className="scroll"><Link style={{lineHeight: '0px'}} href="#contact">contact</Link></li>
                            </ul>
                        </div>
			        </div>
			    </nav>
			    
			</div>
		    <div className="clearfix"></div>
		</section>
    );
  }
