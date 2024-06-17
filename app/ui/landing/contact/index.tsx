'use client';

import { createAccount } from '@/app/lib/serverActions/actions';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

export default function Index() {
  const initialState = { message: '', errors: { email: [] } };
  const [state, dispatch] = useFormState(createAccount, initialState);
  const inputEmail = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.message == 'success' && inputEmail.current) {
      inputEmail.current.value = '';
    }
  },[state])

  return (
      <div>
        <section id="contact"  className="subscription">
          <div className="container">
            <div className="subscribe-title text-center">
              <h2>
                do you want to add your business listing with us?
              </h2>
              <p>
                Listrace offer you to list your business with us and we very much able to promote your Business.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="subscription-input-group">
                  <form action={dispatch} method="post">
                    <input id="email" name="email" type="email" className="subscription-input-form mb-12" placeholder="Enter your email here" ref={inputEmail}/>
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                      {state && state.errors && state.errors?.email &&
                        state.errors.email.map((error: string) => (
                          <p className="mt-5 text-2xl text-red-500" key={error}>
                            {error}
                          </p>
                        ))}
                    </div>
                    <button className="appsLand-btn subscribe-btn">
                      creat account
                    </button>
                    <div className='mt-2 p-2 text-2xl text-green-600'>{(state?.message=="success")?'Account created successfully!':''}</div>
                  </form>
                </div>
              </div>  
            </div>
          </div>
        </section>  
      </div>
  );
}
