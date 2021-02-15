let HTMLCard = ""
let SerieOpelicula = ""
let contenidoJSON = []

//Ajax para cargar el contenido dinámico
function cargoContenidoStreaming() {
    $.ajax({
        url: "js/api.json",
        dataType: "json",
        success: function(data) {
            contenidoJSON = data
            $.each(contenidoJSON, function(i) {
                HTMLCard += ` <div class="col s12 m6 l3">
                <div class="card z-depth-2">
                    <div class="card-image">
                        <img src="${contenidoJSON[i].poster}" alt="${contenidoJSON[i].titulo}" id="trailerflix-" 3="" max-width="100px">
                        <button class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons" onclick="verDetalle${contenidoJSON[i].id}">search</i></button>
                    </div>
                    <div class="card-content black">
                        <p class="yellow-text">GÉNERO: <span class="white-text">${contenidoJSON[i].genero}</span></p>
                        <p class="yellow-text">TEMPORADAS: <span class="white-text">${contenidoJSON[i].temporadas}</span></p>
                    </div>
                </div>
            </div>`
            })
            $("#contenido").html(HTMLCard)
        }
    })

}

//Aquí aplicamos animaciones JQ sobre los elementos
setTimeout(() => {
    cargoContenidoStreaming()
    $("#contenido").fadeIn("fast", function() {
        $("#cargando").fadeOut("fast")
    })
}, 2000)

//Vamos a la página detail.html a ver el detalle de la peli
function verDetalle(i) {

}