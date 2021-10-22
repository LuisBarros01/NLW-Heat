const LinksSocialMedia = {
  github: 'LuisBarros01',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'luisbarros01_',
  twitter: 'jakelinytec'
}

function replaceSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

replaceSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      desc.textContent = data.bio
      linkName.href = data.html_url
      userPhoto.src = data.avatar_url
      userId.textContent = data.login
    })
}
getGitHubProfileInfos()
