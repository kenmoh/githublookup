class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class= "row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block btn-sm">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-dark mb-2">Name: ${user.name}</span>
                        <span class="badge badge-secondary mb-2">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-success mb-2">Following: ${user.following}</span>
                        <span class="badge badge-info mb-2">Public Repos: ${user.public_repos}</span>
                        <br><br>
                        <ul class= "list-group">
                           <li class="list-group-item">Compny: ${user.company}</li> 
                           <li class="list-group-item">Website/Blog: ${user.blog}</li> 
                           <li class="list-group-item">Location: ${user.location}</li> 
                           <li class="list-group-item">Date Joined: ${user.created_at}</li> 
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Lates Repos</h3>
            <div id="repos"></div>
        `
    }

    clearProfile() {
        this.profile.innerHTML = ''
    }
}