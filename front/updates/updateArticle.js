$(document).ready(() => {
    // On récupère l'ID de l'article depuis L'URL
    const urlP = new URLSearchParams(window.location.search);
    const articleId = urlP.get("id");

    $.ajax({
        url: `http://localhost:8000/api/article/get/${articleId}`,
        method: "GET",
        success: (article) => {
            $("#img").val(article.picture[0].img);
            $("#name").val(article.name);
            $("#price").val(article.price);
            $("#stock").val(article.stock);
            $("#online").prop("checked", article.online);
        },

        error: (xhr, status, error) => {
            console.log(`Erreur : ${error}`);
        }
    })
        $("#updateFormulaire").on("submit", (event) => {
            event.preventDefault();
        // On récupère maintenant les valeurs du formulaire.
        const dataFormulaire = {
            picture: [{img: $("#img").val()}],
            name: $("#name").val(),
            price: parseFloat($("#price").val()),
            stock: parseInt($("#stock").val()),
            online: $("#online").is(":checked"),
        }
        console.log(dataFormulaire)

        // On envoie ensuite les données.
        $.ajax({
            url: `http://localhost:8000/api/article/update/${articleId}`,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(dataFormulaire),
            success: (response) => {
                console.log(`Succès de la mise à jour : ${response}`);
                window.location.href = `../details/detailsArticles.html?id=${articleId}`
            },
            error: (xhr, status, error) => {
                console.log(`Erreur lors de la mise à jour de l'article : ${error}`);
            }
        })
    })
})