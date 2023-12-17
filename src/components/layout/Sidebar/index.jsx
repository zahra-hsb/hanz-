const Sidebar = ({ toggle, setToggle }) => {
    // console.log(show);
    return (
        <>
            {/* <div className={`${show && "hidden"} fixed w-full h-full`} onClick={() => setShow(!show)}> */}
                {/* <aside className={`${show && "hidden"} lg:flex flex-col justify-between w-[100%] lg:w-[15%] h-[100vh] fixed bg-white z-10`}> */}
                <aside className="hidden lg:flex flex-col justify-between w-[100%] lg:w-[15%] h-[100vh] fixed bg-white z-10">
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
                        <div className="flex justify-between">
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
            {/* </div> */}
        </>
    )
}

export default Sidebar;