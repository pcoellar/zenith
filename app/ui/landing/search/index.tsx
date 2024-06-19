'use client'
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Index() {
  const [category, setCategory] = useState<string|undefined>(undefined);
  const [location, setLocation] = useState<string|undefined>(undefined);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleCategoryInput = (text: string) => {
    setCategory(text);
  }

  const handleLocationInput = (text: string) => {
    setLocation(text);
  }

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (category || location) {
      if (category) {
        params.set('category', category);
      }
      if (location) {
        params.set('location', location);
      }
    } else {
      params.delete('category');
      params.delete('location');
    }
    replace(`${pathname}?${params.toString()}`);
  }

    return (
        <div>
          <section id="home" className="welcome-hero">
            <div className="container">
              <div className="welcome-hero-txt">
                <h2>best place to find and explore <br/> that all you need </h2>
                <p>
                  Find Best Place, Restaurant, Hotel, Real State and many more think in just One click 
                </p>
              </div>
              <div className="welcome-hero-serch-box">
                <div className="welcome-hero-form">
                  <div className="single-welcome-hero-form">
                    <h3>what?</h3>
                    <form>
                      <input type="text" placeholder="Ex: palce, resturent, food, automobile"
                       onChange={(e) => handleCategoryInput(e.target.value)} 
                       defaultValue={searchParams.get('category')?.toString()}/>
                    </form>
                    <div className="welcome-hero-form-icon">
                      <i className="flaticon-list-with-dots"></i>
                    </div>
                  </div>
                  <div className="single-welcome-hero-form">
                    <h3>location</h3>
                    <form>
                      <input type="text" placeholder="Ex: london, newyork, rome" 
                      onChange={(e) => handleLocationInput(e.target.value)} 
                      defaultValue={searchParams.get('location')?.toString()}/>
                    </form>
                    <div className="welcome-hero-form-icon">
                      <i className="flaticon-gps-fixed-indicator"></i>
                    </div>
                  </div>
                </div>
                <div className="welcome-hero-serch">
                  <button className="welcome-hero-btn" onClick={() => handleSearch()}>
                     search  <i data-feather="search"></i> 
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}
  