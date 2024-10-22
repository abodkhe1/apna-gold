import React from 'react'
import banner from '../assets/banner.jpg';
import Signup from './Signup';
function Home() {

    const items = [
        {
            image: 'https://freemen.in/cdn/shop/products/IMG-20210530-WA0014.jpg?v=1622366430',
            title: 'Gold Chain Ring 1',
            description: 'This is a beautiful gold chain ring, perfect for any occasion.',
        },
        {
            image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/376715197/DF/LQ/RF/105252169/31-02g-male-gold-chain.jpeg',
            title: 'Gold Chain Ring 2',
            description: 'Elegant and stylish, this gold chain ring will complement any outfit.',
        },
        {
            image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380778526/NR/JK/YR/203181780/whatsapp-image-2024-01-27-at-09-44-08-5.jpeg',
            title: 'Gold Chain Ring 3',
            description: 'A classic design, this gold chain ring is a must-have for any jewelry collection.',
        },
    ];
    return (
        <>
            <div
                class="
          bg-white
        "
            >
                {/* <h1 class="text-2xl font-medium">Responsive Navbar with TailwindCSS</h1>
             */}
                <img src={banner} style={{ width: '100%', height: '400px' }} alt="" />
            </div>
            <div id='about'>
                <div className="row p-2">
                    <div className="col-md-12">
                        <h2 className="text-center font-bold text-4xl">
                            <u>About</u>
                        </h2>
                        <p className='p-3 mx-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam aliquam omnis, totam quis dicta velit nam fugit corporis? Aliquid voluptate enim, nam totam voluptates itaque recusandae dolorum qui, laboriosam cumque laborum ipsa labore quos porro! Quod, illo, inventore aliquid deleniti non aperiam consectetur laudantium impedit dolorum quam asperiores voluptatibus quo beatae obcaecati quasi tempore? Modi architecto soluta repellat quae sequi saepe exercitationem porro doloribus facere provident vero numquam accusamus laborum omnis similique, ipsam, ad neque quasi inventore obcaecati.</p>
                        <p className='p-3 mx-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam aliquam omnis, totam quis dicta velit nam fugit corporis? Aliquid voluptate enim, nam totam voluptates itaque recusandae dolorum qui, laboriosam cumque laborum ipsa labore quos porro! Quod, illo, inventore aliquid deleniti non aperiam consectetur laudantium impedit dolorum quam asperiores voluptatibus quo beatae obcaecati quasi tempore? Modi architecto soluta repellat quae sequi saepe exercitationem porro doloribus facere provident vero numquam accusamus laborum omnis similique, ipsam, ad neque quasi inventore obcaecati.</p>



                    </div>
                    {/* <div className="col-md-6"></div> */}
                </div>
            </div>
            <h2 className="text-center font-bold text-4xl">
                <u>Product</u>
            </h2>
            <div className="flex flex-wrap justify-center bg-gradient-to-r from-white-400 via-white-500 to-white-600 py-10">

                {items.map((item, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 group">
                        <div className="overflow-hidden">
                            <img className="w-full h-48 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" src={item.image} alt={item.title} />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700 text-base">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
       <Signup/>
        </>
    )
}
export default Home;