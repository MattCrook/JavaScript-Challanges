/*
Write a function named JournalEntry which should define three parameters.

The title of the journal entry
The content of the journal entry
The author of the journal entry

The JournalEntry function should use those three parameters and return a template string that contains the following HTML structure if the following values are sent as arguments - 

"I made a function today" as the title.
"It makes a component as a template string" as the content.
"Melanie Baker" as the author

<article class="entry">
    <header>
        <h2>I made a function today</h2>
    </header>
    <section>It makes a component as a template string</section>
    <footer>
        <time>Written by Melanie Baker</time>
    </footer>
</article>
*/

const createJournalEntry = (title, content, author) => {
  return ` 
  <article class="entry">
     <header>
       <h2>${title}</h2>
     </header>
     <section>${content}</section>
     <footer>
       <time>Written by ${author}</time>
     </footer>
  </article>`;
}
 
let header = "I made a function today";
let body = "It makes a component as a template string"
let name = "Melanie Baker"
createJournalEntry(header, body, name);
const output = createJournalEntry(header, body, name);


console.log(output);

/* OR 

const JournalEntry = (title, content, author) => {
  return `<article class="entry">
    <header>
        <h2>${title}</h2>
    </header>
    <section>${content}</section>
    <footer>
        <time>Written by ${author}</time>
    </footer>
</article>`
}

// Invoke the function
JournalEntry("Example code complete", "I completed the sample solution for a JavaScript function exercise", "Steve Brownlee")
