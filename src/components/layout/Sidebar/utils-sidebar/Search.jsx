const Search = () => {
    return (
            <div className="basis-[100%]">
                <form>
                    <label for="default-search" className="mb-2 text-lg font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="outline-0 block w-full h-[50px] rounded-xl lg:h-[40px] lg:rounded-lg py-2 pl-5 ps-10 text-sm text-gray-900 bg-gray-200 focus:ring-green focus:border-green" placeholder="جستجو کنید..." required />

                    </div>
                </form>
            </div>
    )
}

export default Search;