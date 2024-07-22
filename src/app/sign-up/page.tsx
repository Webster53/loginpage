import Link from 'next/link'; // or 'react-router-dom' depending on your setup

const SignUp = () => {
  return (
    <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
        <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
          <h1 className="text-center text-black font-light text-4xl bg-yellow rounded-t-xl m-0 py-4">
            Sign Up
          </h1>
          <form className="p-6">
            <input 
              type="text"
              name="fullname"
              placeholder="Fullname"
              className="py-2 px-3 w-full text-black text-lg font-light outline-none" 
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="py-2 px-3 w-full text-black text-lg font-light outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"
            />
            <div className="flex mt-5 justify-between items-center">
              <Link href="/" className="text-white cursor-pointer transition hover:text-black">
                Already Registered?
              </Link>
              <button type="submit" className="bg-black text-yellow font-medium py-2 px-8 transition hover:text-white">
                Sign Up
              </button>
            </div>
          </form>
        </aside>
      </div>
    </main>
  );
}

export default SignUp;
