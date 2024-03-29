const getGitHubUser = async(username) => {
    try {
        if (username == "") {
            return null
        }
        const users = await fetch(`https://api.github.com/users/${username}`)
        const json = await users.json()
    
        if (json.login) {
            return json   
        }
        //return undefined
        return "not found"
        } 

    catch (e) {
        console.log(e)
    }}


  const printGitHubUser = async () => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");
  
    console.log(mojombo);
    console.log(orange);
    console.log(rudiTabuti);
  }
  
  printGitHubUser();