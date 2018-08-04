$(document).ready(function () {
    $("#btnSubmit").attr("disabled", true);

    $("input").keyup(function () {
        $("#btnSubmit").attr("disabled", false);
    });

    $("#btnSubmit").click(function () {
        let formInfo = $("input").val();
        alert(formInfo);
    });
});