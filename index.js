const Octokit = require('@octokit/rest')
const authToken = require('./secret.json').token
const octokit = new Octokit({
    auth: authToken
})
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const getRepositories = function(org, page) {
    return octokit.repos.listForOrg({ org, per_page: 100, page })
}

const unwatch = function(owner, repo) {
    console.log(`🚫 Unwatching: ${repo}`)
    return octokit.activity.deleteRepoSubscription({
        owner, repo
    })
}

const start = async function(organization, page = 1) {
    const resp = await getRepositories(organization, page)
    if (resp.data.length == 0)
        return

    for (let i = 0; i < resp.data.length; i++) {
        const repo = resp.data[i]
        await unwatch(organization, repo.name)
    }
    return start(organization, ++page)
}

rl.question('Enter GitHub organization username: ', start)