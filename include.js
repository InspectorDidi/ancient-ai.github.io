function includeHTML() {
      var z, i, elmnt, file xhttp;

      /*Loop through all HTML elements: */
      z = document.getElementByTagName("*");
      for (i = 0; i < z.length; i++) {
            elmnt = z[i];

            /*Search for elements with certain attributes:*/
            file = elemnt.getAttribute("include");
            if (file) {
                  /*HTTP request*/

                  xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                        if (this.readyState == 4) {
                              if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                              if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                              elmnt.removeAttribute("include");
                              includeHTML();
                        }
                  }
                  xhttp.open("GET", file, true);
                  xhttp.send();
                  return;
            }
      }
}
