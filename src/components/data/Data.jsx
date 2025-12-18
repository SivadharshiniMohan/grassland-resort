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
    icon: <i className="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "21",
  },
  {
    icon: <i className="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "2",
  },

];

export const services = [
  {
    icon: <i className="fa fa-hotel fa-2x text-primary"></i>,
    name: "Luxurious Rooms",
    discription: "Luxurious Executive Rooms with garden-facing views, Family Cottage ideal for small families or groups, Presidential Suites featuring a separate bedroom & living area, Bathtub / Jacuzzi in all Presidential Suites"
  },
  {
    icon: <i className="fa fa-utensils fa-2x text-primary"></i>,
    name: "Dining & Leisure",
    discription: "Multi-cuisine restaurant, swimming pool for families, landscaped gardens, and kids play area for complete relaxation.",
  },
  {
    icon: <i className="fa fa-person-booth fa-2x text-primary"></i>,
    name: "Conference Hall",
    discription: "Professional facilities with theatre, U-shape, and cluster style seating for up to 150 guests with audio-visual support.",
  },
  {
    icon: <i className="fa fa-ring fa-2x text-primary"></i>,
    name: "Events & Celebrations",
    discription: "Beautiful open lawn for up to 1000 guests, perfect for weddings, receptions, and cultural events with scenic backdrop.",
  },
  {
    icon: <i className="fa fa-concierge-bell fa-2x text-primary"></i>,
    name: "Guest Services",
    discription: "In-house laundry, huge parking, airport pick-up/drop, sightseeing tours, and drivers accommodation on request.",
  },
  {
    icon: <i className="fa fa-briefcase fa-2x text-primary"></i>,
    name: "Business Facilities",
    discription: "Banquet hall, board room, work desks, meeting arrangements, and complete conference support for corporate events.",
  },
];

