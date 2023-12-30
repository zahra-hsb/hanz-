import Button from "../Main/button"

const FaQ = () => {
    return (
        <>
            <section className="flex items-center justify-center py-20 bg-green text-white">
                <div className="flex flex-col lg:w-[90%] lg:m-auto items-center justify-around gap-3">

                    <div>
                        <h3 className="text-3xl font-bold">چرا آلومینیوم؟</h3>
                    </div>
                    <div>
                        <h4 className="text-sm lg:text-md text-center p-3">مهمترین دلایل برای در نظر گرفتن آلومینیوم برای پروژه بعدی</h4>
                    </div>
                    <div className="flex flex-wrap items-center justify-center w-full p-4">
                        <div className="w-full flex items-center justify-center my-5">

                            <div className="w-[25%] flex flex-col items-center lg:p-5 p-1">

                                <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_622_39" maskUnits="userSpaceOnUse" x="10" y="10" width="40" height="40">
                                        <path d="M50 10H10V50H50V10Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_622_39)">
                                        <path d="M37.9298 16.7575C39.3594 20.0388 38.6406 23.7888 36.1094 26.32C34.4219 28.0075 32.211 28.8513 29.9922 28.8513C27.7812 28.8513 25.5625 28.0075 23.875 26.32C20.5 22.945 20.5 17.4607 23.875 14.0935C26.4063 11.5623 30.1562 10.8513 33.4375 12.2732C35.711 13.4607 37.1562 14.945 37.9298 16.7575ZM34.0704 10.8435C32.211 10.0388 30.1719 9.79664 28.1719 10.1638C26.125 10.531 24.2579 11.5154 22.7813 12.9919C18.7969 16.9763 18.7969 23.4529 22.7813 27.4294C24.5704 29.2185 26.8673 30.2029 29.2188 30.3825V35.531C28.8985 35.0544 28.5312 34.6092 28.125 34.2029C25.8438 31.9217 22.4923 31.0232 19.375 31.8592C19.1016 31.9294 18.8906 32.1404 18.8204 32.4138C17.9844 35.531 18.8829 38.8904 21.1641 41.1638C22.1719 42.1717 23.3906 42.906 24.7031 43.3513C23.7344 43.8357 22.8281 44.4607 22.0079 45.2107C21.3829 44.8982 20.6954 44.7342 19.9923 44.7342C17.5156 44.7342 15.5 46.7498 15.5 49.2263C15.5 49.656 15.8516 50.0075 16.2812 50.0075H43.711C44.1406 50.0075 44.4923 49.656 44.4923 49.2263C44.4923 46.7498 42.4766 44.7342 40 44.7342C39.2891 44.7342 38.6016 44.8982 37.9844 45.2107C37.1641 44.4607 36.2579 43.8435 35.2891 43.3513C36.6016 42.9138 37.8204 42.1794 38.8281 41.1638C41.1094 38.8825 42.0079 35.531 41.1719 32.4138C41.1016 32.1404 40.8906 31.9294 40.6173 31.8592C37.5 31.0232 34.1406 31.9217 31.8672 34.2029C31.4531 34.6169 31.0937 35.0623 30.7735 35.531V30.3825C33.125 30.2029 35.4219 29.2185 37.211 27.4294C38.6875 25.9529 39.6641 24.0857 40.0391 22.0388C40.3985 20.0388 40.1641 17.9998 39.3594 16.1404C38.3829 13.9138 36.211 11.8357 34.0704 10.8435ZM32.9844 35.3123C34.7656 33.531 37.3281 32.7732 39.7813 33.2654C40.2735 35.7185 39.5156 38.281 37.7344 40.0623C36.1875 41.6092 34.0548 42.3825 31.9141 42.2419L35.2891 38.8669C35.5938 38.5623 35.5938 38.07 35.2891 37.7654C34.9844 37.4607 34.4923 37.4607 34.1875 37.7654L30.8125 41.1404C30.6641 38.9919 31.4375 36.8513 32.9844 35.3123ZM20.2187 33.2654C22.6719 32.7732 25.2344 33.531 27.0156 35.3123C28.5625 36.8592 29.336 38.9919 29.1954 41.1325L25.8204 37.7575C25.5156 37.4529 25.0235 37.4529 24.7188 37.7575C24.4141 38.0623 24.4141 38.5544 24.7188 38.8592L28.0938 42.2342C27.9219 42.2419 27.7579 42.2498 27.586 42.2498C25.6173 42.2498 23.6954 41.4763 22.2735 40.0544C20.4923 38.281 19.7266 35.7107 20.2187 33.2654ZM17.1719 48.4373C17.5156 47.2029 18.6485 46.2888 19.9923 46.2888C20.5938 46.2888 21.1797 46.4763 21.6719 46.82C21.9844 47.0388 22.4063 46.9998 22.6798 46.7263C24.625 44.7498 27.2266 43.6638 30 43.6638C32.7735 43.6638 35.3673 44.7498 37.3204 46.7263C37.586 46.9998 38.0156 47.0388 38.3281 46.82C38.8204 46.4763 39.4063 46.2888 40.0079 46.2888C41.3516 46.2888 42.4923 47.2029 42.8281 48.4373H17.1719Z" fill="white" />
                                        <path d="M31.3672 23.0938C30.9844 23.3594 30.5625 23.4921 30.1094 23.4921C29.289 23.4921 28.5156 23.0079 28.0234 22.1954H29.5469C29.9609 22.1954 30.3046 21.8594 30.3046 21.4375C30.3046 21.0156 29.9688 20.6796 29.5469 20.6796H27.5235C27.5079 20.5625 27.5 20.4375 27.5 20.3125C27.5 20.1875 27.5079 20.0625 27.5235 19.9454H30.1094C30.5234 19.9454 30.8672 19.6094 30.8672 19.1875C30.8672 18.7656 30.5312 18.4298 30.1094 18.4298H28.0234C28.5156 17.625 29.289 17.1329 30.1094 17.1329C30.5625 17.1329 30.9844 17.2656 31.3672 17.5312C31.5391 17.6485 31.7344 17.6875 31.9375 17.6485C32.1327 17.6094 32.3047 17.5 32.4219 17.336C32.539 17.1719 32.5781 16.9688 32.539 16.7656C32.5 16.5703 32.3906 16.3985 32.2187 16.2812C31.5859 15.8516 30.8594 15.625 30.1094 15.625C28.4609 15.625 27 16.7188 26.336 18.4298H25.6171C25.2031 18.4298 24.8594 18.7656 24.8594 19.1875C24.8594 19.6094 25.1952 19.9454 25.6171 19.9454H26.0077C25.9921 20.0625 25.9844 20.1875 25.9844 20.3125C25.9844 20.4375 25.9921 20.5625 26.0077 20.6796H25.6171C25.2031 20.6796 24.8594 21.0156 24.8594 21.4375C24.8594 21.8594 25.1952 22.1954 25.6171 22.1954H26.336C27 23.9062 28.4609 25 30.1094 25C30.8594 25 31.5859 24.7735 32.2187 24.3438C32.5625 24.1094 32.6484 23.6329 32.414 23.2891C32.1875 22.9531 31.7187 22.8594 31.3672 23.0938Z" fill="white" />
                                    </g>
                                </svg>

                                <h5 className=" text-xs text-center">سرمایه گذاری</h5>
                            </div>
                            <div className="w-[25%] flex flex-col items-center lg:p-5 p-1">

                                <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8639 44.1359C12.1143 40.3864 10.0054 35.3025 10 29.9998C10.0017 26.9403 10.7054 23.922 12.0568 21.1772C13.4083 18.4323 15.3714 16.034 17.7951 14.167C20.2189 12.2999 23.0386 11.0139 26.0375 10.4077C29.0364 9.80153 32.1344 9.89146 35.093 10.6706C38.0516 11.4497 40.7921 12.8972 43.1035 14.9017C45.4149 16.9062 47.2355 19.4143 48.4255 22.2329C49.6154 25.0515 50.1427 28.1055 49.967 31.16C49.7912 34.2145 48.9171 37.1879 47.4118 39.8515C46.0284 42.2752 44.1579 44.386 41.9181 46.0509H49.1509V47.7492H38.7366V37.3247H40.4245V45.0484C44.025 42.5529 46.6121 38.8502 47.7171 34.6112C48.822 30.3722 48.3716 25.8775 46.4476 21.942C44.5235 18.0065 41.253 14.8907 37.2291 13.1593C33.2051 11.4278 28.694 11.1954 24.5134 12.5042C20.3329 13.8129 16.7595 16.5762 14.4411 20.293C12.1228 24.0099 11.2129 28.4345 11.8764 32.7647C12.5399 37.0947 14.7328 41.0438 18.0578 43.896C21.3826 46.7483 25.6194 48.3149 30 48.3118V49.9998C24.6974 49.9944 19.6134 47.8855 15.8639 44.1359Z" fill="white" />
                                    <path d="M29.1304 29.6524V18.7368H30.8286V30.3276L23.5345 37.6217L22.3376 36.4452L29.1304 29.6524Z" fill="white" />
                                </svg>

                                <h5 className=" text-xs text-center">طول عمر</h5>

                            </div>
                            <div className="w-[25%] flex flex-col items-center lg:p-5 p-1">

                                <svg width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.2049 39.2986L43.5196 32.6279L43.4994 32.5876C43.4184 32.4465 43.2969 32.3256 43.1551 32.245C42.9121 32.1039 42.6286 32.0435 42.3451 32.1241C42.0616 32.1845 41.839 32.3659 41.677 32.6078L40.1583 35.0866L31.7145 29.9676L39.895 24.7681L41.6163 27.4889C41.7175 27.6299 41.839 27.7509 41.9808 27.8516C42.1426 27.9524 42.3451 27.9926 42.5274 27.9926C42.8919 27.9926 43.2564 27.8113 43.4386 27.4686L47.0226 20.6971C47.1036 20.536 47.1644 20.3546 47.1441 20.153C47.1441 19.8709 47.0226 19.6089 46.8 19.4074C46.5975 19.2059 46.314 19.1051 46.0305 19.1253L42.2236 19.2461L38.3966 19.3873H38.3561C38.1941 19.4074 38.0321 19.4476 37.8904 19.5283C37.6474 19.6694 37.4651 19.9113 37.4044 20.1934C37.3436 20.4755 37.3841 20.7576 37.5461 21.0196L38.9434 23.2164L30.9045 28.3353V18.702H33.8204C34.0026 18.702 34.1849 18.6618 34.3469 18.5609C34.5898 18.4199 34.772 18.1981 34.853 17.916C34.934 17.6339 34.8935 17.3518 34.7518 17.1099L30.9248 10.5198L30.9045 10.4996C30.8235 10.3586 30.702 10.2376 30.5603 10.157C30.3173 10.016 30.0338 9.95549 29.7503 10.0361C29.4668 10.0966 29.2441 10.278 29.0821 10.5198L25.255 17.1099C25.1538 17.2711 25.1133 17.4726 25.1133 17.6743C25.1335 18.2586 25.5993 18.7221 26.1865 18.7221H29.0821V28.3958L20.78 23.3978L22.2784 20.939C22.3796 20.7778 22.4404 20.5964 22.4404 20.3949C22.4404 19.8104 21.9746 19.3268 21.3875 19.3066L13.7536 19.1253H13.7334C13.5714 19.1253 13.3891 19.1655 13.2474 19.2461C12.7209 19.5081 12.5184 20.153 12.7816 20.677L16.4873 27.3679L16.5075 27.388C16.6088 27.5493 16.7303 27.6703 16.8921 27.771C17.0541 27.8718 17.2364 27.912 17.4389 27.912C17.5199 27.912 17.6211 27.8919 17.7021 27.8717C17.9856 27.7911 18.2084 27.6299 18.3501 27.388L19.8688 24.9093L28.2924 29.9879L19.8283 35.3889L18.3906 33.0914C18.2894 32.9303 18.1476 32.7891 17.9654 32.6884C17.7224 32.5472 17.4186 32.5271 17.1554 32.6078C16.8921 32.6884 16.6695 32.8697 16.5278 33.1318L12.9639 39.8831C12.8626 40.0645 12.8221 40.2459 12.8424 40.4474C12.8829 41.0116 13.3486 41.4349 13.9156 41.4349C13.9359 41.4349 13.9561 41.4349 13.9561 41.4349L17.7629 41.314L21.5698 41.1729C21.7723 41.1729 21.9746 41.1124 22.1366 40.9915C22.3796 40.8303 22.5416 40.5884 22.6024 40.3062C22.6631 40.0442 22.6024 39.7621 22.4606 39.5202L20.8205 36.9205L29.1024 31.6404V41.2736H26.1865C25.984 41.2736 25.8018 41.314 25.6398 41.4148C25.1335 41.717 24.9513 42.3619 25.255 42.8657L29.0619 49.4559C29.1631 49.6372 29.3049 49.7581 29.4668 49.8589C29.6288 49.9395 29.811 50 29.9933 50C30.0945 50 30.1958 49.9799 30.297 49.9597C30.5603 49.8791 30.783 49.6978 30.9248 49.4559L34.7518 42.8657C34.853 42.7045 34.8935 42.5231 34.8935 42.3418C34.8935 42.0596 34.7923 41.7976 34.5898 41.5961C34.3874 41.3946 34.1241 41.2736 33.8204 41.2736H30.9045V31.6001L39.2066 36.6182L37.6879 39.0971L37.6676 39.1173C37.5866 39.2584 37.5259 39.4397 37.5259 39.6211C37.5056 40.2055 37.9714 40.7094 38.5789 40.7295L46.2128 40.8908C46.233 40.8908 46.233 40.8908 46.2533 40.8908C46.4558 40.8908 46.638 40.8302 46.8 40.7295C47.0429 40.5884 47.2251 40.3466 47.2859 40.0645C47.3669 39.8025 47.3466 39.5203 47.2049 39.2986ZM44.532 21.1608L42.4666 25.0906L40.0975 21.3421L44.532 21.1608ZM29.9933 12.8979L32.2206 16.727H27.7659L29.9933 12.8979ZM17.4591 25.0301L15.3128 21.1405L19.7675 21.2414L17.4591 25.0301ZM15.4748 39.3994L17.5401 35.4896L19.9093 39.2381L15.4748 39.3994ZM29.9933 47.0979L27.7659 43.2689H32.2206L29.9933 47.0979ZM40.2393 38.7545L42.5476 34.9656L44.694 38.8552L40.2393 38.7545Z" fill="white" />
                                </svg>

                                <h5 className=" text-xs text-center">تطبیق پذیری</h5>

                            </div>
                            <div className="w-[25%] flex flex-col items-center lg:p-5 p-1">

                                <svg width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_622_28" maskUnits="userSpaceOnUse" x="10" y="10" width="40" height="40">
                                        <path d="M50 10H10V50H50V10Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_622_28)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3436 40.4798C15.7156 40.3341 16.1129 40.2638 16.5122 40.2733C18.2671 40.3264 19.621 41.7243 19.591 43.4604C19.5799 44.2802 19.2465 45.0626 18.6631 45.6383C18.0797 46.2142 17.2931 46.5371 16.4736 46.5373H16.4089C15.5695 46.5149 14.773 46.1616 14.193 45.5542C13.9131 45.2664 13.6932 44.9258 13.546 44.5523C13.3989 44.1787 13.3275 43.7797 13.3359 43.3782C13.361 42.5222 13.7241 41.7109 14.3457 41.1221C14.6324 40.8438 14.9716 40.6254 15.3436 40.4798ZM15.4061 44.4577C15.6854 44.7371 16.0641 44.8939 16.4591 44.8939H16.4562C16.8526 44.8979 17.2345 44.7447 17.5182 44.4677C17.6574 44.3282 17.7674 44.1622 17.8415 43.9796C17.9157 43.7971 17.9526 43.6014 17.9501 43.4043C17.9477 43.0128 17.7922 42.6378 17.5171 42.3596C17.2419 42.0812 16.8687 41.9216 16.4775 41.9147H16.4591C16.0641 41.9147 15.6854 42.0717 15.4061 42.3511C15.1269 42.6303 14.97 43.0093 14.97 43.4043C14.97 43.7994 15.1269 44.1783 15.4061 44.4577Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9734 36.783C48.2743 36.809 49.9605 38.4842 49.9827 40.7724C49.9991 42.405 49.9991 44.1227 49.9827 46.0241C49.9711 47.3562 49.4319 48.4379 48.3795 49.2372C47.7775 49.6936 46.7841 50 45.9056 50H13.5494C13.4651 49.9986 13.3809 49.9927 13.2971 49.9826C12.3523 49.852 11.4891 49.3765 10.8736 48.6476C10.3276 48.0241 10 47.1976 10 46.4514V13.9854C10.0066 13.6472 10.0529 13.3111 10.1382 12.984C10.6552 11.1347 12.1076 10.0231 14.022 10.0105C15.6831 9.99601 17.3751 9.99699 19.1957 10.0105C19.564 10.0086 19.9309 10.0554 20.2868 10.1497C22.1123 10.663 23.2081 12.1091 23.2196 14.0164V19.4354C23.7019 18.6099 24.4962 17.2479 25.1726 16.0744C25.6751 15.2015 26.1641 14.3575 26.5255 13.737C27.6968 11.7244 29.814 11.0593 31.796 12.082C33.1121 12.7616 34.4041 13.5349 35.6536 14.2831C36.0402 14.5151 36.4268 14.7459 36.8132 14.9752C37.4681 15.3715 37.9746 15.972 38.2551 16.6842C38.7672 17.9032 38.6667 19.1415 37.9575 20.3672C36.8894 22.2135 35.8227 24.0609 34.7579 25.9091L34.1587 26.9462L36.2094 25.94C37.7535 25.1772 39.35 24.3962 40.9241 23.6306C43.0154 22.6127 45.1451 23.2421 46.2226 25.1956C47.1406 26.8592 47.993 28.6002 48.7564 30.3701C49.5914 32.3035 48.9275 34.2416 47.0662 35.3049C46.3096 35.738 45.5153 36.1189 44.7422 36.4871L44.1624 36.7646C44.5962 36.7771 45.0254 36.783 45.4458 36.783H45.9734ZM11.638 45.8927C11.6418 47.4132 12.584 48.3576 14.0964 48.3576C17.8651 48.3576 44.7296 48.3576 45.8419 48.3586C47.4074 48.3567 48.3458 47.4229 48.3458 45.8627V40.9647C48.3448 39.3494 47.4209 38.4224 45.811 38.4224H14.1031C13.9998 38.4224 13.9031 38.4234 13.8065 38.4291C13.2169 38.4524 12.6599 38.7055 12.2545 39.1344C11.8492 39.5632 11.6279 40.1339 11.638 40.724V45.8927ZM40.1056 36.7791C40.2847 36.7779 40.4615 36.7376 40.6236 36.6611C41.9365 36.0234 43.2304 35.3899 44.5956 34.7215L45.983 34.0425C47.3822 33.3542 47.8075 32.1024 47.1214 30.695C46.3985 29.2034 45.6805 27.7419 44.949 26.2686C44.833 26.0201 44.6856 25.7875 44.5103 25.5765C43.7767 24.7316 42.7458 24.5712 41.6113 25.1261C38.2938 26.75 21.9808 34.7704 17.9444 36.7704H22.6399C28.5684 36.7791 37.5284 36.7849 40.1056 36.7791ZM31.6038 28.0686C33.52 24.7712 35.0951 22.0444 36.5601 19.4915C37.2887 18.2202 36.9448 16.9211 35.6818 16.1767C34.3318 15.3841 32.801 14.49 31.2751 13.6441C30.9286 13.4442 30.5443 13.3187 30.1465 13.2759C30.0779 13.2681 30.0103 13.2681 29.9445 13.2681C29.0913 13.2681 28.4293 13.7012 27.92 14.5789C25.6153 18.5789 17.4186 32.7704 15.5083 36.0754C18.5966 34.5645 30.8306 28.578 31.3138 28.3237C31.4314 28.266 31.5315 28.1779 31.6038 28.0686ZM21.5681 21.098C21.5749 18.7414 21.5818 16.2995 21.5711 13.8965C21.5624 12.6407 20.6183 11.6741 19.3745 11.649C18.529 11.6326 17.6564 11.6239 16.7229 11.6239C15.8357 11.6239 14.8936 11.6316 13.8664 11.6471C12.815 11.6625 11.9627 12.3382 11.7452 13.3271C11.6702 13.7317 11.6378 14.1432 11.6486 14.5547C11.6428 14.694 11.6428 14.8321 11.6428 14.9694L11.6443 17.0425C11.648 22.1084 11.6573 34.8851 11.6573 37.4837L11.6766 37.4712L11.6852 37.4659C11.9666 37.2916 12.2568 37.1119 12.583 37.043C13.1232 36.9289 13.4644 36.348 13.5919 36.1285C13.7677 35.8279 19.9583 25.072 21.4986 22.3914C21.5469 22.321 21.5714 22.237 21.5681 22.1516V21.098Z" fill="white" />
                                    </g>
                                </svg>

                                <h5 className=" text-xs text-center">رنگ ها</h5>

                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center my-5">

                            <div className="w-[25%] flex flex-col items-center lg:p-5 p-1">

                                <svg width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49.99 10.8209L49.9441 10.057L49.1761 10.0114C48.9355 10 43.5485 9.73778 39.789 12.7134C38.0812 11.7102 36.2474 10.9805 34.3217 10.5245C32.8432 10.171 31.3074 10 29.7715 10C18.8714 10 10 18.8244 10 29.6666C10 40.509 18.8714 49.3334 29.7715 49.3334C40.6716 49.3334 49.543 40.509 49.543 29.6666C49.543 26.3832 48.7178 23.1681 47.1589 20.3065C50.265 16.5555 50.0014 11.0603 49.99 10.8209ZM40.3621 28.8002C40.3277 27.1926 40.1903 25.6308 39.9495 24.103C41.8062 23.7724 44.0527 23.0655 45.8866 21.5606C47.0329 23.8066 47.6861 26.2691 47.8008 28.8002H40.3621ZM28.9119 11.8014V28.8116H20.9001C21.0033 24.2512 21.9775 19.9986 23.6509 16.7607C25.118 13.9219 26.9634 12.189 28.9119 11.8014ZM28.9119 30.5104V47.532C26.9634 47.133 25.118 45.4114 23.6509 42.5725C21.9775 39.3346 21.0148 35.0821 20.9001 30.5104H28.9119ZM30.6311 47.532V30.5104H38.6429C38.5398 35.0821 37.5655 39.3346 35.892 42.5725C34.425 45.4114 32.5796 47.1444 30.6311 47.532ZM30.6311 28.8002V11.8014C31.6283 12.0066 32.6025 12.5539 33.5309 13.4545C34.6084 14.492 35.5826 15.9855 36.3849 17.7755C35.4106 20.6827 35.5368 23.3961 35.5483 23.5671L35.594 24.331L36.362 24.3766C36.3964 24.3766 36.5798 24.388 36.8662 24.388C37.1986 24.388 37.6686 24.3766 38.2417 24.331C38.4709 25.7789 38.6085 27.2839 38.6429 28.8116H30.6311V28.8002ZM34.9751 12.4626C36.2015 12.8275 37.3821 13.3176 38.5054 13.9447C38.0239 14.5034 37.6227 15.0963 37.2904 15.7119C36.5912 14.435 35.8118 13.3405 34.9751 12.4626ZM48.2708 11.7216C48.2134 13.3975 47.8122 17.2966 45.3365 19.7592C43.3765 21.7087 40.5111 22.3586 38.5626 22.5752L43.9955 17.1713L42.7805 15.9627L37.3706 21.344C37.4853 20.3179 37.7259 19.041 38.2188 17.7755L38.2531 17.764C38.2531 17.7526 38.2417 17.7413 38.2417 17.7299C38.6772 16.624 39.3076 15.5295 40.2016 14.6287C42.6659 12.1776 46.5859 11.7786 48.2708 11.7216ZM24.5564 12.474C23.6624 13.3975 22.8371 14.5717 22.115 15.9741C20.3155 19.44 19.284 23.9661 19.1809 28.8002H11.7422C12.109 21.0817 17.4042 14.6287 24.5564 12.474ZM11.7422 30.5104H19.1809C19.284 35.3558 20.327 39.8819 22.115 43.3593C22.8371 44.7615 23.6624 45.9359 24.5564 46.8594C17.4042 44.7045 12.0975 38.2402 11.7422 30.5104ZM34.9866 46.8594C35.8806 45.9359 36.7059 44.7615 37.4279 43.3593C39.2274 39.8934 40.259 35.3558 40.3621 30.5104H47.8008C47.4455 38.2402 42.1386 44.7045 34.9866 46.8594Z" fill="white" />
                                </svg>

                                <h5 className=" text-xs text-center">پایداری</h5>

                            </div>
                            <div className="w-[25%] flex flex-col items-center lg:p-5 p-1">

                                <svg width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1129 31.9456L10 30.7679C11.275 29.5576 12.6148 28.4447 13.9979 27.4399C14.4949 27.0725 14.9919 26.7267 15.4997 26.3919L11.2318 19.8224L12.5933 18.9364L16.872 25.5382C18.6331 24.501 20.4051 23.6581 22.188 23.0206L19.6812 15.6193L21.2155 15.1006L23.7222 22.5129C25.57 21.9834 27.396 21.6809 29.2004 21.6052V13.75H30.8211V21.5944C32.6256 21.6592 34.4625 21.9726 36.2992 22.502L38.806 15.0899L40.3404 15.6085L37.8336 23.0099C39.6164 23.6365 41.3885 24.4794 43.1496 25.5274L47.4284 18.9364L48.7682 19.8224L44.5111 26.3919C45.0081 26.7267 45.516 27.0725 46.013 27.4399C47.3852 28.4447 48.725 29.5685 50 30.7679L48.8871 31.9456C47.6661 30.7895 46.3804 29.709 45.0621 28.7472C40.1026 25.1169 34.8946 23.2044 30 23.2044C25.1054 23.2044 19.8974 25.1276 14.9379 28.7472C13.6196 29.709 12.3339 30.7895 11.1129 31.9456Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.0112 40.4919C32.2479 40.4919 34.0631 38.6767 34.0631 36.4401C34.0631 34.2034 32.2479 32.3882 30.0112 32.3882C27.7746 32.3882 25.9594 34.2034 25.9594 36.4401C25.9594 38.6767 27.7746 40.4919 30.0112 40.4919ZM30.0112 34.0089C31.3511 34.0089 32.4423 35.1003 32.4423 36.4401C32.4423 37.7799 31.3511 38.8712 30.0112 38.8712C28.6715 38.8712 27.5801 37.7799 27.5801 36.4401C27.5801 35.1003 28.6715 34.0089 30.0112 34.0089Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.4739 30.9193C38.9899 27.6345 34.3329 25.9058 30.0109 25.9058C25.6889 25.9058 21.032 27.6454 16.5479 30.9193C13.3077 33.2948 11.2629 35.6403 11.0435 35.8919L11.0266 35.9111L10.5836 36.4298L11.0266 36.9484L11.0434 36.9676C11.2628 37.2193 13.3075 39.5648 16.5479 41.9403C21.032 45.225 25.6889 46.9538 30.0109 46.9538C34.3329 46.9538 38.9899 45.2143 43.4739 41.9403C46.7142 39.5649 48.7589 37.2195 48.9784 36.9676L48.9953 36.9484L49.4383 36.4298L48.9953 35.9111L48.9768 35.8899C48.7494 35.6283 46.7164 33.2888 43.4739 30.9193ZM38.925 36.4405C38.925 41.3569 34.9272 45.3546 30.0109 45.3546C25.0947 45.3546 21.0968 41.3569 21.0968 36.4405C21.0968 31.5243 25.0947 27.5265 30.0109 27.5265C34.9272 27.5265 38.925 31.5243 38.925 36.4405ZM12.7338 36.4405C13.5118 35.6086 15.2189 33.9014 17.5312 32.205C18.7954 31.2866 20.3622 30.2818 22.1342 29.4498C20.4809 31.3083 19.4762 33.7609 19.4762 36.4405C19.4762 39.1203 20.4809 41.5729 22.1342 43.4314C20.3622 42.5994 18.7954 41.5945 17.5312 40.6761C15.2189 38.9798 13.5118 37.2725 12.7338 36.4405ZM42.4907 40.6761C41.2265 41.5945 39.6598 42.5994 37.8878 43.4314C39.5409 41.5729 40.5458 39.1203 40.5458 36.4405C40.5458 33.7609 39.5409 31.3083 37.8878 29.4498C39.6598 30.2818 41.2265 31.2866 42.4907 32.205C44.8029 33.8906 46.5102 35.5978 47.288 36.4405C46.5102 37.2725 44.8029 38.9798 42.4907 40.6761Z" fill="white" />
                                </svg>

                                <h5 className=" text-xs text-center">طراحی</h5>

                            </div>
                            <div className="w-[25%] flex flex-col items-center lg:p-5 p-1">

                                <svg width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_622_12" maskUnits="userSpaceOnUse" x="10" y="10" width="40" height="40">
                                        <path d="M50 10H10V50H50V10Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_622_12)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5634 50C19.3463 50 18.1508 49.6087 17.1837 48.8589C15.9555 47.9025 15.2383 46.4897 15.2383 44.99C15.2383 43.4904 15.9447 42.0666 17.1837 41.1211C17.3792 40.969 17.5857 40.8277 17.803 40.7082C17.5857 40.5886 17.3792 40.4474 17.1837 40.2952C15.9555 39.328 15.2492 37.9152 15.2492 36.4155C15.2492 34.9157 15.9555 33.4921 17.1944 32.5466C17.39 32.3945 17.5965 32.2532 17.8139 32.1337C17.5965 32.0141 17.39 31.8729 17.1944 31.7207C15.9664 30.7644 15.2492 29.3516 15.2492 27.8519C15.2492 26.3521 15.9555 24.9285 17.1944 23.983C17.39 23.8309 17.5965 23.6896 17.8139 23.57C17.5965 23.4505 17.39 23.3092 17.1944 23.1571C15.9664 22.2007 15.2492 20.788 15.2492 19.2882C15.2492 17.7885 15.9555 16.3649 17.1944 15.4194C17.39 15.2672 17.5965 15.1259 17.8139 15.0064C17.5965 14.8869 17.39 14.7456 17.1944 14.5934C15.9664 13.6371 15.2492 12.2243 15.2492 10.7246H16.8793C16.8793 11.7244 17.3575 12.6699 18.1834 13.311C19.118 14.0391 20.3787 14.2891 21.5633 13.9849L36.191 10.1812C37.8538 9.74648 39.636 10.1051 40.9728 11.1375C42.2008 12.0939 42.918 13.5066 42.918 15.0064C42.918 16.517 42.2117 17.9297 40.9728 18.8752C40.7772 19.0274 40.5707 19.1686 40.3533 19.2882C40.5707 19.4077 40.7772 19.549 40.9728 19.7011C42.2008 20.6575 42.918 22.0704 42.918 23.57C42.918 25.0806 42.2117 26.4934 40.9728 27.4389C40.7772 27.591 40.5707 27.7324 40.3533 27.8519C40.5707 27.9714 40.7772 28.1127 40.9728 28.2649C42.2008 29.2211 42.918 30.634 42.918 32.1337C42.918 33.6334 42.2117 35.0571 40.9728 36.0025C40.7772 36.1547 40.5707 36.296 40.3533 36.4155C40.5707 36.5351 40.7772 36.6764 40.9728 36.8285C42.2008 37.7849 42.918 39.1976 42.918 40.6974C42.918 42.208 42.2117 43.6207 40.9728 44.5662C40.7772 44.7184 40.5707 44.8596 40.3533 44.9791C40.5707 45.0987 40.7772 45.24 40.9728 45.3921C42.2008 46.3485 42.918 47.7612 42.918 49.261H41.2879C41.2879 48.2611 40.8097 47.3266 39.9838 46.6745C39.0492 45.9464 37.7885 45.6964 36.6039 46.0007L21.9762 49.8044C21.5089 49.9347 21.0415 50 20.5634 50ZM20.5634 41.5994C19.7049 41.5994 18.8572 41.871 18.1834 42.3927C17.3575 43.0339 16.8793 43.9794 16.8793 44.9791C16.8793 45.979 17.3575 46.9245 18.1834 47.5656C19.118 48.2937 20.3787 48.5437 21.5633 48.2395L34.0827 44.99L21.5524 41.7406C21.2372 41.6429 20.9003 41.5994 20.5634 41.5994ZM24.0737 40.6974L36.6039 43.9467C37.7777 44.251 39.0383 44.0011 39.9838 43.273C40.8097 42.6317 41.2879 41.6862 41.2879 40.6865C41.2879 39.6866 40.8097 38.7411 39.9838 38.1C39.0492 37.3719 37.7885 37.1219 36.6039 37.4262L24.0737 40.6974ZM20.5634 33.0357C19.7049 33.0357 18.8572 33.3074 18.1834 33.829C17.3575 34.4702 16.8793 35.4157 16.8793 36.4155C16.8793 37.4154 17.3575 38.3609 18.1834 39.002C19.118 39.7301 20.3787 39.9801 21.5633 39.6757L34.0827 36.4264L21.5524 33.177C21.2372 33.0682 20.9003 33.0357 20.5634 33.0357ZM24.0737 32.1229L36.6039 35.3722C37.7777 35.6765 39.0383 35.4266 39.9838 34.6985C40.8097 34.0572 41.2879 33.1117 41.2879 32.112C41.2879 31.1121 40.8097 30.1775 39.9838 29.5255C39.0492 28.7974 37.7885 28.5474 36.6039 28.8517L24.0737 32.1229ZM20.5634 24.4611C19.7049 24.4611 18.8572 24.7329 18.1834 25.2545C17.3575 25.8957 16.8793 26.8411 16.8793 27.841C16.8793 28.8409 17.3575 29.7862 18.1834 30.4275C19.118 31.1556 20.3787 31.4056 21.5633 31.1012L34.0827 27.8519L21.5524 24.6025C21.2372 24.4937 20.9003 24.4611 20.5634 24.4611ZM24.0737 23.5482L36.6039 26.7977C37.7777 27.102 39.0383 26.852 39.9838 26.1239C40.8097 25.4827 41.2879 24.5372 41.2879 23.5375C41.2879 22.5376 40.8097 21.5921 39.9838 20.951C39.0492 20.2229 37.7885 19.9729 36.6039 20.2771L24.0737 23.5482ZM20.5634 15.8866C19.7049 15.8866 18.8572 16.1584 18.1834 16.68C17.3575 17.3211 16.8793 18.2666 16.8793 19.2665C16.8793 20.2662 17.3575 21.2118 18.1834 21.853C19.118 22.5811 20.3787 22.831 21.5633 22.5267L34.0827 19.2774L21.5633 16.0062C21.2372 15.9301 20.9003 15.8866 20.5634 15.8866ZM24.0737 14.9737L36.6039 18.2232C37.7777 18.5275 39.0383 18.2775 39.9838 17.5494C40.8097 16.9082 41.2879 15.9627 41.2879 14.9629C41.2879 13.9631 40.8097 13.0285 39.9838 12.3764C39.0492 11.6483 37.7885 11.3983 36.6039 11.7026L24.0737 14.9737Z" fill="white" />
                                        <path d="M48.5793 10.6924H46.9492V49.2723H48.5793V10.6924Z" fill="white" />
                                        <path d="M10 10.6924H11.6301V49.2723H10V10.6924Z" fill="white" />
                                    </g>
                                </svg>

                                <h5 className=" text-xs text-center">عایق</h5>

                            </div>
                            <div className="w-[25%] flex flex-col items-center lg:p-5 p-1">
                                <svg width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0172 39.6387L30.1421 50L44.267 39.6387C46.4736 38.0257 47.7843 35.427 47.7843 32.6939V14.7046L30.355 10.056L30.1421 10L12.5 14.7046V32.6939C12.5 35.427 13.8105 38.0257 16.0172 39.6387ZM14.1803 32.7051V16.0039L30.1421 11.7474L46.104 16.0039V32.7051C46.104 34.9006 45.0399 36.9952 43.2701 38.2946L30.1421 47.9277L17.0141 38.2946C15.2444 36.9952 14.1803 34.9006 14.1803 32.7051ZM27.3869 32.3241C27.8238 32.7609 28.4062 32.9961 29.0224 32.9961C29.6384 32.9961 30.2209 32.7609 30.6577 32.3241L39.6972 23.2846L38.5099 22.0972L29.4704 31.1367C29.3471 31.26 29.1904 31.3271 29.0224 31.3271C28.8542 31.3271 28.6975 31.26 28.5742 31.1367L22.8951 25.4576L21.7079 26.645L27.3869 32.3241Z" fill="white" />
                                </svg>

                                <h5 className=" text-xs text-center">ایمنی</h5>

                            </div>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-1">
                        <Button border={'border-2 border-white'} title={'معرفی محصول'} url={'/products'} color={'text-white '} hover={'hover:bg-white hover:text-green'} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaQ