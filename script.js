



let submit = document.querySelector(".btn").addEventListener('click', createCard);

function createCard(title, cName, views, monthsOld, duration, thumbnail) {

  let title1 = document.getElementById('title').value;
  let videonum1 = document.getElementById('videonum').value;
  let cName1 = document.getElementById('cName').value;
  let views1 = document.getElementById('views').value;
  let monthsOld1 = document.getElementById('months').value;
  let durationStart = document.getElementById('durationStart').value;
  let durationEnd = document.getElementById('durationEnd').value;
  let thumbnail1 = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ";


  let viewStr
  if (views < 1000) {
    viewStr = views1;
  }
  else if (views > 1000000) {
    viewStr = views1 / 1000000 + "M";
  }
  else {
    viewStr = views1 / 1000 + "K";
  }

  let html = `<div class="card-container>"
     <div class="card-content">
        <div class="card">
           <div class="image">
              <img src="${thumbnail1}" alt="img">   
              <div class="capsule"><span>${durationStart}</span>:<span>${durationEnd}</span></div>
           </div>
        <div class="text">
           <p>${title1} | Tutorial #<span>${videonum1}</span></p>
           <p>${cName1} . ${viewStr} views . ${monthsOld1} months ago</p> 
        </div>
      </div>
    </div>
 </div>`

  document.querySelector(".card-content").innerHTML = document.querySelector(".card-content").innerHTML + html;
}



// createCard("Introduction to JavaScript | Tutorial # 01", "CodeWithHarry", 800000, 7, "31:33", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");

createCard(title, cName, views, monthsOld, duration, thumbnail);
