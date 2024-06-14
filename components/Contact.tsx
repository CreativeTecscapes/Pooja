import React from 'react'


const Contact = () => {
  return (
    <div className='navbar-text' id='Contact'>
        <div >
            <section>
              <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                  
                <div className="flex justify-center items-baseline align-middle mt-10 text-3xl text-[#3B82F6]"><strong>CONTACT ME</strong></div>
                  
                  <form action="https://formsubmit.co/creativetechscapes2003@gmail.com" method="POST" className="mt-8">
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="text-base font-medium text-gray-900">
                          {' '}
                          Full Name{' '}
                        </label>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Full Name"
                            id="name"
                            name='name'
                          ></input>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                          {' '}
                          Email address{' '}
                        </label>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name='email'
                          ></input>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-base font-medium text-gray-900">
                            {' '}
                            Subject{' '}
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter subject"
                            name='subject'
                          ></input>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-base font-medium text-gray-900">
                            {' '}
                            Message{' '}
                          </label>
                        </div>
                        <div className="mt-2">
                          <textarea
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                           
                            placeholder="Enter your message"
                            name='message'
                          ></textarea>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-md bg-[#3B82F6] px-3.5 py-2.5 font-semibold leading-7 text-white"
                        >
                          Submit 
                        </button>
                      </div>
                    </div>
                  </form>
                  
                </div>
              </div>
            </section>

            

        </div>
    </div>
  )
}

export default Contact