/* 
Say you have (2) arrays of social media followers and you want to find out if there are mutual followers between the two.
Using a nested loop, find the mutual followers between the two arrays.
*/




let bobsFollowers = ['Matt' , 'Ken' , 'Dan' , 'Steve'];
let tinasFollowers = ['Matt' , 'Ken' , 'Aimee'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] ===  tinasFollowers[j]) {
  
  mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
  console.log(mutualFollowers);
