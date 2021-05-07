// Initialize githubLookup
const githubLookup = new GithubLookUp

// Initialize UI
const ui = new UI
// Search input
const lookUpUser = document.getElementById('search-user')

// Search input event listener
lookUpUser.addEventListener('keyup', (e) => {
    // Get input text
    const userInput = e.target.value

    if (userInput !== '') {
        githubLookup.getUser(userInput)
            .then(data => {
                if (data.profileData.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User not Found', 'alert alert-danger');
                } else {
                    // Show Profile
                    ui.showProfile(data.profileData)
                    ui.showRepos(data.reposData)
                }
            })
    } else {
        // clear profile
        ui.clearProfile()
    }
})
