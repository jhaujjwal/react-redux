import React from 'react'
import  './Home.css'
const Home = () => {
    return (
        <div>
            <div className='addto-cart'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPmDXoBSs9p5phE_ouQda9RYxK7HsYtbyUw&usqp=CAU' />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1617135051000" />
                </div>
                <div className='text-wrapper'>
                    <span>
                        I-Phone 12
                        </span>
                </div>
                <div className='text-wrapper'>
                    <span>
                        Price : $1000
                    </span>
                </div>
                <div className='btn-wrapper'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home