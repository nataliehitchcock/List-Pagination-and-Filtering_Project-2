/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentList = document.querySelector('ul');
const eachStudent = studentList.children;
const studentsPerPage = 10;

// Create a function to hide all of the items in the list except for the ten you want to show
const totalPages = () => {
   let pageNumbers = Math.ceil(eachStudent.length / studentsPerPage);
   return pageNumbers;
}
// Add a function which displays 10 students per page
const showPage = (list, page) => {
  for (let i = 0; i < eachStudent.length; i++) {
    if (i < studentsPerPage) {
       eachStudent[i].style.display= 'block';
    } else {
        eachStudent[i].style.display= 'none';
    }
}
}

// Create and append the pagination links
function addPaginationLinks (studentList) {
  const totalPages = Math.ceil(studentList.length / studentsPerPage);
  const newDiv = document.createElement('div');
  newDiv.className = 'pagination';
  const divPage = document.querySelector('.page');
  divPage.appendChild(newDiv);
  const ulPagLinks = document.createElement('ul');
  newDiv.appendChild(ulPagLinks);
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
           showPage(studentList, j);
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
   // Select page class in the div, put into a variable
     let page = document.body.querySelector('.page');
   // Create a div, give it the “pagination” class, and append it to the .page div
     const pageDiv = document.createElement('div');
     pageDiv.className = 'pagination';
     page.appendChild(pageDiv);
   // Add a ul to “pagination” div
     let ulPage = document.createElement('ul');
     pageDiv.append(ulPage);
     let buttonPage = document.querySelector('.pagination ul');
     // For every page add li and a tags with the page number text
    for (let i = 1; i <= totalPages(); i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
        a.href = '#';
        a.textContent = i;
        buttonPage.appendChild(li);
        li.appendChild(a);
      }
// Add functionality to the pagination buttons so that they show and hide the correct items
totalPages();
tenStudents();
addPaginationLinks();