export const facilities = [
  {
    category: "Accommodation",
    icon: <i className="fa fa-bed fa-2x text-primary"></i>,
    items: [
      { icon: <i className="fa fa-home text-primary me-2"></i>, name: "Luxurious Executive Rooms with garden-facing views" },
      { icon: <i className="fa fa-house text-primary me-2"></i>, name: "Family Cottage ideal for small families or groups" },
      { icon: <i className="fa fa-crown text-primary me-2"></i>, name: "Presidential Suites featuring a separate bedroom & living area" },
      { icon: <i className="fa fa-bath text-primary me-2"></i>, name: "Bathtub / Jacuzzi in all Presidential Suites" },
      { icon: <i className="fa fa-tv text-primary me-2"></i>, name: "LCD TV with satellite channels in all rooms" },
      { icon: <i className="fa fa-coffee text-primary me-2"></i>, name: "Tea/Coffee Maker in every room" },
      { icon: <i className="fa fa-ice-cream text-primary me-2"></i>, name: "Mini Fridge in all Presidential Suites" },
      { icon: <i className="fa fa-sofa text-primary me-2"></i>, name: "Comfortable furnishing and modern décor" },
      { icon: <i className="fa fa-wind text-primary me-2"></i>, name: "Air Conditioning" },
      { icon: <i className="fa fa-droplet text-primary me-2"></i>, name: "Complimentary drinking water (replenished daily)" },
      { icon: <i className="fa fa-laptop text-primary me-2"></i>, name: "Work desk, wardrobe, and essential amenities" },
      { icon: <i className="fa fa-bell text-primary me-2"></i>, name: "Room Service (7:00 AM to 11:00 PM)" },
    ]
  },
  {
    category: "Dining & Leisure",
    icon: <i className="fa fa-utensils fa-2x text-primary"></i>,
    items: [
      { icon: <i className="fa fa-utensils text-primary me-2"></i>, name: "Multi-Cuisine Restaurant offering regional, Indian & international dishes" },
      { icon: <i className="fa fa-water text-primary me-2"></i>, name: "Swimming Pool for adults and families to relax and enjoy" },
      { icon: <i className="fa fa-leaf text-primary me-2"></i>, name: "Landscaped Garden for peaceful outdoor sitting" },
      { icon: <i className="fa fa-child text-primary me-2"></i>, name: "Kids Play Area for children to enjoy safely" },
    ]
  },
  {
    category: "Events & Meetings",
    icon: <i className="fa fa-calendar fa-2x text-primary"></i>,
    items: [
      { icon: <i className="fa fa-champagne-glasses text-primary me-2"></i>, name: "Banquet Hall for dinners, gatherings & celebrations" },
      { icon: <i className="fa fa-handshake text-primary me-2"></i>, name: "Board Room for small meetings & discussions" },
      { icon: <i className="fa fa-person-booth text-primary me-2"></i>, name: "Special Arrangements for Conferences & Marriage Events" },
      { icon: <i className="fa fa-theater-masks text-primary me-2"></i>, name: "Stage & décor support" },
      { icon: <i className="fa fa-utensils text-primary me-2"></i>, name: "Catering & seating arrangements" },
      { icon: <i className="fa fa-microphone text-primary me-2"></i>, name: "Modern audio-visual facilities" },
    ]
  },
  {
    category: "Outdoor Event Space",
    icon: <i className="fa fa-tree fa-2x text-primary"></i>,
    items: [
      { icon: <i className="fa fa-ring text-primary me-2"></i>, name: "Large Open Lawn suitable for weddings, receptions & social events" },
      { icon: <i className="fa fa-users text-primary me-2"></i>, name: "Capacity to host up to 1000 guests" },
    ]
  },
  {
    category: "Guest Services",
    icon: <i className="fa fa-concierge-bell fa-2x text-primary"></i>,
    items: [
      { icon: <i className="fa fa-shirt text-primary me-2"></i>, name: "In-house Laundry" },
      { icon: <i className="fa fa-square-parking text-primary me-2"></i>, name: "Huge Parking Space for cars & buses" },
      { icon: <i className="fa fa-person text-primary me-2"></i>, name: "Drivers' Accommodation (at extra cost)" },
      { icon: <i className="fa fa-plane text-primary me-2"></i>, name: "Airport / Railway / Bus Pick-up & Drop (extra cost)" },
      { icon: <i className="fa fa-binoculars text-primary me-2"></i>, name: "Sightseeing Tours on Request (extra cost)" },
      { icon: <i className="fa fa-compass text-primary me-2"></i>, name: "Travel guidance & support" },
    ]
  },
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
  {
    img: room2,
    price: "₹5,999/night",
    name: "Executive Suite",
    shortDescription: "Our Executive Rooms are thoughtfully designed to offer comfort, elegance, and relaxation during your stay at Grasslands Resort.",
    fullDescription: "Our Executive Rooms are thoughtfully designed to offer comfort, elegance, and relaxation during your stay at Grasslands Resort. Each room opens to soothing garden views, allowing you to enjoy the calm and refreshing atmosphere of nature right from your window. The interiors feature soft lighting, warm textures, and modern furnishings that provide a peaceful environment whether you are traveling for leisure or business. With a comfortable king-size bed, a cozy sitting area, and essential in-room conveniences, our Executive Rooms ensure a pleasant and memorable stay. Perfect for couples, families, and corporate travellers seeking comfort and value.",
    amenitiesKey: "executive",
    darkbtn: "book now",
    rate: 5999
  },
  {
    img: room3,
    price: "₹7,499/night",
    name: "Presidential Suites",
    shortDescription: "Experience elevated comfort and elegant living in our Presidential Suite, designed for guests who seek extra space, privacy, and luxury.",
    fullDescription: "Experience elevated comfort and elegant living in our Presidential Suite, designed for guests who seek extra space, privacy, and luxury. The suite features a separate bedroom and living area, offering the perfect blend of relaxation and convenience. Enjoy serene views and a warm, inviting ambiance that makes every moment of your stay delightful. The bedroom is furnished with a plush king-size bed complete with premium bedding to ensure restful sleep, while the spacious living room provides a cozy setting for lounging, reading, or hosting a private conversation. The well-appointed bathroom features a Jacuzzi/Bathtub with hot and cold running water—ideal for unwinding after a day of travel or wildlife exploration. Perfect for honeymooners, families, VIP guests, or those simply seeking a more indulgent stay.",
    amenitiesKey: "presidential",
    darkbtn: "book now",
    rate: 7499
  }
];

