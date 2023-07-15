// // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// const Api="06ce344a70cddd88228d608a37707d38";
// const mainDiv=document.querySelector("#main")

// const api=async(cityname)=>{
//     console.log(cityname,"cityname")
//     const a= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${Api}`);
//     const data= await a.json();   
//     const inbuilt=document.createElement("div");
//     inbuilt.innerHTML=`
//     <div>Location:${data.name}</div>
//     <div>Temperature:${data.main.temp}</div>
//     <div>Temperature Minmum:${data.main.temp_min}</div>
//     <div>Temperature Maximum:${data.main.temp_max}</div>
//     <div>Temperature Pressure:${data.main.pressure}</div>
//     <div>Temperature Humidity:${data.main.humidity}</div>
//     `
//     mainDiv.append(inbuilt);
//     console.log(mainDiv)

// };
// // const cityname=document.querySelector(".searchBar").value;


// // document.querySelector("#btnsearch").addEventListener("click",api(cityname));
// // const btnSearch=document.querySelector("#btnsearch")
// // btnSearch.addEventListener("click", api(cityname));
// // 

// document.querySelector("#btnsearch").addEventListener("click",()=>api(document.querySelector(".searchBar").value))



// // api();
