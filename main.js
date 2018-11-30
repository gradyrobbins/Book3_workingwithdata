console.log("hello world main.js");

// How many total commits were made in all of Steve's events?
console.log("-----part 1")
let totalCommits = 0;

for (let i = 0; i < githubData.length; i++) {
    
    if ('commits' in githubData[i].payload) {
        totalCommits += githubData[i].payload.commits.length;
    }
    else {}
}
console.log("totalCommits " + totalCommits);


// How many of each event type are there? (PullRequestEvent, PushEvent, etc)
console.log("-----part 2")
let arr = [];

for (let i = 0; i < githubData.length; i++) {
    // console.log(`githubData ${i} type : ` + githubData[i].type)
    arr.push(githubData[i].type);
}

// // below, courtesy of https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
// var arr = [];
// var counts = {};
let counts = {};

for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.table(counts);

// List all Github users who submitted a pull request that was approved by Steve.
console.log("-----part 3")
for (let i = 0; i < githubData.length; i++) {
    if (githubData[i].type === "PullRequestEvent") {
        console.log("PullRequestEvent :" + githubData[i].payload.pull_request.user.login)
    } else {}
}


// List all repositories on which Steve had an event, and show how many events were on each one.
console.log("-----part 4")
console.log("List all repositories on which Steve had an event, and show how many events were on each one.")
let arr4 = [];
for (let i = 0; i < githubData.length; i++) {
    if(githubData[i].repo !== null){
        arr4.push(githubData[i].repo.name);
    } else {
        console.log("bloop")
    }
}

let counts4 = {};

for (var i = 0; i < arr4.length; i++) {
    var num = arr4[i];
    counts4[num] = counts4[num] ? counts4[num] + 1 : 1;
}
console.table(counts4);

console.log("---------part 5")
console.log("Which event had the most number of commits?");


let arr5 = [];
for (let i = 0; i < githubData.length; i++) {
    if(githubData[i].payload.commits){
        console.log(` event# ${[i]}  : ${githubData[i].payload.commits.length} commits`);
    } else {
        
    }
}
console.log(arr5)
let counts5 = {};

for (var i = 0; i < arr5.length; i++) {
    var num = arr5[i];
    counts5[num] = counts5[num] ? counts5[num] + 1 : 1;
}
console.table(counts5);