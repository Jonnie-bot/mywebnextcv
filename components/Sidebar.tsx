import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  let imageSource = "/images/myDarkPic2.png"
  if(theme === "light"){
     imageSource =  "/images/myDarkPic.jpg"
  }
  else{
     imageSource = "/images/photoroom.png" 
  }

  return (
    <div>
      <Image
        className="mx-auto rounded-full"
        src= {imageSource}
        alt="my picture"
        width={128}
        height={128}
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan dark:text-white">
        <span className="text-green">John</span> Mwaura
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:text-white">
        FullStack Developer || Engineer
      </p>
      <Link href="/assets/my_cv.pdf">
        <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" download="my_cv.pdf">
          <GiTie className="w-6 h-6" /> Download Resume
        </a>
      </Link>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <Link href="">
          <a>
            <AiFillInstagram className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
        <Link href="">
          <a>
            <AiFillGithub className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
        <Link href="">
          <a>
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:text-white dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Nairobi, Kenya</span>
        </div>
        <p className="my-2">mwaura1922@gmail.com</p>
        <p className="my-2">+254115282069</p>
        <p className="my-2">+254755564686</p>
        {/* email button */}
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:mwaura1922@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
