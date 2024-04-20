function ham(){
    let menu = document.getElementById("hamburger");
    if(menu.style.display === "flex")
    {
     menu.style.display = "none";
    }
    else{
     menu.style.display = "flex";
    }
 }


//  let allprop_arr =[
//     {
//         image: "./images/property-01.jpg",
//         price: 2.264000,
//         type: "Luxury villa",
//         name: "18 Old Street Miami,OR 97219",
//         Bedrooms: 8,
//         Bathrooms: 8,
//         Area: 225,
//         Floor: 3,
//         Parking: 8
//     },
//     {
//         image: "./images/property-02.jpg",
//         price: 1.180000,
//         type: "Luxury villa",
//         name: "54 New Street Florida,OR 27001",
//         Bedrooms: 6,
//         Bathrooms: 5,
//         Area: 450,
//         Floor: 3,
//         Parking: 8

    
//     },
//     {
//         image: "./images/property-03.jpg",
//         price: 1.18000,
//         type: "Luxury villa",
//         name: "26 Mid Street Portland,OR 38540",
//         Bedrooms: 5,
//         Bathrooms: 4,
//         Area: 255,
//         Floor: 3,
//         Parking: 10
    
//     },
//     {
//         image: "./images/property-04.jpg",
//         price: 580.000,
//         type: "Apartment",
//         name: "12 Hope Street Portland,OR 12650",
//         Bedrooms: 4,
//         Bathrooms: 3,
//         Area: 125,
//         Floor: 25,
//         Parking: 2
//     },
//      {
//         image: "./images/property-05.jpg",
//         price: 925.600,
//         type: "Penthouse",
//         name: "34 Hope Street Portland,OR 42680",
//         Bedrooms: 4,
//         Bathrooms: 4,
//         Area: 180,
//         Floor: 38,
//         Parking: 2
//      },
//      {
//         image: "./images/property-06.jpg",
//         price: 450.000,
//         type:"Modern condo",
//         name: "22 Hope Street Portland,OR 15640",
//         Bedrooms: 3,
//         Bathrooms: 2,
//         Area: 165,
//         floor: 26,
//         Parking: 3

//      }

//  ]
  
//  let villalist = document.getElementById('allvilla');
//   allprop_arr.map((prop)=> {
//     console.log('property price is: '+prop.price);
//     console.log('property name is : '+prop.name);
//     const prop_html=`
//     <div class="hh1" >
//     <img src=${prop.image} width="300px" height="300px" alt="imgaeb">
//     <h1>${prop.name}</h1>
//     <p>${prop.price}</p>
//     </div>
//     `
//     villalist.innerHTML += prop_html;
//   })