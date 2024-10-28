// Product.jsx
import React from 'react';
import Item from './Item';

const products = [
    { 
        id: 1, 
        name: 'Home Cleaning', 
        duration: '2 hours', 
        pro: '₹500', 
        og: '₹600', 
        dis: '₹550', 
        img: 'https://img.freepik.com/free-photo/front-view-woman-holding-cleaning-supplies_23-2148587323.jpg?t=st=1730024180~exp=1730027780~hmac=100cea2ed02a5d90fb75c05ece35ba3f42d97b04078bd549b79f026498d85347&w=996', 
        perdis: '8%' 
    },
    { 
        id: 2, 
        name: 'Bathroom Cleaning', 
        duration: '1 hour', 
        pro: '₹300', 
        og: '₹350', 
        dis: '₹320', 
        img: 'https://img.freepik.com/free-photo/person-wearing-protection-gloves_23-2148824683.jpg?t=st=1730135433~exp=1730139033~hmac=f297128d21e3a6579e4e501abaa0d46de4fc376aec25a48f78f9bbe6a34c490b&w=996', 
        perdis: '9%' 
    },
    { 
        id: 3, 
        name: 'Kitchen Cleaning', 
        duration: '2 hours', 
        pro: '₹600', 
        og: '₹700', 
        dis: '₹650', 
        img: 'https://img.freepik.com/free-photo/concept-man-cleaning-his-home_23-2148133397.jpg?t=st=1730135483~exp=1730139083~hmac=3e4b4b2b0c8447103af7f01fb99ddd2725dee0c0ea4fc9d7c7f2eed32b1b6da4&w=996', 
        perdis: '7%' 
    },
    { 
        id: 4, 
        name: 'Cooking (Veg)', 
        duration: '1 hour', 
        pro: '₹400', 
        og: '₹450', 
        dis: '₹420', 
        img: 'https://img.freepik.com/free-photo/side-view-mushroom-frying-with-gas-stove-fire-human-hand-pan_176474-3145.jpg?t=st=1730024118~exp=1730027718~hmac=319e35f909105de8c8c53e110b4dba3de3d381f3462dfe51a52130bb0d6cbf38&w=996', 
        perdis: '7%' 
    },
    { 
        id: 5, 
        name: 'Laundry ', 
        duration: '1.5 hours', 
        pro: '₹200', 
        og: '₹250', 
        dis: '₹220', 
        img: 'https://img.freepik.com/free-photo/woman-holding-laundry-clothing-iron_23-2148386951.jpg?t=st=1730135519~exp=1730139119~hmac=df9fcdc5cfb38a9d803fa10d0641225895524ff1c902350ae30011b10aa7e1e7&w=996', 
        perdis: '12%' 
    },
    { 
        id: 6, 
        name: 'Grocery Shopping', 
        duration: '1 hour', 
        pro: '₹150', 
        og: '₹180', 
        dis: '₹160', 
        img: 'https://img.freepik.com/free-photo/sales-assistant-handing-out-shopping-bag-customer_23-2148672833.jpg?t=st=1730135568~exp=1730139168~hmac=cf24da92a11d7b8bda9f431f154e3686133348c0d04506eeb4ce5f8d65238d26&w=996', 
        perdis: '11%' 
    },
    { 
        id: 7, 
        name: 'Deep Cleaning', 
        duration: '4 hours', 
        pro: '₹1200', 
        og: '₹1500', 
        dis: '₹1300', 
        img: 'https://img.freepik.com/free-photo/young-brunette-woman-sitting-cleaning-products_273609-41420.jpg?t=st=1730135610~exp=1730139210~hmac=bdfd0e51ba002f369db849e0f5892f9f509cc31cb9da5eac55e8fb55eb718d24&w=996', 
        perdis: '13%' 
    }
];



