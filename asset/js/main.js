
//Dynamic 

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





//Careers Page    


const request = fetch('https://dummyjson.com/users');
//console.log(request);


const courseBox = document.createElement("div");

request
    .then(res => res.json())
    .then((data) => {
        console.log(data.users[1])

        const careersBoxContainer = document.getElementById('careers-box-container');

        for (i = 0; i < 10; i++) {

            //Creating Elements
            let careerBox = document.createElement("div");
            let careerBoxLeftSide = document.createElement("div");
            let careerBoxRightSide = document.createElement("div");



            let careerBoxNewBadge = document.createElement('span');
            let careerBoxFirstName = document.createElement('h3');

            //Other info
            let careerBoxOtherInfo = document.createElement('div');
            let careerBoxLastName = document.createElement('p');
            let careerBoxMaidenName = document.createElement('p');
            let careerBoxAge = document.createElement('p');
            let careerBoxGender = document.createElement('p');
            let careerBoxBirthDate = document.createElement('p');

            //Apply btn
            let careerBoxBtn = document.createElement('button')


            //Adding class names
            careerBox.classList.add('career-box');
            careerBoxLeftSide.classList.add('left-side');
            careerBoxRightSide.classList.add('right-side');

            careerBoxNewBadge.classList.add('new');

            //Other info
            careerBoxOtherInfo.classList.add('other-info');

            // careerBoxLastName.classList.add('last-name');
            // careerBoxMaidenName.classList.add('maiden-name');
            // careerBoxAge.classList.add('age');
            // careerBoxGender.classList.add('gender');
            // careerBoxBirthDate.classList.add('b-date');


            //Adding data
            careerBoxNewBadge.textContent = "New"
            careerBoxFirstName.textContent = data.users[i].firstName;
            careerBoxLastName.textContent = "Last Name: " + data.users[i].lastName;
            careerBoxMaidenName.textContent = "Maiden Name: " + data.users[i].maidenName;
            careerBoxAge.textContent = "Age: " + data.users[i].age;
            careerBoxGender.textContent = "Gender: " + data.users[i].gender;
            careerBoxBirthDate.textContent = "Birth Date: " + data.users[i].birthDate;

            careerBoxBtn.textContent = "Apply Now"


            //Main Container
            careersBoxContainer.appendChild(careerBox);

            //Course container
            careerBox.appendChild(careerBoxLeftSide);
            careerBox.appendChild(careerBoxRightSide);


            //left side
            careerBoxLeftSide.appendChild(careerBoxNewBadge);
            careerBoxLeftSide.appendChild(careerBoxFirstName);
            careerBoxLeftSide.appendChild(careerBoxOtherInfo);

            //other info
            careerBoxOtherInfo.appendChild(careerBoxLastName);
            careerBoxOtherInfo.appendChild(careerBoxMaidenName);
            careerBoxOtherInfo.appendChild(careerBoxAge);
            careerBoxOtherInfo.appendChild(careerBoxGender);
            careerBoxOtherInfo.appendChild(careerBoxBirthDate);


            //Right Side
            careerBoxRightSide.appendChild(careerBoxBtn);

        }


    })
