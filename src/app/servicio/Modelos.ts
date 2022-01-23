
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
    cantidad!: any;
    precioTotal!: String;
    metodoPago!: String;
    fecha!: Date;
    observacion!: String;
    estado!: String;
}