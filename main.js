document.getElementById('button').addEventListener('click', getJson);

// ----------------Using the ajax method --------------//
function getJson() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);
  xhr.onload = function(){
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      let output = '<h2>User Data</h2>';
      for(let i in data){
        output += `
                  <ul>
                    <li>Name: ${data[i].name}</li>
                    <li>Job: ${data[i].job}</li>
                    <li>Status: ${data[i].Status}</li>
                    <li>Status: ${data[i].gender}</li>
                  </ul>
                  `;
      }
      document.getElementById('user').innerHTML = output;

    }
  }
  xhr.send();
}


// ------------Using the fetch api----------------------//

// function getJson() {
//   fetch('data.json')
//     .then(res => res.json())
//     .then(data => {
//       let output = '<h2>User Data</h2>';
//       for(const i in data){
//         output += `
//                     <ul>
//                       <li>Name : ${data[i].name}</li>
//                       <li>Job : ${data[i].job}</li>
//                       <li>Status : ${data[i].Status}</li>
//                     </ul>
//                   `;
//       }
//       document.getElementById('user').innerHTML = output;
//     })
// }
