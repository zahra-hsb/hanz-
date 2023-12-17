const Footer = () => {
    return (
        <>
            <footer className="flex flex-col w-full">
                <div className="flex justify-around flex-wrap">
                    <div className="flex justify-around flex-wrap basis-[70%]">
                        <div>
                            <div>
                                <h2>محصولات</h2>
                            </div>
                            <div>
                                <ul>
                                    <li>پنجره</li>
                                    <li>کشویی و تاشو</li>
                                    <li>درب</li>
                                    <li>درب</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>تماس با ما</h2>
                            </div>
                            <div>
                                <ul>
                                    <li>شماره تماس: 02188871502</li>
                                    <li>پست الکترونیکی : info@shayco.net</li>
                                    <li>دفتر مرکزی: تهران، بزرگراه شهید همت، <br />خیابان توانیر شمالی، پلاک 27، واحد، 2​</li>
                                </ul></div>
                        </div>
                    </div>
                    <div className="bg-red basis-[30%]">
                        <div>
                            <div>311</div>
                            <div>312</div>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-center">
                    <div>
                        <p>“ما همراه با شرکای خود، بر ایجاد محصولاتی با انرژی کارآمد و مسئولانه تولید می‌شویم که برای خانه‌ها، ساختمان‌ها و افرادی که به آنها خدمات می‌دهند تفاوت ایجاد می‌کند.”</p>
                    </div>
                    <div>
                        <p>طراحی و پشتیبانی توسط سایت تیم BidaTec</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;