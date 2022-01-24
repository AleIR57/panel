-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2022 a las 00:47:08
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `panel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `idCliente` int(11) NOT NULL,
  `nombres` varchar(80) NOT NULL,
  `apellidos` varchar(80) NOT NULL,
  `whatsapp` varchar(20) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `correo` varchar(80) NOT NULL,
  `idVendedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`idCliente`, `nombres`, `apellidos`, `whatsapp`, `telefono`, `correo`, `idVendedor`) VALUES
(1, 'Alejandro 2', 'Rico', '34435345', '656454', 'alejandro@gmail.com', 1),
(2, 'Alejandro 3', 'Rico ', '3453546', '4564543', 'alejandro11@gmail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE `cuentas` (
  `idCuenta` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `correo` varchar(80) NOT NULL,
  `contrasena` varchar(80) NOT NULL,
  `fechaInicio` varchar(100) NOT NULL,
  `fechaExpiracion` varchar(100) NOT NULL,
  `nombrePerfil` varchar(80) NOT NULL,
  `ping` varchar(10) NOT NULL,
  `estado` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`idCuenta`, `idProducto`, `correo`, `contrasena`, `fechaInicio`, `fechaExpiracion`, `nombrePerfil`, `ping`, `estado`) VALUES
(1, 1, 'alejandro2@gmail.com', 'alejandro123', '2022-01-24T15:10:07.731Z', '2022-02-24T15:10:07.731Z', 'PERFIL 1', '3232', 'Ocupado'),
(2, 1, 'alejandro3@gmail.com', 'alejandro3', '2022-01-24T15:10:09.731Z', '2022-02-24T15:10:09.731Z', 'PERFIL 2', '2344', 'Ocupado'),
(3, 1, 'alejandro4@gmail.com', 'alejandro4', '2022-01-24T15:39:19.174Z', '2022-02-24T15:39:19.174Z', 'PERFIL 3', '3242', 'Ocupado'),
(4, 1, 'alejandro5@gmail.com', 'alejandro5', '2022-01-24T15:39:35.554Z', '2022-02-24T15:39:35.554Z', 'PERFIL 4', '4231', 'Ocupado'),
(5, 1, 'alejandro7@gmail.com', 'alejandro7', '2022-01-24T15:39:50.662Z', '2022-02-24T15:39:50.662Z', 'PERFIL 1', '3453', 'Ocupado'),
(6, 2, 'cuentanueva@gmail.com', 'cuentanueva123', '2022-01-24T15:56:03.540Z', '2022-02-24T15:56:03.540Z', 'PERFIL 2', '3242', 'Ocupado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `precio` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombre`, `precio`) VALUES
(1, 'Producto 1', '8000'),
(2, 'Producto 2', '9000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idRol`, `nombre`) VALUES
(1, 'Colaborador'),
(2, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

CREATE TABLE `vendedores` (
  `idVendedor` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `nombreUsuario` varchar(80) NOT NULL,
  `correo` varchar(80) NOT NULL,
  `contrasena` varchar(80) NOT NULL,
  `numeroTelefono` varchar(20) NOT NULL,
  `idRol` int(1) NOT NULL,
  `empresa` varchar(80) NOT NULL,
  `saldo` varchar(20) NOT NULL,
  `creditos` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vendedores`
--

INSERT INTO `vendedores` (`idVendedor`, `nombre`, `nombreUsuario`, `correo`, `contrasena`, `numeroTelefono`, `idRol`, `empresa`, `saldo`, `creditos`) VALUES
(1, 'Alejandro', 'alejandro', 'alejandroriico@gmail.com', 'alejandro123', '2233245', 2, 'Empresa', '20000', '20000'),
(2, 'vendedor1 modificado', 'vendedor1', 'vendedor1@gmail.com', 'vendedor123', '434234', 1, 'Empresa', '30000', '20000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `idVenta` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `idCuenta` int(11) NOT NULL,
  `cantidad` varchar(10) NOT NULL,
  `precioTotal` varchar(20) NOT NULL,
  `metodoPago` varchar(80) NOT NULL,
  `fecha` varchar(100) NOT NULL,
  `observacion` varchar(250) NOT NULL,
  `estado` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`idVenta`, `idProducto`, `idCliente`, `idCuenta`, `cantidad`, `precioTotal`, `metodoPago`, `fecha`, `observacion`, `estado`) VALUES
(1, 1, 1, 1, '1', '8000', 'Credito', '8000', 'adsfds', 'Tramitado'),
(2, 1, 1, 2, '2', '1000', 'saldo', '2022-01-23T15:10:34.731Z', 'sdasd', 'En trámite'),
(3, 1, 1, 3, '1', '8000', 'saldo', '2022-01-23T15:22:44.113Z', 'sadasd', 'Tramitado'),
(4, 1, 1, 4, '4', '8000', 'Saldo', '8000', 'Una observacion modificada', 'Tramitado'),
(5, 1, 1, 5, '4', '8000', 'Saldo', '8000', 'Otra observacion modificada', 'Tramitado'),
(6, 2, 2, 6, '2', '9000', 'Saldo', '2022-01-24T15:56:43.636Z', 'Venta de una cuenta nueva', 'En trámite');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idCliente`);

--
-- Indices de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  ADD PRIMARY KEY (`idCuenta`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`idVendedor`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`idVenta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  MODIFY `idCuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `idVendedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `idVenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
