"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Escrito por : Yerlinson Maturana (Matu Creativo).
  Email: yerlinmatu@gmail.com
  Github: https://github.com/YerlinMatu
  Twitter: @yerlinmatu 
*/

// USUARIO
var Cliente = [];

var Usuario = function Usuario(nombre, apellidos, empresa, hijos, fecha) {
  _classCallCheck(this, Usuario);

  this.nombre = nombre.length != 0 ? nombre.Capitalize() : "Anonimo ".concat(cont++);
  this.apellidos = apellidos.trim().Capitalize() || "Sin apellidos";
  this.empresa = empresa.trim().Capitalize() || "Ninguna";
  this.hijos = Math.abs(hijos) || 0;
  this.subsidio = Math.abs(+this.hijos * 24.000 * 1000);
  this.fecha = fecha || new Date().toString().substring(0, 10).concat('...');
};

// Capitalizado :

String.prototype.Capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

//  cont++
var cont = 1;

function SendData() {
  var n = $("#nombre").val(),
      a = $("#apellidos").val(),
      e = $("#empresa").val(),
      h = parseInt($("#hijos").val()),
      fecha = $("#fecha").val();
  if (n !== '' && a !== '' && e !== '' && h !== '') {
    var person = new Usuario(n, a, e, h, fecha);
    var nameTemp = person.nombre;
    Cliente.push(person);
    console.log(Cliente);
    $Dom('formID').reset(); // Reseting.
    SucessMsg("Se registró " + nameTemp + " correctamente", 'Ya se ingreso a la base de datos.', 2500);
  } else {
    SucessMsg('Por favor ingrese los datos solicitados :(', 'Los campos están vacios', 2500);
  }
} // Client send.

function $Dom($id) {
  return document.getElementById($id);
}
var question = ["¿Cuál es su nombre?", "¿Cuáles son sus apellidos?", "Nombre de la empresa", "Número de hijos", "Fecha de afiliación"];

var DeleteClient = function DeleteClient() {
  if (Cliente.length > 0) {
    var user_despachado = Cliente.shift();
    user_despachado = user_despachado.nombre;
    ViewTabla();
    SucessMsg("El cliente " + user_despachado + " se eliminó exitosamente", 'Puede seguir registrando');
  } else {
    SucessMsg("No hay clientes registrados", 'Puede seguir registrando');
  }
};
// Busqueda.
var SearchClient = function SearchClient() {

  var user_req = $('#searching').val().trim().Capitalize();
  Cliente.map(function (user) {
    if (user.nombre === user_req || user.apellidos === user_req || user.empresa === user_req) {
      return SucessMsg("\n              Nombre: " + user.nombre + "\n              Apellidos: " + user.apellidos + "\n\n              Empresa: " + user.empresa + "\n\n              Hijos: " + user.hijos + "\n\n              Subsidio: " + user.subsidio + "\n\n                ", " Fecha :" + user.fecha, 5000);
    } else {
      return swal({
        title: "No existe " + user_req + " usuario",
        text: user_req + " no sé registró",
        type: "error",
        confirmButtonText: "Cerrar",
        confirmButtonColor: '#490a3d'
      });
    }
  });
};
// Data:Date
var date = {
  dateFormat: "dd-mm-yy",
  firstDay: 1,
  dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
  dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
  monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
};
// FORMULARIO.
var FormRegistro = React.createClass({
  displayName: "FormRegistro",

  render: function render() {
    $(function () {
      $("#fecha").datepicker(date);
    });
    return React.createElement(
      "div",
      { className: "Formulario" },
      React.createElement(
        "h2",
        null,
        React.createElement("i", { className: "fa fa-address-card-o", "aria-hidden": "true" }),
        " Registro"
      ),
      React.createElement(
        "form",
        { id: "formID" },
        React.createElement(
          "label",
          { "for": "nombre" },
          "Nombre"
        ),
        React.createElement("input", { type: "text", placeholder: question[0], id: "nombre", required: true }),
        React.createElement(
          "label",
          { "for": "apellidos" },
          "Apellidos"
        ),
        React.createElement("input", { type: "text", placeholder: question[1], id: "apellidos", required: true }),
        React.createElement(
          "label",
          { "for": "empresa" },
          "Empresa"
        ),
        React.createElement("input", { type: "text", placeholder: question[2], id: "empresa", required: true }),
        React.createElement(
          "label",
          { "for": "hijos" },
          "Nº hijos"
        ),
        React.createElement("input", { type: "number", min: "1", max: "10", placeholder: question[3], id: "hijos", readonly: "readonly", required: "required" }),
        React.createElement(
          "label",
          { "for": "fecha" },
          "Fecha"
        ),
        React.createElement("input", { id: "fecha", type: "text", placeholder: question[4], required: true }),
        React.createElement(
          "button",
          { className: "btn", type: "button", onClick: SendData },
          React.createElement("i", { className: "fa fa fa-plus", "aria-hidden": "true" }),
          " Registrar"
        ),
        React.createElement(
          "button",
          { className: "btn", type: "button", onClick: ViewTabla },
          React.createElement("i", { className: "fa fa fa fa-database", "aria-hidden": "true" }),
          " Ver registrados"
        )
      )
    );
  }
});

