
// from Russell:
console.log ("------------------------------------------------------------")
console.log ("REQUIREMENT #4")
let repos = [];
for (let i = 0; i < githubData.length; i++) {
    if (githubData[i].actor.login === "stevebrownlee" || githubData[i].payload.comment.user.login === "stevebrownlee" || githubData[i].pull_request.user.login === "stevebrownlee" || githubData[i].payload.issue.user.login === "stevebrownlee" || githubData[i].payload.pull_request.merged_by.login === "stevebrownlee") {
        var repoName = githubData[i].repo.name;
        var repoEvent = githubData[i].type;
        var nameEventCombo = [repoName, repoEvent];
        repos.indexOf(nameEventCombo) === -1 ? repos.push(nameEventCombo) : console.log("Entry already exists.");
    }
}
let nssCSM = 0;
let nssB = 0;
let sblVPS = 0;
let cohort27 = 0;

for (let i = 0; i < repos.length; i++) {
    const repoData = repos[i]

    for (let j = 0; j < repoData.length; j++) {
        if (repoData[j] === "nashville-software-school/client-side-mastery") {
            nssCSM ++;
        } else if (repoData[j] === "nashville-software-school/bangazon-llc") {
            nssB ++;
        } else if (repoData[j] === "stevebrownlee/vps-setup") {
            sblVPS ++;
        } else if (repoData[j] === "nss-day-cohort-27/brenda-snack-cake-store") {
            cohort27 ++;
        }
    }
}
console.log(`Nashville Software School Client Side Mastery: ${nssCSM} events.`);
console.log(`Nashville Software School Bangazon LLC: ${nssB} events.`);
console.log(`Steve Brownlee VPS Setup: ${sblVPS} events.`);
console.log(`Cohort 27 Snack Cake Store: ${cohort27} events.`);


// Which event had the most number of commits?
console.log ("------------------------------------------------------------")
console.log ("REQUIREMENT #5")

let deleteEvent5 = 0;
let pushEvent5 = 0;
let pullRequestEvent5 = 0;
let issueCommentEvent5 = 0;
let createEvent5 = 0;

for (let i = 0; i < githubData.length; i++) {
    if (githubData[i].type == "DeleteEvent" && 'commits' in githubData[i].payload) {
        deleteEvent5 ++;
    } else if (githubData[i].type == "PushEvent" && 'commits' in githubData[i].payload){
        pushEvent5 ++;
    } else if (githubData[i].type == "PullRequestEvent" && 'commits' in githubData[i].payload){
        pullRequestEvent5 ++;
    } else if (githubData[i].type == "IssueCommentEvent" && 'commits' in githubData[i].payload){
        issueCommentEvent5 ++;
    } else if (githubData[i].type == "CreateEvent" && 'commits' in githubData[i].payload){
        createEvent5 ++;
    }
}
console.log(`DeleteEvents = ${deleteEvent5} \nPushEvents = ${pushEvent5} \nPullRequestEvents = ${pullRequestEvent5} \nIssueCommentEvents = ${issueCommentEvent5} \nCreateEvents = ${createEvent5}.\nPusheEvents had the most commits.` );

// Which programming langugages were affected by Steve's events?
console.log ("------------------------------------------------------------")
console.log ("REQUIREMENT #6")

let repos6 = [];
for (let i = 0; i < githubData.length; i++) {
    if ('pull_request' in githubData[i].payload){
        if (githubData[i].actor.login === "stevebrownlee" || githubData[i].payload.comment.user.login === "stevebrownlee" || githubData[i].pull_request.user.login === "stevebrownlee" || githubData[i].payload.issue.user.login === "stevebrownlee" || githubData[i].payload.pull_request.merged_by.login === "stevebrownlee") {
            var repoName6 = githubData[i].repo.name;
            var repoLang = githubData[i].payload.pull_request.head.repo.language;
            if (repos6.indexOf(repoLang) === -1) {
                repos6.push(repoLang)
            }
        }
    }   
}
console.log(`Steve's events affected the programming languages ${repos6[0]} and ${repos6[1]}.`);

// What programming language was the most affected by Steve's events?
console.log ("------------------------------------------------------------")
console.log ("REQUIREMENT #7")

let repos7 = [];

for (let i = 0; i < githubData.length; i++) {
    if ('pull_request' in githubData[i].payload){
        if (githubData[i].actor.login === "stevebrownlee" || githubData[i].payload.comment.user.login === "stevebrownlee" || githubData[i].pull_request.user.login === "stevebrownlee" || githubData[i].payload.issue.user.login === "stevebrownlee" || githubData[i].payload.pull_request.merged_by.login === "stevebrownlee") {
            var repoLang7 = githubData[i].payload.pull_request.head.repo.language;
            repos7.push(repoLang7)
        }
    }   
};
var pCount = 0;
var jCount = 0;

for (let i = 0; i < repos7.length; ++i) {
    if (repos7[i] == "Python") {
        pCount ++;
    } else if (repos7[i] == "JavaScript") {
        jCount ++;
    }
};
 console.log (`The programming language affected the most by Steve's events was ${Math.max(pCount, jCount) === pCount ? "Python" : "Javascript"}.`);