export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    facility: "bed",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    facility: "bath",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];

export const executiveRoomFacilities = [
  {
    icon: <i className="fa fa-bed text-primary me-2"></i>,
    facility: "King-size Bed",
  },
  {
    icon: <i className="fa fa-wind text-primary me-2"></i>,
    facility: "Air Conditioning",
  },
  {
    icon: <i className="fa fa-wifi text-primary me-2"></i>,
    facility: "Wi-Fi",
  },
  {
    icon: <i className="fa fa-tv text-primary me-2"></i>,
    facility: "Flat-screen TV",
  },
  {
    icon: <i className="fa fa-coffee text-primary me-2"></i>,
    facility: "Tea/Coffee Maker",
  },
  {
    icon: <i className="fa fa-chair text-primary me-2"></i>,
    facility: "Sofa/Seating",
  },
];

export const presidentialRoomFacilities = [
  {
    icon: <i className="fa fa-bed text-primary me-2"></i>,
    facility: "King-size Bed",
  },
  {
    icon: <i className="fa fa-home text-primary me-2"></i>,
    facility: "Living Area",
  },
  {
    icon: <i className="fa fa-wind text-primary me-2"></i>,
    facility: "Air Conditioning",
  },
  {
    icon: <i className="fa fa-bath text-primary me-2"></i>,
    facility: "Jacuzzi/Bathtub",
  },
  {
    icon: <i className="fa fa-wifi text-primary me-2"></i>,
    facility: "Wi-Fi",
  },
  {
    icon: <i className="fa fa-tv text-primary me-2"></i>,
    facility: "Flat-screen TV",
  },
  {
    icon: <i className="fa fa-wine-glass text-primary me-2"></i>,
    facility: "Mini-Bar/Fridge",
  },
  {
    icon: <i className="fa fa-coffee text-primary me-2"></i>,
    facility: "Tea/Coffee Maker",
  },
];

export const executiveAmenities = [
  "King-size bed with high-quality mattress and warm duvets/blankets",
  "Air conditioning",
  "Chair/sofa with coffee/side table",
  "Complimentary toiletries: soap, shampoo, conditioner, body lotion & shower cap",
  "Soft fresh towels",
  "Hair dryer available upon request",
  "Soft slippers",
  "Electric kettle for tea/coffee preparation",
  "Complimentary coffee sachets, tea bags, creamer & sugar",
  "One complimentary packaged drinking water bottle (replenished daily)",
  "Wi-Fi internet access",
  "Flat-screen TV with satellite channels",
  "Wardrobe for storage",
  "Iron available upon request",
  "Work desk with chair — suitable for laptop use and business work",
];

export const presidentialAmenities = [
  "King-size bed with high-quality mattress, duvets and blankets",
  "Separate living area with sofa, chair, and centre/side table",
  "Air conditioning",
  "Complimentary premium toiletries (soap, shampoo, conditioner, body lotion)",
  "Soft fresh towels",
  "Jacuzzi/Bathtub with hot and cold running water",
  "Hair dryer available upon request",
  "Soft slippers",
  "Electric kettle for preparing tea or coffee",
  "Complimentary coffee sachets, tea bags, creamer, and sugar",
  "Complimentary packaged drinking water (replenished daily)",
  "Mini-Bar/Fridge stocked with beverages and snacks (chargeable)",
  "Wi-Fi internet access",
  "Flat-screen TV with satellite channels",
  "Wardrobe for storage",
  "Iron available upon request",
];
