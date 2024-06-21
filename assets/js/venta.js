import propiedadesVenta from "./propiedades_venta.js";

const mostrarPropiedadesVenta = () => {
    const container = document.getElementById('solopropiedadesventa');

    propiedadesVenta.forEach((propiedad) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML =` <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen de la propiedad"
              />
              <div class="card-body">
                <h5 class="card-title">
                 ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i>  ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i>  ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
                  <i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}" ></i>
                  ${propiedad.smoke ? "Esta permitido fumar" : " No esta permitido fumar"}
                </p>
                <p class="${propiedad.pets ? "text-success" : "text-danger"}">
                  <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"> </i>
                  ${propiedad.pets ? "Mascotas Permitidas" : "No se permiten mascotas"}
                </p>
              </div>
            </div>
            </div>
            `;

            container.appendChild(card);

    });

};

mostrarPropiedadesVenta();