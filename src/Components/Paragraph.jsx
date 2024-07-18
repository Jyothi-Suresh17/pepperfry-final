import { faTruckFast ,faLocationDot,faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Paragraph() {
  return (
    <>

    <div className="container container-fluid">
      <div className="row rowShip d-flex justify-content-center align-items-center mt-5 me-2">

        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center ">
          <div className="icon me-1">
          <FontAwesomeIcon icon={faTruckFast} size='xl' style={{color:'#ab7b38'}}/>
          </div>
          <div className="  text">
            <h6 className='text-secondary'>10 Million Happy Deliveries </h6>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center ">
          <div className="icon me-1">
          <FontAwesomeIcon icon={faLocationDot} size="xl" style={{color:'#ab7b38'}}/>
          </div>
          <div className="  text">
            <h6 className='text-secondary'>200+ Stored Across 100+ Cities </h6>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center ">
          <div className="icon me-1">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" style={{color:'#ab7b38'}} />
          </div>
          <div className="  text">
            <h6 className='text-secondary'>7 Day Easy Return Policy </h6>
          </div>
        </div>
          </div>
        </div>
        <div className="col-md-1"></div>

       

        

      </div>

      <div className="row rowPara mt-5 me-2">

        <p className='fw-bolder mt-3 ' style={{fontSize:'12px'}}>Pepperfry: Your One-Stop Online Furniture Store</p>
        <p style={{fontSize:'12px'}} >Whether you’ve fulfilled your lifelong dream of buying your own home or are a renter excited to decorate your personal space, home décor and furniture can help you create a residence that reflects your tastes and sensibilities.</p>

        <p className='mt-2' style={{fontSize:'12px'}}>The right pieces of furniture can not only personalize a space, but they also make everyday life much more pleasant. Imagine, waking up in a bed that provides the most restful night’s sleep. Or experiencing the joy that comes from cooking meals for loved ones in a kitchen designed to your liking.</p>
        <p className='mt-2' style={{fontSize:'12px'}}>Pepperfry understands the value home décor and furniture can impart to your space. We recognize that apart from being functional and utilitarian, furniture can hold sentimental value that enriches your life. To make living in your home a dream come true, we offer a wide variety of furniture and home décor items that can meet all your requirements and much more.</p>
        <p className='mt-2' style={{fontSize:'12px'}}>As a furniture store that prioritizes quality, we are constantly pushing the envelope to enable you to find pieces that catch your eye and pull at your heartstrings.</p>

        {/* second */}
        <p className='fw-bolder mt-3 ' style={{fontSize:'12px'}}>Find Furniture Shop That Helps Turn a House into Your Home</p>
        <p style={{fontSize:'12px'}}>Gone are the days when you had to spend copious amounts of time wandering through furniture store after furniture store, looking for unique and useful pieces. Shopping with us can help you find premium-quality furnishings to set up every area of your home.</p>

        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>For the living room:</span> Looking for comfortable sofa sets that make lounging in your living room a delight? We have you covered! From plush multiple seater sofas to cosy futon couches, we have it all. To create a complete look, we also offer a range of accompanying sofa chairs. If relaxation is a priority, look at our collection of aesthetically pleasing and restful recliner chairs and sofas. Pick from our collection of centre tables and side tables to maximize convenience for anyone who visits your home. Add in a couple of our pouffes, stools, and footstools, and you’ve got a seating arrangement that is comfort personified.</p>

        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>For your dining room: </span>: Getting ready to host parties and entertain guests? Choose from our line of dining tables that’ll add a touch of finesse to your events. Or pick a dining set and create a cosy nook for you and your loved ones to share an intimate meal together.</p>

        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>For your bedroom </span>:If your heart is set on creating a bedroom that is your private sanctuary, we have just what you need. From beds of all sizes and across design styles to mattresses designed to help you sleep peacefully, we enable you to pick and choose to create a bedroom that is yours to the tee. Whether you like to dress efficiently or in a leisurely manner, we have closets and wardrobes that cater to your diverse needs.</p>
        <p style={{fontSize:'12px'}}>If you’re setting up a bedroom for your children, we have furniture that will please their hearts and put a smile on their faces. Functional, fun, and child-safe, at Pepperfry you can find kids’ furniture like bunk beds, bean bags, and everything in between, that could send your little one over the moon.</p>

        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>For your study or office </span>:  On the hunt for sophisticated and formal pieces for your study or office? Find study desks, computer tables, office chairs, and much more at our offline and online furniture store. And if you’re looking for pieces that will elevate your outdoor space, Pepperfry is just the furniture store for you. Whether you want table and chair sets for your lawn or a hammock to lay in, our outdoor collection is at your disposal.</p>

        {/* section 3 */}
        <p className='fw-bolder mt-3 ' style={{fontSize:'12px'}}>Trendy Home Interior Trends Right at Your Fingertips</p>
        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>Elevate your living space</span>:  While choosing the right furniture is a step in the right direction, embellishing your home with tasteful décor is the final touch that makes all the difference. To help you with this, we offer a wide range of home décor items that will elevate the look of your home with elements that reflect your personality.</p>
        <p style={{fontSize:'12px'}}>While the adage goes ‘home is where the heart is’ for some ‘home is where the art is.’ If you’re a patron of the arts, we are a furniture store that encourages your passion and offers myriad solutions to help you display and grow your collection. From photo frames and panels that will dutifully hold your valuable art to ethnic prints, to prints, paintings, figurines, and sculptures that will add to your existing collection, we have it all.</p>

        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>Unleash your green thumb</span>: If you’d like to bring the beauty of nature within the four walls of your home, Pepperfry is the furniture store that will nurture your green thumb. Plant your own little garden by perusing through our collection of planters and pots and picking out plants to your heart’s content.</p>
        <p style={{fontSize:'12px'}}>While the adage goes ‘home is where the heart is’ for some ‘home is where the art is.’ If you’re a patron of the arts, we are a furniture store that encourages your passion and offers myriad solutions to help you display and grow your collection. From photo frames and panels that will dutifully hold your valuable art to ethnic prints, to prints, paintings, figurines, and sculptures that will add to your existing collection, we have it all.</p>
        <p style={{fontSize:'12px'}}>If you’ve got a garden you’d like to rejuvenate, we carry items to decorate your corner of greenery, including everything from tiny knick-knacks to full-sized fountains. And if you can’t keep a plant alive to save your life, we’ve got a vast selection of artificial plants and artificial flowers for you to choose from, so you can enjoy freshness in your home without any worry.</p>

        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>Unleash your green thumb</span>: If you’d like to bring the beauty of nature within the four walls of your home, Pepperfry is the furniture store that will nurture your green thumb. Plant your own little garden by perusing through our collection of planters and pots and picking out plants to your heart’s content.</p>
        <p style={{fontSize:'12px'}}>If you’ve got a garden you’d like to rejuvenate, we carry items to decorate your corner of greenery, including everything from tiny knick-knacks to full-sized fountains. And if you can’t keep a plant alive to save your life, we’ve got a vast selection of artificial plants and artificial flowers for you to choose from, so you can enjoy freshness in your home without any worry.</p>

        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>Fulfil your spiritual needs</span>: You might be hard-pressed to find a furniture shop that considers every facet of your life, including spirituality. However, at Pepperfry, you can rest assured that we’ve thought of it all. Whether you’re looking for festive décor to jazz up your home for the celebrations or temples, idols, and tokens to enrich your daily rituals, we have it all.</p>

        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>Awaken the chef within</span>:Since the cornerstone of any home is the kitchen, how you decorate it can have a profound impact on your living experience. As a furniture shop, we offer utensils and kitchenware that make preparing and serving meals an experience that is delightful and memorable.</p>
        <p style={{fontSize:'12px'}}>Whether you’re looking for durable cookware and bakeware like pots, pans, tins, and moulds, or exquisite dinner sets and premium cutlery, we meet all your culinary requirements.</p>
        <p style={{fontSize:'12px'}}>If you want to set up a bar area, we offer a selection of glasses, shakers, bar stools, carafes, and more items than you ever imagined. From essentials like salt and pepper shakers to ornamental furnishings like table linens, with us you can find anything you could want for your kitchen.</p>

        {/*section 3 */}

        <p className='fw-bolder mt-3 ' style={{fontSize:'12px'}}>From Furnishing to Lighting, Find Everything at Once</p>
        <p style={{fontSize:'12px'}}>Unlike most furniture shops, we believe in helping you set up your space holistically and extend ourselves to cover every aspect of setting up your home. We offer a plethora of furnishing options, including bed sheets and bed linens of different sizes. From matching sets to individual pieces, you can pick as per your preference and set up your bedding in colours and styles you find soothing.</p>
        
        <p style={{fontSize:'12px'}}>We also carry a vast collection of cushion covers and quilts that make sleeping as stylish as it is restful. Whether you’re looking for carpets to cover up awkward floor space or runners to embellish your corridors, we are one of the few home décor stores that can help you tick everything off your shopping list.</p>

        <p style={{fontSize:'12px'}}>As anyone with even the slightest experience will tell you, lighting can make or break the overall look and feel of a space. As a home décor store, we not only understand this sentiment, but also offer lighting solutions designed to elevate your home’s aesthetics.</p>

        <p style={{fontSize:'12px'}}>Whether you’re looking for floor lighting to set an ambience or ceiling lighting to add a touch of elegance, you can find ample options at our furniture showroom. From modern LED lights to smart lighting for efficient energy use, we take brightening your home to a whole new level.</p>

        {/* section 4 */}
        <p className='fw-bolder mt-3 ' style={{fontSize:'12px'}}>Find Ways to Embrace the New and Efficient for your Home!</p>
        <p style={{fontSize:'12px'}}>Today, appliances and gadgets have become an indispensable part of life, including your home. Thinking of cooking up a storm? Opt for a food processor to chop up vegetables galore. Craving a late-night meal? Heat up leftovers in the microwave and dig in.</p>


        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>Top-of-the-line gadgets:</span> At Pepperfry, we carry a range of top-of-the-line gadgets, including food processors, microwaves, fryers, cooktops, and much more. If you’re fond of showering in hot water, we have a selection of geysers to choose from.</p>

        <p style={{fontSize:'12px'}}><span className='fw-bolder mt-2'>Smart solutions to heat and cold:</span> From heaters to provide comfort during the winters to fans that cool during the warmer months, at Pepperfry we offer a vast collection of appliances that are smart solutions to life’s various hassles.</p>

        {/* section 5 */}
        <p className='fw-bolder mt-3 ' style={{fontSize:'12px'}}>Why Shopping with Pepperfry Can Make Creating Your Space the Perfect Experience</p>
        <p style={{fontSize:'12px'}}>At Pepperfry, we are more than equipped to help you find anything and everything you require to create a home that is a dream to live in. We offer an unprecedent variety in products in almost every category. Whether you’re looking for unique styles, cohesive textures and colours, or items that fall within a specific price range, we have it all.</p>

        <p style={{fontSize:'12px'}}>We also enable you to shop for your home without having to put a dent in your savings. We are an offline and online furniture store that helps you purchase items for your home at a reasonable price, with discounts popping up regularly.</p>

        {/* section 6 */}
        <p className='fw-bolder mt-3 ' style={{fontSize:'12px'}}>Enjoy Online or In-Store Shopping Experience</p>

        <p style={{fontSize:'12px'}}>Since we are an offline and online furniture store, you can shop with us as per your liking. You could walk into one of our furniture showrooms and handpick items for your home or opt for online furniture shopping to avoid any hassle.</p>

        <p style={{fontSize:'12px'}}>If you want to continue furniture shopping online, you can rely on our easy-to-use website and peruse through our entire catalogue from the comfort of your home. With our clean interface and easily navigable website, furniture shopping online has never been easier.</p>

        <p style={{fontSize:'12px'}}>Regardless of whether you choose to shop for home furniture online or offline, we do everything we can to assist you in creating a space you would be proud to call home.</p>


        





      </div>
    </div>
    </>
  )
}

export default Paragraph