// function showContact() {
//     document.getElementById("contact").style.display = "block"
// }
// function showBooking() {
//     document.getElementById("booking").style.display = "block"
// }

$(document).ready(function () {
    $("img").click(function () {
        $("body").css("overflow", "scroll")
        // document.querySelector("body").style.overflow = "scroll"
    })


    $("#linkContact").click(function () {
        $("#contact").css("display", "block")
    })
    $("#linkBooking").click(function () {
        $("#booking").css("display", "block")
    })

    $("#buttonContact").click(function () {
        valueNombre = $("#contactNombre").val()
        valueCorreo = $("#contactCorreo").val()
        valueTelefono = $("#contactTelefono").val()
        valueMotivo = $("#contactMotivo").val()
        valueMensaje = $("#contactMensaje").val()
        if ((valueNombre == null || valueNombre == "")) {
            alert("El campo '" + $("#contactNombre").attr('name') + "' es obligatorio")
        } else if ((valueCorreo == null || valueCorreo == "")) {
            alert("El campo '" + $("#contactCorreo").attr('name') + "' es obligatorio")
        }
        else if ((valueTelefono == null || valueTelefono == "")) {
            alert("El campo '" + $("#contactTelefono").attr('name') + "' es obligatorio")
        }
        else if ((valueMotivo == null || valueMotivo == "")) {
            alert("El campo '" + $("#contactMotivo").attr('name') + "' es obligatorio")
        }
        else if ((valueMensaje == null || valueMensaje == "")) {
            alert("El campo '" + $("#contactMensaje").attr('name') + "' es obligatorio")
        }
        else {
            alert("Estimad@ " + valueNombre + " le agradecemos por su preferencia. Se ha enviado el codigo de confirmacion al correo " + valueCorreo)
            $("#contactNombre").val("")
            $("#contactCorreo").val("")
            $("#contactTelefono").val("")
            $("#contactMotivo").val("")
            $("#contactMensaje").val("")
        }
    })
    $("#buttonBooking").click(function () {
        valueNombre = $("#bookingNombre").val()
        valueCorreo = $("#bookingCorreo").val()
        valueTelefono = $("#bookingTelefono").val()
        valueFecha = $("#bookingFecha").val()
        valueHora = $("#bookingHora").val()
        valueAsistentes = $("#bookingAsistentes").val()
        if ((valueNombre == null || valueNombre == "")) {
            alert("El campo '" + $("#bookingNombre").attr("name") + "' es obligatorio")
        } else if ((valueCorreo == null || valueCorreo == "")) {
            alert("El campo '" + $("#bookingCorreo").attr("name") + "' es obligatorio")
        }
        else if ((valueTelefono == null || valueTelefono == "")) {
            alert("El campo '" + $("#bookingTelefono").attr("name") + "' es obligatorio")
        }
        else if ((valueFecha == null || valueFecha == "")) {
            alert("El campo '" + $("#bookingFecha").attr("name") + "' es obligatorio")
        }
        else if ((valueHora == null || valueHora == "")) {
            alert("El campo '" + $("#bookingHora").attr("name") + "' es obligatorio")
        }
        else if ((valueAsistentes == null || valueAsistentes == "")) {
            alert("El campo '" + $("#bookingAsistentes").attr("name") + "' es obligatorio")
        }
        else {
            alert("Estimad@ " + valueNombre + " agradecemos por reservar con nosotros. Hemos registrado " + valueAsistentes + " asistentes. Se ha enviado el codigo de confirmacion al correo " + valueCorreo)
            $("#bookingNombre").val("")
            $("#bookingCorreo").val("")
            $("#bookingTelefono").val("")
            $("#bookingFecha").val("")
            $("#bookingHora").val("")
            $("#bookingAsistentes").val("")
        }

    })
})
// function sendContact() {

//     let valueNombre = document.getElementById("contactNombre").value
//     let valueCorreo = document.getElementById("contactCorreo").value
//     let valueTelefono = document.getElementById("contactTelefono").value
//     let valueMotivo = document.getElementById("contactMotivo").value
//     let valueMensaje = document.getElementById("contactMensaje").value

//     if ((valueNombre == null || valueNombre == "")) {
//         alert("El campo '" + document.getElementById("contactNombre").name + "' es obligatorio")
//     } else if ((valueCorreo == null || valueCorreo == "")) {
//         alert("El campo '" + document.getElementById("contactCorreo").name + "' es obligatorio")
//     }
//     else if ((valueTelefono == null || valueTelefono == "")) {
//         alert("El campo '" + document.getElementById("contactTelefono").name + "' es obligatorio")
//     }
//     else if ((valueMotivo == null || valueMotivo == "")) {
//         alert("El campo '" + document.getElementById("contactMotivo").name + "' es obligatorio")
//     }
//     else if ((valueMensaje == null || valueMensaje == "")) {
//         alert("El campo '" + document.getElementById("contactMensaje").name + "' es obligatorio")
//     }
//     else {
//         alert("Muchas gracias " + document.getElementById("contactNombre").value + " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + document.getElementById("contactCorreo").value)
//         document.getElementById("contactNombre").value = ""
//         document.getElementById("contactCorreo").value = ""
//         document.getElementById("contactTelefono").value = ""
//         document.getElementById("contactMotivo").value = ""
//         document.getElementById("contactMensaje").value = ""
//     }


// }
// function sendBooking() {
//     let valueNombre = document.getElementById("bookingNombre").value
//     let valueCorreo = document.getElementById("bookingCorreo").value
//     let valueTelefono = document.getElementById("bookingTelefono").value
//     let valueFecha = document.getElementById("bookingFecha").value
//     let valueHora = document.getElementById("bookingHora").value
//     let valueAsistentes = document.getElementById("bookingAsistentes").value
//     if ((valueNombre == null || valueNombre == "")) {
//         alert("El campo '" + document.getElementById("bookingNombre").name + "' es obligatorio")
//     } else if ((valueCorreo == null || valueCorreo == "")) {
//         alert("El campo '" + document.getElementById("bookingCorreo").name + "' es obligatorio")
//     }
//     else if ((valueTelefono == null || valueTelefono == "")) {
//         alert("El campo '" + document.getElementById("bookingTelefono").name + "' es obligatorio")
//     }
//     else if ((valueFecha == null || valueFecha == "")) {
//         alert("El campo '" + document.getElementById("bookingFecha").name + "' es obligatorio")
//     }
//     else if ((valueHora == null || valueHora == "")) {
//         alert("El campo '" + document.getElementById("bookingHora").name + "' es obligatorio")
//     }
//     else if ((valueAsistentes == null || valueAsistentes == "")) {
//         alert("El campo '" + document.getElementById("bookingAsistentes").name + "' es obligatorio")
//     }
//     else {
//         alert("Muchas gracias " + document.getElementById("bookingNombre").value + " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + document.getElementById("bookingCorreo").value)
//         document.getElementById("bookingNombre").value = ""
//         document.getElementById("bookingCorreo").value = ""
//         document.getElementById("bookingTelefono").value = ""
//         document.getElementById("bookingFecha").value = ""
//         document.getElementById("bookingHora").value = ""
//         document.getElementById("bookingAsistentes").value = ""
//     }


// }