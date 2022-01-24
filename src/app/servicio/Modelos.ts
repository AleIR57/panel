
export class Cliente{
    id!: String;
    nombres!: String;
    apellidos!: String;
    whatsapp!: String;
    telefono!: String;
    correo!: String;
    idVendedor!: any;
}

export  class Producto{
    nombre!: String;
    precio !: any;
}

export class Venta{
    id!: String;
    idProducto!: any;
    idCliente!: any;
    idCuenta!: any;
    cantidad!: any;
    precioTotal!: String;
    metodoPago!: String;
    fecha!: Date;
    observacion!: String;
    estado!: String;
}


export class Cuenta{
    id!: String;
    correo!: String;
    contrasena!: String;
    fechaInicio!: String;
    fechaExpiracion!: String;
    nombrePerfil!: String;
    ping!: any;
    estado!: String;
}


export class Vendedor{
    id!: String;
    nombre!: String;
    nombreUsuario!: String;
    correo!: String;
    contrasena!: String;
    numeroTelefono!: String;
    idRol!: any;
    empresa!: String;
    saldo!: String;
    creditos!: String;
}