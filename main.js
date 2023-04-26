document.addEventListener('DOMContentLoaded', function() {
    const nomePerfil = document.querySelector('.profile-name')
    const userName = document.querySelector('.profile-username')
    const repositorio = document.querySelector('#repositorio')
    const seguidores = document.querySelector('#seguidores')
    const seguindo = document.querySelector('#seguindo')
    const avatar = document.querySelector('.profile-avatar')
    const link = document.querySelector('.profile-link')

    const apiUser = 'https://api.github.com/users/barbosagustav'

    fetch(apiUser)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json)
        {
            nomePerfil.innerHTML = json.name;
    userName.innerHTML = json.login;
    repositorio.innerHTML = json.public_repos;
    seguidores.innerHTML = json.followers;
    seguindo.innerHTML = json.following;
    avatar.src = json.avatar_url;
    link.href = json.html_url;
        })
})

