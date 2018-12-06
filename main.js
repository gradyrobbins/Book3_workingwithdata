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
console.log("How many of each event type are there? (PullRequestEvent, PushEvent, etc)")
console.table(counts);


console.log("-----part 2, EmLem's style")
// courtesy EmLem:
let eventTypes = {
    PushEvent: 0,
    PullRequestEvent: 0,
    IssueCommentEvent: 0,
    DeleteEvent: 0,
    CreateEvent: 0
};
githubData.forEach(taco => {
    eventTypes[taco.type] += 1;
})

console.log("Emily's solution: " + eventTypes);

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


console.log("---------parts 6 AND 7")
console.log("6: Which programming langugages were affected by Steve's events?")
console.log("7: What programming language was the most affected by Steve's events?")

let arr6 = [];

for (let i = 0; i < githubData.length; i++) {
    // this for loop needs nested "if" statements because data is non-standard; not every 'payload' event has a 'head' so the path to "language" needs nested if statements
    if ('pull_request' in githubData[i].payload){
        // not all "pull_requests" have "head" so the below nested if is req'd
        if('head' in githubData[i].payload.pull_request) {
            var repoLang = githubData[i].payload.pull_request.head.repo.language;
            arr6.push(repoLang);
        }
    }
    
}
// console.log(arr6)
let counts6 = {};

for (var i = 0; i < arr6.length; i++) {
    var num = arr6[i];
    counts6[num] = counts6[num] ? counts6[num] + 1 : 1;
}
console.table(counts6);
// console.log ("-------------------Russell's work-----------------------------------------")
// console.log ("REQUIREMENT #6")

// let repos6 = [];
// for (let i = 0; i < githubData.length; i++) {
    //     if ('pull_request' in githubData[i].payload){
        //         if (githubData[i].actor.login === "stevebrownlee" || githubData[i].payload.comment.user.login === "stevebrownlee" || githubData[i].pull_request.user.login === "stevebrownlee" || githubData[i].payload.issue.user.login === "stevebrownlee" || githubData[i].payload.pull_request.merged_by.login === "stevebrownlee") {
            
            //             // Russell i see repoName6 declared below, but not used?
            //             var repoName6 = githubData[i].repo.name;
            //             var repoLang = githubData[i].payload.pull_request.head.repo.language;
            //             if (repos6.indexOf(repoLang) === -1) {
                //                 repos6.push(repoLang)
                //             }
//         }
//     }   
// }
// console.log(`Steve's events affected the programming languages ${repos6[0]} and ${repos6[1]}.`);
