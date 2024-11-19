$(document).ready(() => {
    const urlP = new URLSearchParams(window.location.search);
    const articleId = urlP.get("id");

    console.log(articleId);

    // On récupère la liste des articles

    $.ajax({
        url: `http://localhost:8000/api/article/get/${articleId}`,
        method: "GET",
        success: (article) => {
            console.log(article.name)

            const articleDetails = 
            `<img src="${article.picture[0].img}" width="200" alt="${article.name}"/>
            <p>
            Nom = ${article.name}
            Prix = ${article.price}
            Quantité = ${article.stock}
            </p>`

            $("#article").html(articleDetails)
        },

        error: (xhr, status, error) => {
            console.log(`Erreur : ${error}`);}
    })


    // Bouton modifier
    $("#updateArticle").on("click", () => {
        window.location.href = `../updates/updateArticle.html?id=${articleId}`})

    // Bouton supprimer
    $("#deleteArticle").on("click", () => {
        $.ajax({
            url: `http://localhost:8000/api/article/delete/${articleId}`,
            method: "DELETE",
            success: () => {
                console.log("Article supprimé avec succès");
                window.location.href = "../index.html"},
            
            error: (xhr, status, error) => {
                console.error(`Erreur: ${error}`);
            }
        })
    })
})