//  DATAGRIV:
var DataGriv = function (_React$Component) {
  _inherits(DataGriv, _React$Component);

  function DataGriv(props) {
    _classCallCheck(this, DataGriv);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      User: Cliente
    };
    return _this;
  }

  DataGriv.prototype.render = function render() {
    var data = this.state.User.map(function (Cliente, i) {
      return React.createElement(
        "tr",
        { key: i },
        React.createElement(
          "th",
          null,
          Cliente.nombre
        ),
        React.createElement(
          "th",
          null,
          Cliente.apellidos
        ),
        React.createElement(
          "th",
          null,
          Cliente.empresa
        ),
        React.createElement(
          "th",
          null,
          Cliente.hijos
        ),
        React.createElement(
          "th",
          null,
          Cliente.subsidio
        ),
        React.createElement(
          "th",
          null,
          Cliente.fecha
        )
      );
    });
    return React.createElement(
      "div",
      { className: "Formulario Griv" },
      React.createElement(
        "h2",
        null,
        React.createElement("i", { className: "fa fa-database", "aria-hidden": "true" }),
        " Datos en Cola "
      ),
      React.createElement(
        "label",
        { "for": "search" },
        React.createElement("i", { className: "fa fa-search", "aria-hidden": "true" }),
        " Buscador"
      ),
      React.createElement("input", { id: "searching", type: "search", placeholder: "Buscar por nombre..." }),
      React.createElement(
        "div",
        { "class": "container" },
        React.createElement(
          "strong",
          null,
          React.createElement("i", { className: "fa fa-user", "aria-hidden": "true" }),
          " Clientes en Total  : ",
          data.length
        ),
        React.createElement(
          "table",
          { id: "table" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                React.createElement(
                  "strong",
                  null,
                  React.createElement(
                    "i",
                    { className: "fa fa-user", "aria-hidden": "true" },
                    " "
                  ),
                  "Nombres"
                )
              ),
              React.createElement(
                "th",
                null,
                React.createElement(
                  "strong",
                  null,
                  React.createElement(
                    "i",
                    { className: "fa fa-users", "aria-hidden": "true" },
                    " "
                  ),
                  "Apellidos"
                )
              ),
              React.createElement(
                "th",
                null,
                React.createElement(
                  "strong",
                  null,
                  React.createElement(
                    "i",
                    { className: "fa fa-suitcase", "aria-hidden": "true" },
                    " "
                  ),
                  "Empresa"
                )
              ),
              React.createElement(
                "th",
                null,
                React.createElement(
                  "strong",
                  null,
                  React.createElement(
                    "i",
                    { className: "fa fa-child", "aria-hidden": "true" },
                    " "
                  ),
                  "Nº Hijos"
                )
              ),
              React.createElement(
                "th",
                null,
                React.createElement(
                  "strong",
                  null,
                  React.createElement(
                    "i",
                    { className: "fa fa-money", "aria-hidden": "true" },
                    " "
                  ),
                  "Subsidio"
                )
              ),
              React.createElement(
                "th",
                null,
                React.createElement(
                  "strong",
                  null,
                  React.createElement(
                    "i",
                    { className: "fa fa-calendar", "aria-hidden": "true" },
                    " "
                  ),
                  "Fecha"
                )
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            data
          )
        )
      ),
      React.createElement(PadButton, null)
    ); // end render.
  };

  return DataGriv;
}(React.Component);

;

var PadButton = React.createClass({
  displayName: "PadButton",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "colum" },
          React.createElement(
            "button",
            { className: "btn", onClick: DeleteClient },
            React.createElement("i", { className: "fa fa fa fa-trash", "aria-hidden": "true" }),
            " Eliminar en cola"
          ),
          React.createElement(
            "button",
            { className: "btn", onClick: SearchClient },
            React.createElement("i", { className: "fa fa fa fa-search", "aria-hidden": "true" }),
            " Buscar"
          ),
          React.createElement(
            "button",
            { className: "btn", onClick: ViewRegistro },
            React.createElement("i", { className: "fa fa fa fa-plus", "aria-hidden": "true" }),
            " Registrar"
          )
        )
      )
    );
  }
});
/* RENDERS URLS */
GlobalRenderID(React.createElement(FormRegistro, null), 'app');

function ViewTabla() {
  return GlobalRenderID(React.createElement(DataGriv, null), 'app');
}

function ViewRegistro() {
  return GlobalRenderID(React.createElement(FormRegistro, null), 'app');
}
// Renderizador Global.
function GlobalRenderID($ComponentTag, $element) {
  return ReactDOM.render($ComponentTag, document.getElementById($element));
}

function SucessMsg(title, msg, time, btnBool) {
  swal({
    title: title,
    text: msg,
    timer: time || 1600,
    showConfirmButton: btnBool || false
  });
}