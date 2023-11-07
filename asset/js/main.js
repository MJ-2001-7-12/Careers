
document.addEventListener('DOMContentLoaded', function () {
    const careersBoxContainer = document.getElementById('careers-box-container');

    // Function to populate form fields and navigate to edit.html
    function handleCareerBoxClick(event) {
        if (event.target && event.target.tagName === 'BUTTON') {
            const selectedCareer = event.target.closest('.career-box');
            if (selectedCareer) {
                const firstName = selectedCareer.querySelector('h3').textContent;
                const lastName = selectedCareer.querySelector('.last-name').textContent.replace('Last Name: ', '');
                const maidenName = selectedCareer.querySelector('.maiden-name').textContent.replace('Maiden Name: ', '');
                const age = selectedCareer.querySelector('.age').textContent.replace('Age: ', '');
                const gender = selectedCareer.querySelector('.gender').textContent.replace('Gender: ', '');
                const birthDate = selectedCareer.querySelector('.b-date').textContent.replace('Birth Date: ', '');

                const queryString = `?firstName=${firstName}&lastName=${lastName}&maidenName=${maidenName}&age=${age}&gender=${gender}&birthDate=${birthDate}`;
                window.location.href = `edit.html${queryString}`;
            }
        }
    }

    // Attach the click event to the careersBoxContainer
    careersBoxContainer.addEventListener('click', handleCareerBoxClick);

    // Fetch career data
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => {
            for (let i = 0; i < 10; i++) {
                let careerBox = document.createElement("div");
                let careerBoxLeftSide = document.createElement("div");
                let careerBoxRightSide = document.createElement("div");

                let careerBoxNewBadge = document.createElement('span');
                let careerBoxFirstName = document.createElement('h3');

                // Other info
                let careerBoxOtherInfo = document.createElement('div');
                let careerBoxLastName = document.createElement('p');
                let careerBoxMaidenName = document.createElement('p');
                let careerBoxAge = document.createElement('p');
                let careerBoxGender = document.createElement('p');
                let careerBoxBirthDate = document.createElement('p');

                // Apply btn
                let careerBoxBtn = document.createElement('button');

                // Adding class names
                careerBox.classList.add('career-box');
                careerBoxLeftSide.classList.add('left-side');
                careerBoxRightSide.classList.add('right-side');

                careerBoxNewBadge.classList.add('new');
                careerBoxLastName.classList.add('last-name'); 
                careerBoxMaidenName.classList.add('maiden-name'); 
                careerBoxAge.classList.add('age'); 
                careerBoxGender.classList.add('gender'); 
                careerBoxBirthDate.classList.add('b-date');  
                // Adding data
                careerBoxNewBadge.textContent = "New";
                careerBoxFirstName.textContent = data.users[i].firstName;
                careerBoxLastName.textContent = "Last Name: " + data.users[i].lastName;
                careerBoxMaidenName.textContent = "Maiden Name: " + data.users[i].maidenName;
                careerBoxAge.textContent = "Age: " + data.users[i].age;
                careerBoxGender.textContent = "Gender: " + data.users[i].gender;
                careerBoxBirthDate.textContent = "Birth Date: " + data.users[i].birthDate;

                careerBoxBtn.textContent = "Apply Now";

                // Main Container
                careersBoxContainer.appendChild(careerBox);

                // Course container
                careerBox.appendChild(careerBoxLeftSide);
                careerBox.appendChild(careerBoxRightSide);

                // Left side
                careerBoxLeftSide.appendChild(careerBoxNewBadge);
                careerBoxLeftSide.appendChild(careerBoxFirstName);
                careerBoxLeftSide.appendChild(careerBoxOtherInfo);

                // Other info
                careerBoxOtherInfo.appendChild(careerBoxLastName);
                careerBoxOtherInfo.appendChild(careerBoxMaidenName);
                careerBoxOtherInfo.appendChild(careerBoxAge);
                careerBoxOtherInfo.appendChild(careerBoxGender);
                careerBoxOtherInfo.appendChild(careerBoxBirthDate);

                // Right Side
                careerBoxRightSide.appendChild(careerBoxBtn);
            }
        });
});
