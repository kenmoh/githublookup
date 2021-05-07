class GithubLookUp {
    constructor() {
        this.clientId = '888dd70457aba72715da'
        this.clientSecret = "50455d340a315bbfd19d7009f3f82084dd66fa04"
        this.repoCount = 5
        this.repoSort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}? client_id=${this.clientId}&client_secrete=${this.clientSecret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.repoSort}&client_id=${this.clientId}&client_secrete=${this.clientSecret}`)
        const profileData = await profileResponse.json()
        const reposData = await repoResponse.json()
        return {profileData, reposData}
    }
}
