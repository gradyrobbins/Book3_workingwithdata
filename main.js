console.log("hello world main.js");
// console.log(Object.keys(githubData));

// How many total commits were made in all of Steve's events?
let totalCommits = 0;

for (let i = 0; i < githubData.length; i++) {

    if ('commits' in githubData[i].payload) {
    totalCommits += githubData[i].payload.commits.length;
    }
    else {}
}
console.log("totalCommits " + totalCommits);


let arr = [];
// How many of each event type are there? (PullRequestEvent, PushEvent, etc)
    for (let i = 0; i < githubData.length; i++) {
        // console.log(`githubData ${i} type : ` + githubData[i].type)
        arr.push(githubData[i].type);
    }
    
// // below, courtesy of https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
    // var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
    // var counts = {};
    let counts = {};
    
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.table(counts);