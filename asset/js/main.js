

// const request = fetch('https://dummyjson.com/users')

// request.then(response => response.json()).then(data=>{

//     console.log(data)

//         let i = 0;

//         while (i < 4) {

//             const listImage= document.createElement('img');
//             const listItemName= document.createElement('h3');
//             const listItemSpan= document.createElement('span');

//            const userList=document.getElementById('specialist-box');

//             listItemName.textContent = data.users[i].firstName
//             listItemSpan.textContent = data.users[i].lastName
//             listImage.src = "./asset/img/doctors/d2.png"

//             // userList.classList.add('specialist-box');

//             // userList.classList.add('specialist-container')
//             userList.appendChild(listImage)
//             userList.appendChild(listItemName)
//             userList.appendChild(listItemSpan)


//             i++;
//         }


// }).catch(error => console.log(error));







// const request = fetch("https://dummyjson.com/users");
// console.log(request);

// const mainDiv = document.querySelector(".specialist-box");
// request
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     data.users.forEach((user) => {
//       const nestedDivBody = document.createElement("div");
//       nestedDivBody.className = "spe-body-1";

//       const nestedDivImg = document.createElement("div");
//       nestedDivImg.className = "spe-body-img";

//       const nestedDivTitle = document.createElement("div");
//       nestedDivBody.className = "spe-body-title";

//       const nestedDivImgSrc = document.createElement("img");
//       nestedDivImgSrc.src = user.image;

//       const nestedDivTitleH3 = document.createElement("h3");
//       nestedDivTitleH3.textContent = user.firstName;

//       const nestedDivTitleP = document.createElement("p");
//       nestedDivTitleP.textContent = user.company.department;

//       nestedDivImg.appendChild(nestedDivImgSrc);
//       nestedDivTitle.appendChild(nestedDivTitleH3);
//       nestedDivTitle.appendChild(nestedDivTitleP);

//       nestedDivBody.appendChild(nestedDivImg);
//       nestedDivBody.appendChild(nestedDivTitle);

//       mainDiv.appendChild(nestedDivBody);
//     });
//   })
//   .catch((error) => console.log(error.message));



//Functional

// const request = fetch('https://dummyjson.com/users');
// console.log(request);


// let a = [];


// request
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)
//         data.users.forEach((user, index) => {
//             if (index < 4) {
//                 console.log(user.firstName);
//                 a.push(user);
//                 console.log(a[index].firstName)
//             }
//         })


//         document.getElementById("d-name-1").textContent = `${a[0].firstName}`;
//         document.getElementById("d-name-2").textContent = `${a[1].firstName}`;
//         document.getElementById("d-name-3").textContent = `${a[2].firstName}`;
//         document.getElementById("d-name-4").textContent = `${a[3].firstName}`;
//         document.getElementById("d-img-1").src = `${a[0].image}`;
//         document.getElementById("d-img-2").src = `${a[2].image}`;
//         document.getElementById("d-img-3").src = `${a[3].image}`;
//         document.getElementById("d-img-4").src = `${a[1].image}`;
//     })





//Dynamic 

const request = fetch('https://dummyjson.com/users');
console.log(request);


let a = [];


request
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        data.users.forEach((user, index) => {
            if (index < 4) {
                console.log(user.firstName);
                a.push(user);
                console.log(a[index].firstName)
            }
        })


        document.getElementById("d-name-1").textContent = `${a[0].firstName}`;
        document.getElementById("d-name-2").textContent = `${a[1].firstName}`;
        document.getElementById("d-name-3").textContent = `${a[2].firstName}`;
        document.getElementById("d-name-4").textContent = `${a[3].firstName}`;
        document.getElementById("d-img-1").src = `${a[0].image}`;
        document.getElementById("d-img-2").src = `${a[2].image}`;
        document.getElementById("d-img-3").src = `${a[3].image}`;
        document.getElementById("d-img-4").src = `${a[1].image}`;
    })





//Careers Page   
 
