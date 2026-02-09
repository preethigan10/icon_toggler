const themes =[
  {name: "light", message: "Hello sunshine — Light theme is on!"},
  {name: "dark", message: "The night is yours — Dark theme is on!"},
  {name: "ocean", message: "Blue skies and high tides — Ocean theme is on!"},
  {name: "nord", message: "The frost has settled - Nord theme is on!"}
];
const button = document.getElementById("theme-switcher-button");
const menu = document.getElementById("theme-dropdown");
const statusTxt = document.getElementById("status");
const dropDownItem = document.querySelectorAll('li');
const body = document.querySelector('body');

button.addEventListener("click", () => {
  // menu toggle code below
  const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;
  button.setAttribute('aria-expanded', !isExpanded);
   if (isExpanded) {
      menu.setAttribute('hidden', ''); 
    } else {
      statusTxt.textContent = "";
      menu.removeAttribute('hidden'); 

      dropDownItem.forEach(item => {
        item.addEventListener("click", (e) => {
          const value = e.target.textContent.trim();
          const bgTheme = value.toLowerCase();
          const selectedTheme = themes.filter(res => res.name == bgTheme);
          body.setAttribute("class", `theme-${bgTheme}`);
          statusTxt.textContent = selectedTheme[0].message;
          menu.setAttribute('hidden', ''); 
          button.setAttribute('aria-expanded', false);
        });  
      });   


    }  
});


