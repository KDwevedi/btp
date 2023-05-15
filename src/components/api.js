


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
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">API Portal</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Sign-in to get your API key</p>
    </div>
    <div id="showapi" class="flex flex-col text-center w-full mb-12"></div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="inptemail" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative flex-grow w-full">
        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="inptpassword" name="password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={signinbtn}>Continue</button>
    </div>
  </div>
</section>

    );

}