class Github{
    constructor(){
        this.client_id = '3af11eaf669751eac425';
        this.client_secret = '8f62314029958a987967a489d23618aa0777068f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos
        ?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }


}