function navbar(){
    return ` <div id="main">
    <div id="top_options">
        <div id="first_dropdwn">Save big with our app!
                         
  <div id="first_dropdwn_main">
    <div id="first_dropdwn_mainn">
        <div>Get exclusive app deals and discounts, download our app & SAVE</div>
        <div id="qr_code_div">
            <div>
                <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png" alt="">
            </div>
            <div id="second_qr_code_div">
                <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg" alt="">
                <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg" alt="">
                <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg" alt="">
            </div>
        </div>
        <div>Go to mobile site</div>
    </div>
  </div>
        </div>

  
        <div id="second_dropdwn">
            <button id="second_dropbtn_btn">Language ▼</button>
            <div class="dropdown-content" style="overflow-y: scroll;">
              <a href="#">English</a>
              <a href="#">Chinese</a>
              <a href="#">Persian</a>
              <a href="#">Russian</a>
              <a href="#">Portuguese</a>
              <a href="#">Turkish</a>
              <a href="#">Italian</a>
              <a href="#">French</a>
              <a href="#">Spanish</a>
              <a href="#">Korean</a>
            </div>
          </div>
          <div id="third_dropdwn">
            <button id="third_dropbtn_btn">Support Center ▼</button>
            <div class="dropdown-content" style="height:100px">
              <a href="#">Live Chat</a>
              <a href="#">Ticket </a>
              <a href="#">Help Center</a>
            </div>
          </div>
    </div>
    <div id="top_navbar_second">
        <div id="top_navbar_second_img">
            <img src="https://content1.geekbuying.com/V1.4/en/images/indexV7/Geekbuying.png" alt="">
        </div>
        <div id="top_navbar_second_search">
            <select name="" id="">
                <option value="">All Categories</option>
                <option value="">Smart Home & Garden</option>
                <option value="">Phones & Accessories</option>
                <option value="">Wearable devices</option>
                <option value="">Automobiles & Motorcycles</option>
            </select>
            
            <input type="text" placeholder="Search by keywords">
            

        </div>
        <div id="top_navbar_second_address">
            <p>Ship to</p>
            <div>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="">
            <p>/ INR </p>
            <div id="test">
            <div id="shipToBox">
                <h5>Select Regional settings</h5>
                <p>Ship to</p>
                <select name="" class="country_select">
                    <option value="">India</option>
                    <option value="">China</option>
                    <option value="">USA</option>
                    <option value="">China</option>
                    <option value="">Thailand</option>
                    <option value="">Japan</option>
                    <option value="">Malaysia</option>
                    <option value="">Vietnam</option>
                    <option value="">South Korea</option>
                    <option value="">Singapore</option>
                </select>
                <p>Currency</p>
                <select name="" class="country_select">
                    <option value="">INR ₹</option>
                    <option value="">USD $</option>
                    <option value="">EUR €</option>
                    <option value="">JPY ¥</option>
                    <option value="">NZD NZ$</option>
                    <option value="">CHF CHF</option>
                    <option value="">HUF Ft</option>
                    <option value="">PHP ₱</option>
                    <option value="">UAH ₴</option>
                </select>
                <button>Save</button>
                </div>
            </div>
            
        </div>
        </div>
        <div id="top_navbar_second_user">
            <img src="https://us.123rf.com/450wm/ylivdesign/ylivdesign1510/ylivdesign151000120/46153782-profile-icon-white-simple-image-isolated-on-blue-background.jpg?ver=6" alt="">
            <p>Sign in</p>
        </div>
        <div id="top_navbar_second_cart">
            <img src="https://content1.geekbuying.com/V1.4/en/images/indexV7/cart.png" alt="">
        </div>
    </div>
    <div id="top_navbar_last">
        <div id="top_category">Categories 
            <div id="drop_category">
               <p>Local Warehouses</p>
               <p>Sports and Outdoors</p>
               <p>Smart Home & Garden</p>
               <p>Consumer Electronics</p>
               <p>TV Boxes & Mini PCs</p>
               <p>Computer & Tablets</p>
               <p>Toys & Hobbies</p>
               <p>Phones & Accessories</p>
               <p>Automobiles & Motorcycles</p>
               <p>Wearable devices</p>
               <p>Security Systems</p>
               <p>Fashion</p>
            </div>
        </div>
        <div id="all_options_categories">
        <div>New</div>
        <div>Bestselling</div>
        <div>Brand</div>
        <div>Clearance</div>
        <div>Deals</div>
        <div>Coupons</div>
        <div>App</div>
    </div>
</div>
</div>`
}

export {navbar}