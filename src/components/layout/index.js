import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>

      <div className="flex">

        <aside className="hidden lg:flex flex-col justify-between basis-[15%] w-[200px] h-[90vh]">
          {/* <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">ABOUT</Link>
          </div> */}
          <div>
            <div className="">1</div>
            <div className="flex">
              <div className="basis-[50%]">21</div>
              <div className="basis-[50%]">22</div>
            </div>
            <div className="">
              <div>31</div>
              <div>32</div>
              <div>33</div>
              <div>34</div>
              <div>35</div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div>41</div>
              <div>42</div>
              <div>43</div>
              <div>44</div>
            </div>
            <div className="flex">
              <div className="basis-[50%]">51</div>
              <div className="basis-[50%]">52</div>
            </div>
          </div>
        </aside>


        <div className="w-full flex flex-col">

          <header className="w-full h-[50px] flex justify-start items-center">
            Header
          </header>

          <div className="flex-1 h-[500px]">{children}</div>

          <footer className="w-full h-[100px] flex justify-center items-center">
            footer
          </footer>

        </div>

      </div>

    </>
  );
};

export default Layout;
