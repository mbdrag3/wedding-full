import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/Registry.css"; // Adjust path as needed

const registryItems = [
        {
            name: "Ninja BW1001 Belgian Waffle Maker PRO NeverStick",
            img: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/22446146_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "T3 Source Hand-Held Mineral Water Filter",
            img: "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8700849_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "tineco GO H2O Sense Cordless Wet/Dry Floor Washer with iLoop Sense Technology and Self-Cleaning Mode (GH303)",
            img: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/29952801_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Lenox Oyster Whiteware 8 Piece Espresso Cup and Saucer Set, Service for 4",
            img: "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/23271459_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "JoyJolt Disney Mickey and Pluto Aroma Glass Espresso Mugs, Set of 2",
            img: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/20533225_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Mackenzie-Childs Rosy Check Salt & Pepper Shakers",
            img: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/29459232_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "simplehuman Tension Arm Paper Towel Holder, Brushed Stainless Steel",
            img: "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/28627948_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Mackenzie-Childs White Flower Market 2-Qt. Tea Kettle",
            img: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/28741097_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "RSVP International Endurance 7 Piece Measuring Cups Set",
            img: "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/28240679_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Oceanstar 3-Piece Bamboo Cutting Board Set",
            img: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/11561727_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Good Grips Extendable Tub & Tile Scrubber",
            img: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/28205857_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Stainless Steel Salad Spinner",
            img: "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/17467109_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Non-Skid Mixing Bowls, Set of 3 White Stainless Steel",
            img: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/926271_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "simplehuman 45L Step Trash Can",
            img: "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/3156910_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Good Grips Stainless Steel Spoon Rest with Lid Holder",
            img: "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18492450_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Good Grips Stainless Steel Squeegee",
            img: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/21752331_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO 15-Pc. Steel Utensil Set",
            img: "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/22032048_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "simplehuman Bath Accessories, Wall Mount Triple Pump",
            img: "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/1364280_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Mikasa Cameo Gold 65 Pc Set, Service for 12",
            img: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/1705975_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Ninja CREAMi, Ice Cream Maker, 7 One-Touch Programs - NC301",
            img: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/19579876_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Mackenzie-Childs Courtly Check Large Colander",
            img: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/28786747_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Bialetti Blue Meditteraneo Dolce & Gabbana 3-Cup Moka Stovetop Coffee Maker",
            img: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/24405536_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Le Creuset 3.5-Qt. Signature Enameled Cast Iron Braiser",
            img: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/17438496_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Caraway Non-Stick Ceramic 12 Piece Cookware Set",
            img: "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/24513623_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Sharper Image Powerboost Pro+ Compact Hot & Cold Percussion Massager",
            img: "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/25998228_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Sharper Image Real Touch Shiatsu Neck Massager",
            img: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/29045081_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Bella 6-Qt. Programmable Slow Cooker",
            img: "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/30023938_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Ninja BL770 Mega Kitchen System Blender & Food Processor",
            img: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8305241_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "SMEG 2-Slice Toaster",
            img: "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/3298428_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "KitchenAid Artisan 5 Qt. Stand Mixer KSM150PS",
            img: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/15737832_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Anchor Hocking 24-Piece Food Storage Set with SnugFit Lids",
            img: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/23441826_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Digital Leave-In Thermometer",
            img: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/9213904_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Good Grips Stainless Steel Sponge Holder",
            img: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/10334692_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Pop 20-Piece Food Storage Container Set",
            img: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/13397827_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Vegetable Chopper with Easy-Pour Opening",
            img: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/13036484_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "OXO Angled Measuring Cup Set",
            img: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/1068581_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Tabletops Unlimited Inspiration by Denmark Amelia 42 Pc. Dinnerware Set, Service for 6, Exclusively at Macy’s",
            img: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/23560315_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "J.A. Henckels HENCKELS Solution 8 Piece Steak Knife Set",
            img: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/17226347_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "Zwilling Twin Gourmet 15-Piece Knife Set, Exclusively at Macy's",
            img: "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/10141580_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        },
        {
            name: "The Cellar Flur Collection 16.9-oz. White Wine Glasses, Set of 4, Exclusively at Macy’s",
            img: "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/29186193_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=302&hei=378"
        }
];

const Registry = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3); // Default to 3 items

    // Detect screen size to adjust carousel
    useEffect(() => {
        const updateVisibleItems = () => {
            setVisibleItems(window.innerWidth < 768 ? 1 : 3);
        };

        updateVisibleItems(); // Run on mount
        window.addEventListener("resize", updateVisibleItems);

        return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? registryItems.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % registryItems.length);
    };

    const getVisibleItems = () => {
        let items = [];
        for (let i = 0; i < visibleItems; i++) {
            items.push(registryItems[(currentIndex + i) % registryItems.length]);
        }
        return items;
    };

    return (
        <div className="registry-container">
            <h1 className="title">Our Wedding Registry</h1>
            <p className="sub-title">We’re so excited to start our wedding registry, and we’ve chosen to do it at Macy’s! With their wide selection of home essentials, stylish décor, and kitchen must-haves, we know we’ll find everything we need to start our new life together. We can’t wait to celebrate with our loved ones and share this special journey! </p>
            <p><strong>For those who wish to contribute in a more personal way, we would be truly grateful for gifts toward our future home fund.</strong></p>

            {/* Carousel Wrapper */}
            <div className="carousel">
            <button className="carousel-button left" onClick={prevSlide}>
                <FaChevronLeft />
            </button>


                <div className="carousel-track">
                    {getVisibleItems().map((item, index) => (
                        <div key={index} className="registry-item">
                            <a href="https://www.macys.com/registry/yaimarys-Acosta-Michael-Drag/2545851" target="_blank" rel="noopener noreferrer">
                            <img src={item.img} alt={item.name} />
                            </a>
                            <h3>{item.name}</h3>
                      </div>
                    ))}
                </div>

                <button className="carousel-button right" onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>

            {/* Button below images */}
            <div className="registry-button-container">
                <a
                    href="https://www.macys.com/registry/yaimarys-Acosta-Michael-Drag/2545851"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="registry-button"
                >
                    View Registry on Macy’s
                </a>
            </div>
        </div>
    );
};

export default Registry;