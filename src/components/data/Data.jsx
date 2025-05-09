import mainBanner from "./../../assets/img/main-banner.jpeg";
import banner1 from "./../../assets/img/banner-1.jpeg";
import banner2 from "./../../assets/img/banner-2.jpeg";
import room2 from "./../../assets/img/room-2.jpg";
import room3 from "./../../assets/img/room-3.jpg";
export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  // {
  //   id: 5,
  //   path: "/page",
  //   text: "Page",
  //   subItems: [
  //     {
  //       id: 51,
  //       path: "/booking",
  //       text: "Booking",
  //     },
  //     {
  //       id: 52,
  //       path: "/team",
  //       text: "Our Team",
  //     },
  //     {
  //       id: 53,
  //       path: "/testimonial",
  //       text: "Testimonial",
  //     },
  //   ],
  // },
  {
    id: 5,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: mainBanner,
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    // btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: banner1,
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    // btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: banner2,
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    // btn1: "Our Room",
    btn2: "Book Room",
  },

];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "21",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "2",
  },

];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms",
    discription: "Room Service, Landscaped garden, In-house laundry and Private Car and Bus parking",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food",
    discription: "Multi cuisine Restaurant",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Personal",
    discription: "Board room for personal meeting",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Swimming Pool, Kids Play Area",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Banquet hall, Special Arrangement for Conference with all modern amenities and Marriage Event",
  },

  // {
  //   icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
  //   name: "GYM & Yoga",
  //   discription: "Contrary to popular belief, ipsum is not simply random.",
  // },
];
export const team = [
  {
    image: "../assets/img/team-1.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      {
        name: "Spa & Fitness",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "Event & Party",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "HARMOTI. Near Bagori Range, Kaziranga Assam-782136 ",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+91-9371155550, +91-9854430622",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "grasslandresortskaziranga@gmail.com",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  // {
  //   img: "../assets/img/room-1.jpg",
  //   price: "$110/night",
  //   name: "Junior Suit",
  //   star: [
  //     <small class="fa fa-star text-primary"></small>,
  //     <small class="fa fa-star text-primary"></small>,
  //     <small class="fa fa-star text-primary"></small>,
  //     <small class="fa fa-star text-primary"></small>,
  //     <small class="fa fa-star text-primary"></small>,
  //   ],
  //   description:
  //     "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
  //   yellowbtn: "View Detail",
  //   darkbtn: "book now",
  // },

  {
    img: room2,
    price: "5999/night",
    name: "Executive Suite",
    description:
      "Executive Suite with garden facing Rooms and extra person Rs.999 per head",
    darkbtn: "book now",
    rate:5999
  },
  {
    img:room3,
    price: "7499/night",
    name: "Presidential Suites",
    description:
      "Presidential Suite with one bed room with one living room and extra person Rs.999 per head",
    yellowbtn: "View Detail",
    darkbtn: "book now",
    rate:7499
  },
];

export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    // quantity: 3,
    facility: "bed",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    // quantity: 2,
    facility: "bath",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];
