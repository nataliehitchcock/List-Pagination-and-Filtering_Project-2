  
/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// Add variables that store DOM elements you will need to reference and/or manipulate
const ulCollection = document.querySelector('.student-list');
const studentList = [...ulCollection.children];
const studentsPerPage = 10;


// Add a function which displays 10 students per page
const showPage = (list, page) => {
const startIndex = (page * studentsPerPage) - studentsPerPage;
const endIndex = page * studentsPerPage;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
       list[i].style.display= 'block';
    } else {
        list[i].style.display= 'none';
    }
}
}

// Create and append the pagination links
function addPaginationLinks (list) {
  const totalPages = Math.ceil(list.length / studentsPerPage);
  const newDiv = document.createElement('div');
  newDiv.className = 'pagination';
  const divPage = document.querySelector('.page');
  divPage.appendChild(newDiv);
  const ulPagLinks = document.createElement('ul');
  newDiv.appendChild(ulPagLinks);
  showPage (list, 1);
  for (let i = 1; i <= totalPages; i++) {
     const li = document.createElement('li');
     ulPagLinks.appendChild(li);
     const a = document.createElement('a');
     li.appendChild(a);
     a.textContent = i;
     a.href = '#';
     const firstA = document.querySelector('a');
     firstA.className = 'active';
     const aList = document.querySelectorAll('a');

     //Adding an event listener to each link
     for (let j = 1; j <= aList.length; j++) {
        a.addEventListener('click', (event) => {
           showPage(list, j);
           for (let k = 0; k < aList.length; k++) {
              aList[k].className = '';
           }
           event.target.className = 'active';
     });
     }
  }
}
//Calling Pagination function
addPaginationLinks(studentList);
