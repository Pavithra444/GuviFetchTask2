

async function fetchData() {
    try {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=3');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      jsonDataArray = await response.json();
      console.log(jsonDataArray);
      displayData();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  function displayData() {
    const contentDiv = document.getElementById('contentDiv');

    let n=jsonDataArray.length;
    console.log(n);
    for(i=0;i<jsonDataArray.length;i++)
    {
        const containerDiv=document.createElement("div");
        containerDiv.id=i;
        containerDiv.className="container";   
        containerDiv.textContent = JSON.stringify(jsonDataArray[i].name, null, 2);
       
        const data = jsonDataArray[i];
        const displayText = `${data.name}`;
        containerDiv.textContent =displayText;

        contentDiv.appendChild(containerDiv);
        const link = document.createElement('a');
        link.textContent = 'Click here to Visit';
        link.className="link";
        link.setAttribute("href",data.website_url)
        containerDiv.appendChild(link); 
        
    }
   
   
  }
  fetchData();