const Product = () => {
  return (
   

    <div className='py-5 px-2 flex  ' >
        {products.map((products) => (
          

    <div className="relative inline-block  cursor-pointer mb-4 mr-4 max-w-[160px]" key={products.id} style={{ minWidth: '160px' }}>
      <a
        className="max-w-[160px] relative my-3 mb-9 group bg-white pb-2 min-w-[10rem] rounded-lg md:w-[9.5rem] !h-[20.75rem] sm:!h-[20.75rem] lg:!h-[20.75rem]"
        href= "/Item"
      >
        <div className="relative rounded-xl bg-gray-200">
          <div className="overflow-hidden rounded-xl text-white border-[0.5px] border-gray-200">
            <img
              alt={products.name}
              data-testid="product-card-image"
              width="200"
              height="200"
              decoding="async"
              className="relative overflow-hidden rounded-lg text-white aspect-square w-full bg-white transition-all duration-400 ease-in-out group-hover:scale-110"
              src={products.img}
              style={{ objectFit: 'contain', color: 'transparent' }}
            />
          </div>
          <div className="z-[100] absolute overflow-hidden text-white rounded right-1.5 bottom-1.5">
            <img
              alt="P3 - Ad.png"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              className="relative overflow-hidden"
              src="https://cdn.zeptonow.com/production///tr:w-120,ar-28-28,pr-true,f-auto,q-80/inventory/product/55a80cdc-a78d-4408-9913-9d89423e171f-P3_-_Ad.png"
              style={{ objectFit: 'contain', color: 'transparent' }}
            />
          </div>
          <div className="z-[100] absolute overflow-hidden text-white top-0 left-0 rounded-tl-xl">
            <img
              alt="P0 - Discount.png"
              loading="lazy"
              width="36.67"
              height="15"
              decoding="async"
              className="relative overflow-hidden"
              src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.7.1/images/offer-tag.svg"
              style={{ objectFit: 'contain', color: 'transparent' }}
            />
            <p
              className="absolute top-0 text-center font-title text-white px-[4px] pt-[1.75px] text-[0.6rem]"
              style={{ width: '36.67px', lineHeight: '15px' }}
            >
              {products.perdis} Off
            </p>
          </div>
        </div>
        <div className="!h-8 px-1">
          <div className="mt-2">
            <h5
              className="font-subtitle text-lg tracking-wider py-1 line-clamp-2 !text-sm !font-medium !h-8 px-0.5 !tracking-normal"
              data-testid="product-card-name"
            >
              {products.name} 
            </h5>
          </div>
          <span data-testid="product-card-quantity">
            <h4 className="font-heading text-lg tracking-wide line-clamp-1 mt-1 !text-xs sm:!text-sm px-0.5 !font-normal">
              {products.duration}
            </h4>
          </span>
          <div className="my-2 flex h-7 items-center gap-x-1 rounded bg-[rgba(255,247,218,1)] p-1">
            <svg
              fill="none"
              height="18"
              viewBox="0 0 12 14"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M6 12.5C9.31371 12.5 12 9.81371 12 6.5C12 3.18629 9.31371 0.5 6 0.5C2.68629 0.5 0 3.18629 0 6.5C0 8.56414 1.04233 10.3848 2.62936 11.4645V3.80168C2.65431 3.62648 2.7416 3.46617 2.87519 3.35019C3.00879 3.23422 3.17972 3.17037 3.35658 3.17037C3.53345 3.17037 3.70438 3.23422 3.83798 3.35019C3.97157 3.46617 4.05886 3.62648 4.08381 3.80168V3.89355C4.68535 3.35093 5.46848 3.05389 6.27836 3.06118C8.18275 3.06118 9.62435 4.60832 9.62435 6.56705C9.62435 8.52579 8.18275 10.0729 6.27836 10.0729C5.47121 10.078 4.6903 9.78635 4.08381 9.25342V12.1875C4.68554 12.3902 5.32994 12.5 6 12.5ZM6.12043 4.40988C7.25718 4.40988 8.15704 5.33595 8.15704 6.56705C8.15704 7.79815 7.25718 8.72424 6.12043 8.72424C4.98367 8.72424 4.08381 7.79815 4.08381 6.56705V6.47335C4.12421 5.29737 4.98367 4.40988 6.12043 4.40988Z"
                fill="url(#paint0_linear_3164_33378)"
                fillRule="evenodd"
              ></path>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_3164_33378"
                  x1="6"
                  x2="6"
                  y1="0.5"
                  y2="12.5"
                >
                  <stop stopColor="#E4A90F"></stop>
                  <stop offset="1" stopColor="#CB8F02"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p className="flex items-center  gap-x-1 text-heading8">
              <span>Get for </span>
              <span>{products.pro}</span>
            </p>
          </div>
          
          <div className="relative  px-1.5">
      {/* Price and Original Price */}
      <div className="flex h-8 gap-1 sm:h-10 items-end">
        <h4
          className="font-heading text-lg tracking-wide line-clamp-1 !text-sm md:!text-sm lg:!text-md !font-semibold !m-0"
          data-testid="product-card-price"
        >
          {products.dis}
        </h4>
        <p className="font-body text-xs line-clamp-1 !m-0 ml-1 !text-3xs text-skin-primary-void/40 line-through sm:!text-2xs sm:!mb-[0.08rem] md:!mb-[0.175rem]">
          {products.og}
        </p>
      </div>

      {/* Add to Cart Button */}
      <button
        className="border-skin-primary border bg-purple-900 text-skin-primary bg-skin-base mt-1 h-full !text-xs sm:!text-base !w-full !h-9 flex items-center justify-center rounded p-2 text-sm tracking-normal"
        type="button"
        aria-label="Add"
        data-testid="product-card-add-btn"
      >
        <div className="flex items-center  justify-center">
          <span className="text-2xs font-semibold text-white  sm:text-xs md:text-sm lg:text-md !font-bold">
            Add to Cart
          </span>
        </div>
      </button>
    </div>
        </div>
      </a>
    </div>
    ))}
    </div>
    
  );
};

export default Product;
