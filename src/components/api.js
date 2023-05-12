

export default function Signin () {
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    

    function signinbtn(){
        fetch(`https://bionic-reader.onrender.com/api/email/${document.querySelector("#inptemail").value}+${document.querySelector("#inptpassword").value}`)
        .then((response) => response.text())
        .then((data) => {
             console.log(data);
             if(data=="WrongPassword")alert("Wrong Password");
             else{

                if(data=="Valid"){
                    document.querySelector("#showapi").innerText=`Your API Key is: ${ makeid(5)}`;
                    
                 }else{
                    document.querySelector("#showapi").innerText=`You are signed in.`;
                    if(data=="Signin"){
                        window.open("https://buy.stripe.com/test_bIY7uh5UObAO0TucMM","_blank");
                    }
                    
                 }
             }
             
        }).catch((error)=>{
            console.log(error)});

    }
    return (

<section class="text-gray-600 body-font">
    
  <div id="api" class="container px-5 py-24 mx-auto">
    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">API</h1>
    <div >
        Sign-in to get your API key
    </div>
    <form class="signin">
      <div class="form-group">
      <div id="showapi"></div>
        <input type="email" class="form-control" id="inptemail" aria-describedby="emailHelp" placeholder="Enter email"></input>

<input type="password" class="form-control" id="inptpassword" aria-describedby="emailHelp" placeholder="Enter Password" ></input>

      </div>
      <button class="btn btn-primary signinbtn" onClick={signinbtn}>Continue</button>
    </form>
    
  </div>
</section>

    );

}