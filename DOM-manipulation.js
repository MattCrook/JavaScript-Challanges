// change sectiion with 'article__header to a string'
const articleHeader = document.querySelector('.article__header');
console.log(articleHeader);


const blogHeader = articleHeader.textContent;
articleHeader.textContent = "Welcome to Matt's blog";

// obtain all sections, change class list to article__header important
const allSections = document.querySelectorAll('.article__header');
console.log(allSections);
allSections.classList = "article__header important";

// obtain referance to class of dash and remove it.
const dashed = document.querySelector('.dashed');
console.log(dashed);
dashed.classList.remove('dashed');

// obtain reference to class artice__footer and add goldenrod to it
const aFooter = document.querySelector('.article__footer');
aFooter.classList.add('goldenrod');
