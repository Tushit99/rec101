import React from "react";

const girls = [
  {
    id: 824,
    image:
      "https://www.jcrew.com/s7-img-facade/AZ817_SU7930?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Kids' cashmere crewneck sweater",
    price: "11447",
    item: "AZ817",
    productdescription:
      "Even kids need (or, OK, want) cashmere, so we crafted our best-selling crewneck sweater in our coziest fabric and in an array of colors. This classic style is one they can wear (and love), then pass down to a little sis or brother. We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
  },
  {
    id: 2000,
    image:
      "https://www.jcrew.com/s7-img-facade/BH046_YD1664?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Girls' ruffle tank dress",
    price: "8912",
    item: "Item BH046",
    productdescription:
      "This item contains a sustainable material, like organic cotton, recycled polyester, or with certifications like Fair Trade.",
  },
  {
    id: 2001,
    image:
      "https://www.jcrew.com/s7-img-facade/BH046_YD0832?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Girls' ruffle tank dress",
    price: "8912",
    item: "Item BH046",
    productdescription:
      "This item contains a sustainable material, like organic cotton, recycled polyester, or with certifications like Fair Trade.",
  },
  {
    id: 2002,
    image:
      "https://www.jcrew.com/s7-img-facade/BH056_BL7246?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Girls' ruffle-shoulder dress with eyelet trim",
    price: "1194",
    item: "Item BH056",
    productdescription:
      "This item contains a sustainable material, like organic cotton, recycled polyester, or with certifications like Fair Trade",
  },
  {
    id: 2003,
    image:
      "https://www.jcrew.com/s7-img-facade/BH056_NA6434?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Girls' ruffle-shoulder dress with eyelet trim",
    price: "1194",
    item: "Item BH056",
    productdescription:
      "Talk about twirl-worthy! She'll love the fun ruffle details (that create a flutter-sleeve effect!) of this sweet dress (perfect for dinner at Nana's or her role as flower girl!), and you'll love that it's machine washable. Plus, it has pom-poms! By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
  },
  {
    id: 2004,
    image:
      "https://www.jcrew.com/s7-img-facade/BH056_PK5748?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
    name: "Girls' ruffle-shoulder dress with eyelet trim",
    price: "10194",
    item: "Item BH056",
    productdescription:
      "Talk about twirl-worthy! She'll love the fun ruffle details (that create a flutter-sleeve effect!) of this sweet dress (perfect for dinner at Nana's or her role as flower girl!), and you'll love that it's machine washable. Plus, it has pom-poms! By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
  },
  {
    id: 2005,
    image:
      "https://www.jcrew.com/s7-img-facade/BH057_BL7246?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Girls' tie-shoulder dress",
    price: "10194",
    item: "Item BH057",
    productdescription:
      "She'll love the fun ruffle details and shoulder ties of this sweet dress (perfect for dressier dinners out), and you'll love that it's machine washable. Plus, we sewed the ties at the shoulders together, so they won't come undone. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
  },
  {
    id: 2006,
    image:
      "https://www.jcrew.com/s7-img-facade/BH047_PT1242?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Girls' tie-shoulder dress in clementine print",
    price: "7630",
    item: "Item BH047",
    productdescription:
      "For your next warm-weather getaway...this tie-shoulder dress in a sweet clementine print",
  },
  {
    id: 2007,
    image:
      "https://www.jcrew.com/s7-img-facade/BH064_PT2056_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Girls' tie-shoulder dress in shiny stripe",
    price: "9617",
    item: "Item BH064",
    productdescription:
      "This item contains a sustainable material, like organic cotton, recycled polyester, or with certifications like Fair Trade.",
  },
  {
    id: 2008,
    image:
      "https://www.jcrew.com/s7-img-facade/BH064_YD1617?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Girls' tie-shoulder dress in shiny stripe",
    price: "9617",
    item: "Item BH064",
    productdescription:
      "This item contains a sustainable material, like organic cotton, recycled polyester, or with certifications like Fair Trade.",
  },
  {
    id: 2009,
    image:
      "https://www.jcrew.com/s7-img-facade/AZ751_SU8803?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Kids' cashmere pullover hoodie",
    price: "12535",
    item: "AZ751",
    productdescription:
      "Even kids need (or, OK, want) cashmere, so we crafted our best-selling crewneck sweater in our coziest fabric and in an array of colors. This hoodie style is one they can wear (and love), then pass down to a little sis or brother. We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
  },
  {
    id: 826,
    image:
      "https://www.jcrew.com/s7-img-facade/AZ817_PR5982?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Kids' cashmere crewneck sweater",
    price: "847",
    item: "AZ817",
    productdescription:
      "Even kids need (or, OK, want) cashmere, so we crafted our best-selling crewneck sweater in our coziest fabric and in an array of colors. This classic style is one they can wear (and love), then pass down to a little sis or brother. We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
  },
  {
    id: 827,
    image:
      "https://www.jcrew.com/s7-img-facade/BA044_SU8165?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Kids' cashmere crewneck sweater in stripe",
    price: "9208",
    item: "BA044",
    productdescription:
      "Even kids need (or, OK, want) cashmere, so we crafted our best-selling crewneck sweater in our coziest fabric and in an array of colors. This classic style is one they can wear (and love), then pass down to a little sis or brother. We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
  },
  {
    id: 828,
    image:
      "https://www.jcrew.com/s7-img-facade/BA810_NA6434?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Kids' cashmere hoodie in stripe",    
    price: "12535",  
    item: "BA810",  
    productdescription: 
      "This cute and classic cardigan is made from supersoft cashmere in a bunch of amazing colors, and it's perfect for school days, the weekends...whenever! To maximize hand-me-down potential, we recommend hand-washing rather than dry-cleaning, and handling with a little extra care. (Little sis will thank you for it.) We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
  },
  {
    id: 829,
    image:
      "https://www.jcrew.com/s7-img-facade/BB174_SU8477?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Kids' cashmere hoodie in stripe",
    price: "12535",
    item: "BB174",
    productdescription:
      "Even kids need (or, OK, want) cashmere, so we crafted our best-selling sweater in our coziest fabric and in an array of colors. This cozy hoodie style is one they can wear (and love), then pass down to a little sis or brother. Just like Dad's, this sweater is perfect for layering when it's chilly, even with shorts in the warmer months. We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
  },
  {
    id: 830,
    image:
      "https://www.jcrew.com/s7-img-facade/BA044_SU7600?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Kids' cashmere crewneck sweater in stripe",
    price: "9208",
    item: "BA044",
    productdescription:
      "Even kids need (or, OK, want) cashmere, so we crafted our best-selling crewneck sweater in our coziest fabric and in an array of colors. This classic style is one they can wear (and love), then pass down to a little sis or brother. We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
  },
  {
    id: 931,
    image:
      "https://www.jcrew.com/s7-img-facade/BC691_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Kids' long-sleeve cashmere polo shirt",
    price: "12535",
    item: "BC691",
    productdescription:
      "Even kids need (or, OK, want) cashmere, so we crafted a button-collar sweater in our coziest fabric. This classic style is one they can wear (and love), then pass down to a little bro. We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
  },
  {
    id: 832,
    image:
      "https://www.jcrew.com/s7-img-facade/BC691_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    name: "Kids' long-sleeve cashmere polo shirt",
    price: "12535",
    item: "BC691",
    productdescription:
      "Even kids need (or, OK, want) cashmere, so we crafted a button-collar sweater in our coziest fabric. This classic style is one they can wear (and love), then pass down to a little bro. We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
  },
];

const Girl = () => {
  return (
    <div>
      <h1 className="hom"> Girls </h1>
      <div className="show">
        {girls.map((e) => (
          <div key={e.id} className="dis">
            <img src={e.image} alt="" />
            <h3> Name: {e.name} </h3>
            <h4> Price: {e.price} </h4>
            <h4> Item no.:{e.item} </h4>
          </div>   
        ))}   
      </div>    
    </div>   
  );   
};   

export default Girl;    
