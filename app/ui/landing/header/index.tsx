import Link from "next/link";

export default function Index() {
    return (
        <div>
          <header id="header-top" className="header-top">
            <ul>
              <li>
                <div className="header-top-left">
                  <ul>
                    <li className="select-opt">
                      <select name="language" id="language">
                        <option value="default">EN</option>
                        <option value="Bangla">BN</option>
                        <option value="Arabic">AB</option>
                      </select>
                    </li>
                    <li className="select-opt">
                      <select name="currency" id="currency">
                        <option value="usd">USD</option>
                        <option value="euro">Euro</option>
                        <option value="bdt">BDT</option>
                      </select>
                    </li>
                    <li className="select-opt">
                      <Link href="#"><span className="lnr lnr-magnifier"></span></Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="head-responsive-right pull-right">
                <div className="header-top-right">
                  <ul>
                    <li className="header-top-contact">
                      +1 222 777 6565
                    </li>
                    <li className="header-top-contact">
                      <Link href="#">sign in</Link>
                    </li>
                    <li className="header-top-contact">
                      <Link href="#">register</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>                
          </header>
        </div>
    );
  }
  