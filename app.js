$(document).ready(function () {
    $("body").append("<div></div>");
    $("body").append("<ul></ul>");

    function getRandomColor() {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        let colorStr = "rgb(" + r + ", " + g + ", " + b + ")";
        return colorStr;
    };

    $("#btnSubmit").attr("disabled", true);

    $("input").keyup(function () {
        $("#btnSubmit").attr("disabled", false);
    });

    $("#btnSubmit").click(function (event) {
        // Done to prevent page from actually attempting a submission and then reloading the page
        event.preventDefault(); 
        let $formInfo = $("input").val();
        //Commenting out alert for now because it's annoying and slows testing
        //alert($formInfo);
        $("ul").append("<li>"+$formInfo+"</li>");
    });

    // Use event delegation to target children https://learn.jquery.com/events/event-delegation/
    $("ul").click(function (event) {
        $(event.target).css("color", getRandomColor());  
    });
});