const Hero = () => {
    return(
        <main className="hero container">
            <div className="heroContent">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="buttons">
                <button className="btn"><b>Shop Now</b></button>
                <button className="btn-2"><b>Category</b></button>
                </div>

                <div className="shop">
                    <p>Also Available On</p>
                    <div className="shopIcons">
                        <img src="/images/flipkart.png" alt="flipkart" title="flipkart"/>
                        <img src="/images/amazon.png" alt="amazon" title="amazon"/>
                    </div>
                </div>
            </div>
            <div className="heroImage">
                <img src="/images/shoe_image.png" alt="shoe_image" />
            </div>
        </main>
    )
}
export default Hero;