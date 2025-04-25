$(function () {
  
    $( "#birthday" ).datepicker(); 

   
    var languages = [
        "ActionScript", "AppleScript", "Asp", "JavaScript",
        "Lisp", "Perl", "PHP", "Python"
    ];

 
    $("#language").autocomplete({
        source: languages
    });


    document.querySelector("form").addEventListener("submit", function (e) {
        const inputs = this.querySelectorAll("input");
        let hasError = false;

   
        inputs.forEach((input) => {
            if (!input.checkValidity()) {
                input.classList.add("invalid");
                hasError = true;
            } else {
                input.classList.remove("invalid");
            }
        });

    
        const languageInput = document.getElementById("language");
        if (!languages.includes(languageInput.value)) {
            languageInput.classList.add("invalid");
            hasError = true;
        }

        if (hasError) {
            e.preventDefault();
        }
    });
});
