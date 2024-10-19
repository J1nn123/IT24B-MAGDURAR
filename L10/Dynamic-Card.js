
fetch('./L10/Dynamic-Card.json')
  .then(response => response.json())
  .then(data => {
    buildTable(data); 

    
    document.getElementById('search-input').addEventListener('keyup', function() {
      var value = this.value.toLowerCase();
      var filteredData = searchTable(value, data);
      buildTable(filteredData); 
    });
  })
  .catch(error => console.error('Error fetching data:', error));


function buildTable(applets) {
  const container = document.getElementById("applet-container");
  container.innerHTML = ""; 
  applets.forEach(applet => {
    const card = `
      <div class="card" style="width: 18rem;">
        <img src="${applet.image}" class="card-img-top" alt="${applet.title}">
        <div class="card-body">
          <h4 class="card-title">${applet.title}</h4>
          <p class="card-text">${applet.description}</p>
          <a href="${applet.link}" class="btn ${applet.buttonClass}" style="margin-left: 4rem;">${applet.buttonText}</a>
        </div>
      </div>`;
    container.innerHTML += card;
  });
}

function searchTable(value, data) {
  return data.filter(applet => applet.title.toLowerCase().includes(value));
}
