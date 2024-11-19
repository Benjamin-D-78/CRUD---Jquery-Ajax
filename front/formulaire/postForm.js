$("#postFormulaire").on("submit", (event) => {
    event.preventDefault();

    // On initialise le format du formulaire
    const dataFormulaire = {
        picture: [{img: $("#img").val()}],
        name: $("#name").val(),
        price: parseFloat($("#price").val()),
        stock: parseInt($("#stock").val()),
        online: $("#online").is(":checked"),
    }
    console.log(dataFormulaire);

    // On envoie les données via la requête ajax

    $.ajax({
        url: "http://localhost:8000/api/article/add",
        type: "POST",
        contentType: "application/json",

        data: JSON.stringify(dataFormulaire),
        success: (data) => {
            console.log(`L'article a été ajouté avec succès : ${JSON.stringify(data)}`)
        },

        error: (xhr, status, error) => {
            console.log(`Erreur lors de l'ajout de l'article ${error}`)
        }
    })
})

