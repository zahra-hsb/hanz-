const Sidebar = () => {
    return (
        <>
            <aside className="hidden lg:flex flex-col justify-between basis-[15%] w-[200px] h-[90vh] fixed">
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
        </>
    )
}

export default Sidebar;