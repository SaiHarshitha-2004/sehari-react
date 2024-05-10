import React from 'react'

const Error = () => {
  return (
    <>

      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-2xl font-semibold text-red-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" className='w-1/2 text-center justify-center p-3 text-xl title rounded-xl whitespace-nowrap 
                   bg-button-color transition ease-in-out delay-150 focus:bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-button-color duration-300 bg-opacity-60 max-md:px-5'>
                  <button>Go back home</button>
            </a>
            <p className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Error