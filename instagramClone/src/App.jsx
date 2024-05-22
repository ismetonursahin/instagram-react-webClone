import { useEffect, useRef, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { AiFillFacebook } from "react-icons/ai";
function App() {
  let ref = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username && password;

  useEffect(() => {
    let images = ref.current.querySelectorAll("img");
    let total = images.length;
    let current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => clearInterval(interval);
  }, [ref]);

  const images = [
    "../public/screenshot1.png",
    "../public/screenshot2.png",
    "../public/screenshot3.png",
    "../public/screenshot4.png",
  ];

  return (
    <div className="h-full w-full flex justify-center flex-wrap overflow-auto items-center gap-x-8 ">
      <div className="hidden md:block w-[380px] h-[580px] bg-logo-pattern bg-[length:468.32px_634.15px] bg-[-46px_0] relative">
        <div
          className="w-[250px] h-[530px] absolute top-[27px] right-[18px] "
          ref={ref}
        >
          {images.map((items, num) => (
            <img
              className="w-full h-full absolute top-0 opacity-0 transition-opacity duration-1000 ease-linear"
              key={num}
              src={items}
            />
          ))}
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white  border p-[50px] pb-6 pt-8">
          <a href="#" className="flex items-center justify-center mb-8">
            <img className="h-[51px]" src="../public/insta.png" alt="" />
          </a>
          <form className="grid gap-y-1.5">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Phone number, username or email"
            />{" "}
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
            <button
              type="submit"
              disabled={!enable}
              className="h-[30px] text-sm bg-brand text-white rounded font-semibold disabled:opacity-50 mt-2"
            >
              Log In
            </button>
            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-sm font-semibold text-gray-500">
                OR
              </span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <a
              href="#"
              className="flex justify-center items-center gap-x-2 text-xs font-semibold text-facebook mb-2 "
            >
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a
              href=""
              className="flex items-center justify-center text-xs text-link"
            >
              Forgot Password
            </a>
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center ">
          Don't have an account?{" "}
          <a href="" className=" font-semibold text-brand">
            {" "}
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
