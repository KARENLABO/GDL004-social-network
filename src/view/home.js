export default () =>{
    const viewHome = `
        <div class='homePage'>

            <div class='logoNeekHomePage'>
                <img src="./images/LogoNeek.png" 
                alt="Logo neek" 
                width="145">
            </div>

            <div class='neekTextHomePage'>
                <h2><strong>NEEK</strong></h2>
            </div>

            <div class='textSocialNHomePage'>
                <h4>The social network for entrepreneurs</h4>
            </div>
        </div>
    `
    const divElement = document.createElement ('div');
    divElement.innerHTML = viewHome;
    return divElement;
}

