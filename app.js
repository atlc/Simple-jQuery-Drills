$(document).ready(function () {
    $("#btnSubmit").attr("disabled", true);

    function getRandomColor() {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        let colorStr = "rgb(" + r + ", " + g + ", " + b + ")";
        return colorStr;
    }

    $("input").keyup(function () {
        $("#btnSubmit").attr("disabled", false);
    });

    $("#btnSubmit").click(function (event) {
        // Done to prevent page from actually attempting a submission and then reloading the page
        event.preventDefault();
        let formInfo = $("input").val();
        alert(formInfo);
        $("div").append("<h2>" + formInfo + "</h2>");
        $("h2").mouseover(function () {
            $("h2").css({
                "background-color": getRandomColor(),
                "border-radius": "10px"
            });
        });
    });



    $("body").append("<div></div>");
});