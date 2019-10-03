class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn
                    btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Repos: ${user.public_gists}</span>
                <span class="badge badge-success">Public Repos: ${user.public_followers}</span>
                <span class="badge badge-info">Public Repos: ${user.public_following}</span>
                <br></br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        `;
    }

    // Show Repos
    showRepos(repos){
        let output = '';
        repos.forEach(function(repo){
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}
                    </div>
                    <div class="col-md-6">
                        
                        </div>
                    </div>
            </div>
            `
        })
    }

    // Show Alert messages
    showAlert(message, className){
        // Clear existing alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);
        // Clear alert after three seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear Alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    // Clear Profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}