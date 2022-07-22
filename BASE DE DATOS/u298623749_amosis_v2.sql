-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 14-07-2022 a las 14:04:42
-- Versión del servidor: 10.5.15-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u298623749_amosis_v2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE `bitacora` (
  `ID_BITACORA` varchar(100) NOT NULL,
  `ID_USUARIO` varchar(10) DEFAULT NULL,
  `F_INICIO` datetime DEFAULT current_timestamp(),
  `F_FIN` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`ID_BITACORA`, `ID_USUARIO`, `F_INICIO`, `F_FIN`) VALUES
('SES990', 'USU0001', '2022-07-14 12:46:59', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `ID_CATEGORIA` int(11) NOT NULL,
  `NOMBRE` varchar(20) DEFAULT NULL,
  `DETALLE` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`ID_CATEGORIA`, `NOMBRE`, `DETALLE`) VALUES
(5, 'Celulares', 'Celulares');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `ID_CLIENTE` varchar(20) NOT NULL,
  `NOMBRE` varchar(100) DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`ID_CLIENTE`, `NOMBRE`, `DIRECCION`) VALUES
('100', 'Cliente ', 'Cliente ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion`
--

CREATE TABLE `cotizacion` (
  `ID_COTIZACION` varchar(10) NOT NULL,
  `ID_CLIENTE` varchar(20) NOT NULL,
  `ID_USUARIO` varchar(10) NOT NULL,
  `FECHAHORA` datetime DEFAULT NULL,
  `FECHA` date NOT NULL,
  `ENTREGA` int(11) DEFAULT NULL,
  `SUBTOTAL` double(6,2) DEFAULT NULL,
  `DESCUENTO` double(6,2) DEFAULT NULL,
  `PRECIO_VENTA` double(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuotas_credito`
--

CREATE TABLE `cuotas_credito` (
  `ID_CUOTA` int(11) NOT NULL,
  `NUM_CUOTA` int(11) DEFAULT NULL,
  `ID_VENTA` varchar(15) DEFAULT NULL,
  `ID_CLIENTE` varchar(10) DEFAULT NULL,
  `MES` varchar(2) DEFAULT NULL,
  `ANO` varchar(4) DEFAULT NULL,
  `DIA` varchar(2) DEFAULT NULL,
  `MONTOCUOTA` decimal(15,2) NOT NULL,
  `ESTADO` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_cotizacion`
--

CREATE TABLE `detalle_cotizacion` (
  `ID_DETALLE` int(11) NOT NULL,
  `ID_COTIZACION` varchar(10) DEFAULT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `DETALLE` varchar(100) DEFAULT NULL,
  `CANTIDAD` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_salida_entrada_producto`
--

CREATE TABLE `detalle_salida_entrada_producto` (
  `ID_DETALLE` int(11) NOT NULL,
  `TIPO_DETALLE` int(11) DEFAULT NULL,
  `ID_SALIDA_ENTRADA` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `CANTIDAD` int(11) DEFAULT NULL,
  `PRECIO` double(6,2) DEFAULT NULL,
  `STOCK_EXISTENTE` int(11) DEFAULT NULL,
  `FECHA` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detalle_salida_entrada_producto`
--

INSERT INTO `detalle_salida_entrada_producto` (`ID_DETALLE`, `TIPO_DETALLE`, `ID_SALIDA_ENTRADA`, `ID_UNIDAD`, `ID_PRODUCTO`, `CANTIDAD`, `PRECIO`, `STOCK_EXISTENTE`, `FECHA`) VALUES
(4, 1, 'ENTR010', 6, 'PROD674200', 5, 100.00, 5, '2022-07-14 12:50:44'),
(5, 2, '000860', 6, 'PROD674200', 1, 120.00, 4, '2022-07-14 12:52:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta_contado`
--

CREATE TABLE `detalle_venta_contado` (
  `ID_DETALLE` int(11) NOT NULL,
  `ID_VENTA` varchar(15) DEFAULT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `DETALLE` varchar(200) DEFAULT NULL,
  `CANTIDAD` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detalle_venta_contado`
--

INSERT INTO `detalle_venta_contado` (`ID_DETALLE`, `ID_VENTA`, `ID_PRODUCTO`, `ID_UNIDAD`, `DETALLE`, `CANTIDAD`) VALUES
(2, '000860', 'PROD674200', 6, 'und de Demo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta_credito`
--

CREATE TABLE `detalle_venta_credito` (
  `ID_DETALLE` int(11) NOT NULL,
  `ID_VENTA` varchar(15) DEFAULT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `DETALLE` varchar(200) DEFAULT NULL,
  `CANTIDAD` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrada_producto`
--

CREATE TABLE `entrada_producto` (
  `ID_ENTRADA` varchar(10) NOT NULL,
  `TIPO_INGRESO` int(11) DEFAULT NULL,
  `ID_PROVEEDOR` varchar(10) DEFAULT NULL,
  `DOCUMENTO` int(11) DEFAULT NULL,
  `NUMERO` varchar(10) DEFAULT NULL,
  `OBSERVACION` varchar(2000) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL,
  `F_INGRESO` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `entrada_producto`
--

INSERT INTO `entrada_producto` (`ID_ENTRADA`, `TIPO_INGRESO`, `ID_PROVEEDOR`, `DOCUMENTO`, `NUMERO`, `OBSERVACION`, `F_INGRESO`) VALUES
('ENTR010', 1, 'PROV509290', 1, '10', '00', '2022-07-14 12:50:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `ID_MARCA` int(11) NOT NULL,
  `NOMBRE` varchar(20) DEFAULT NULL,
  `DETALLE` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`ID_MARCA`, `NOMBRE`, `DETALLE`) VALUES
(4, 'Lg', 'Lg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paramatros`
--

CREATE TABLE `paramatros` (
  `ID_PARAMETRO` int(11) NOT NULL,
  `MONEDA` varchar(10) DEFAULT NULL,
  `EMPRESA` varchar(100) DEFAULT NULL,
  `TIPO` int(11) DEFAULT NULL,
  `NUMERO` varchar(40) DEFAULT NULL,
  `PROPIETARIO` varchar(100) DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL,
  `LOGO` varchar(100) DEFAULT NULL,
  `LOGOSIDE` varchar(100) NOT NULL,
  `NOMBRESIDE` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paramatros`
--

INSERT INTO `paramatros` (`ID_PARAMETRO`, `MONEDA`, `EMPRESA`, `TIPO`, `NUMERO`, `PROPIETARIO`, `DIRECCION`, `LOGO`, `LOGOSIDE`, `NOMBRESIDE`) VALUES
(1, 'S/.', 'NOMBRE DE LA EMPRESA', 1, '123213213214', 'NOMBRE PROPIETARIO', 'DIRECCION DE LA EMPRESA', 'AMOSIS-LOGO-pdf.png', 'AMOSIS-LOGO.png', 'AMOSIS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `ID_PERSONA` varchar(10) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `APELLIDO` varchar(50) DEFAULT NULL,
  `DNI` varchar(50) DEFAULT NULL,
  `DIRECCION` varchar(50) DEFAULT NULL,
  `TELEFONO` varchar(50) DEFAULT NULL,
  `PERFIL` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`ID_PERSONA`, `NOMBRE`, `APELLIDO`, `DNI`, `DIRECCION`, `TELEFONO`, `PERFIL`) VALUES
('PER0001', 'Administrador', 'Admin', NULL, NULL, NULL, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precio_producto`
--

CREATE TABLE `precio_producto` (
  `ID_PRECIO` int(11) NOT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `UNIDADES` int(11) DEFAULT NULL,
  `PRECIO` double(6,2) DEFAULT NULL,
  `PRECIO_COSTO` double(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `precio_producto`
--

INSERT INTO `precio_producto` (`ID_PRECIO`, `ID_PRODUCTO`, `ID_UNIDAD`, `UNIDADES`, `PRECIO`, `PRECIO_COSTO`) VALUES
(6, 'PROD674200', 1, 1, 120.00, 100.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `ID_PRODUCTO` varchar(10) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `STOCK_MINIMO` int(11) DEFAULT NULL,
  `CODIGO_BARRA` varchar(20) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `ID_MARCA` int(11) DEFAULT NULL,
  `ID_CATEGORIA` int(11) DEFAULT NULL,
  `PRECIO_COSTO` double(6,2) DEFAULT NULL,
  `PRECIO_VENTA` double(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`ID_PRODUCTO`, `NOMBRE`, `STOCK_MINIMO`, `CODIGO_BARRA`, `ID_UNIDAD`, `ID_MARCA`, `ID_CATEGORIA`, `PRECIO_COSTO`, `PRECIO_VENTA`) VALUES
('PROD674200', 'Demo', 10, '1234', 1, 4, 5, 100.00, 120.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_almacen`
--

CREATE TABLE `productos_almacen` (
  `ID_PA` int(11) NOT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `STOCK` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos_almacen`
--

INSERT INTO `productos_almacen` (`ID_PA`, `ID_PRODUCTO`, `STOCK`) VALUES
(3, 'PROD674200', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `ID_PROVEEDOR` varchar(10) NOT NULL,
  `RUC` varchar(11) DEFAULT NULL,
  `RAZON_SOCIAL` varchar(100) DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `TELEFONO` varchar(15) DEFAULT NULL,
  `DIRECCION` varchar(50) DEFAULT NULL,
  `DNI_R` varchar(8) DEFAULT NULL,
  `NOMBRE_R` varchar(50) DEFAULT NULL,
  `DIRECCION_R` varchar(50) DEFAULT NULL,
  `TELEFONO_R` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`ID_PROVEEDOR`, `RUC`, `RAZON_SOCIAL`, `EMAIL`, `TELEFONO`, `DIRECCION`, `DNI_R`, `NOMBRE_R`, `DIRECCION_R`, `TELEFONO_R`) VALUES
('PROV509290', '1000', 'Demo sucursal', 'demo@demo.com', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salida_producto`
--

CREATE TABLE `salida_producto` (
  `ID_SALIDA` varchar(10) NOT NULL,
  `TIPO_SALIDA` int(11) DEFAULT NULL,
  `DESTINATARIO` varchar(50) DEFAULT NULL,
  `DOC_DESTINATARIO` int(11) DEFAULT NULL,
  `NUM_DOC_DESTINATARIO` varchar(15) DEFAULT NULL,
  `DOCUMENTO` int(11) DEFAULT NULL,
  `NUMERO` varchar(10) DEFAULT NULL,
  `OBSERVACION` varchar(2000) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL,
  `F_SALIDA` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `salida_producto`
--

INSERT INTO `salida_producto` (`ID_SALIDA`, `TIPO_SALIDA`, `DESTINATARIO`, `DOC_DESTINATARIO`, `NUM_DOC_DESTINATARIO`, `DOCUMENTO`, `NUMERO`, `OBSERVACION`, `F_SALIDA`) VALUES
('000860', 1, 'Cliente ', 6, '100', 2, '000860', 'Venta de tipo contado con Ticket: 000860, SubTotal de venta: 120, Descuento: 0, Total: 120', '2022-07-14 12:52:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket`
--

CREATE TABLE `ticket` (
  `ID` int(11) NOT NULL,
  `TITULO` varchar(100) DEFAULT NULL,
  `TELEFONO` varchar(20) DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL,
  `PIE` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ticket`
--

INSERT INTO `ticket` (`ID`, `TITULO`, `TELEFONO`, `DIRECCION`, `PIE`) VALUES
(1, 'PUNTO DE VENTA PRUEBA', '+99 999999999', 'AV. Direccion', 'Gracias por Tu compra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket_cuotas_credito`
--

CREATE TABLE `ticket_cuotas_credito` (
  `ID_TICKET` int(11) NOT NULL,
  `ID_CUOTA` int(11) DEFAULT NULL,
  `FECHAHORA` datetime DEFAULT NULL,
  `PAGOCON` decimal(15,2) NOT NULL,
  `CAMBIO` decimal(15,2) NOT NULL,
  `ID_USUARIO` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket_inicial_credito`
--

CREATE TABLE `ticket_inicial_credito` (
  `ID_TICKET` int(11) NOT NULL,
  `ID_VENTA` varchar(15) DEFAULT NULL,
  `FECHAHORA` datetime DEFAULT NULL,
  `INICIAL` decimal(15,2) NOT NULL,
  `PAGOCON` decimal(15,2) NOT NULL,
  `CAMBIO` decimal(15,2) NOT NULL,
  `ID_CLIENTE` varchar(10) DEFAULT NULL,
  `ID_USUARIO` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turno`
--

CREATE TABLE `turno` (
  `ID_TURNO` varchar(15) NOT NULL,
  `SALDO` double(6,2) DEFAULT NULL,
  `FECHA_I` date DEFAULT NULL,
  `FECHA_F` date DEFAULT NULL,
  `FHORA` datetime DEFAULT NULL,
  `FHORA2` datetime DEFAULT NULL,
  `ESTADO` int(11) DEFAULT NULL,
  `ID_USUARIO` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `turno`
--

INSERT INTO `turno` (`ID_TURNO`, `SALDO`, `FECHA_I`, `FECHA_F`, `FHORA`, `FHORA2`, `ESTADO`, `ID_USUARIO`) VALUES
('TURN91838378', 10.00, '2022-07-14', NULL, '2022-07-14 07:51:33', NULL, 1, 'USU0001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad_medida`
--

CREATE TABLE `unidad_medida` (
  `ID_UNIDAD` int(11) NOT NULL,
  `PREFIJO` varchar(10) DEFAULT NULL,
  `DETALLE` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `unidad_medida`
--

INSERT INTO `unidad_medida` (`ID_UNIDAD`, `PREFIJO`, `DETALLE`) VALUES
(1, 'und', 'Unidad'),
(2, 'kg', 'Kilogramo'),
(3, 'mm', 'Milimetro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID_USUARIO` varchar(10) NOT NULL,
  `USUARIO` varchar(50) DEFAULT NULL,
  `PASS` varchar(200) DEFAULT NULL,
  `ID_PERSONA` varchar(10) DEFAULT NULL,
  `PRIVILEGIO` int(11) DEFAULT NULL,
  `ESTADO` int(11) DEFAULT NULL,
  `DASHBOARD` int(11) NOT NULL,
  `ALMACEN` int(11) NOT NULL,
  `COMPRAS` int(11) NOT NULL,
  `VENTAS` int(11) NOT NULL,
  `TURNOS` int(1) NOT NULL,
  `COTIZACION` int(11) NOT NULL,
  `INVENTARIO` int(11) NOT NULL,
  `ADMIN` int(11) NOT NULL,
  `PARAMETROS` int(11) NOT NULL,
  `BACKUP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID_USUARIO`, `USUARIO`, `PASS`, `ID_PERSONA`, `PRIVILEGIO`, `ESTADO`, `DASHBOARD`, `ALMACEN`, `COMPRAS`, `VENTAS`, `TURNOS`, `COTIZACION`, `INVENTARIO`, `ADMIN`, `PARAMETROS`, `BACKUP`) VALUES
('USU0001', 'Administrador', 'NEM0enB4VEY1cWRNWTJuZGpHcHIxQT09', 'PER0001', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_contado`
--

CREATE TABLE `venta_contado` (
  `ID_VENTA` varchar(15) NOT NULL,
  `FECHAHORA` datetime DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `ANO` varchar(4) DEFAULT NULL,
  `MES` varchar(2) DEFAULT NULL,
  `DIA` varchar(2) DEFAULT NULL,
  `SUBTOTAL` decimal(15,2) NOT NULL,
  `DESCUENTO` decimal(15,2) NOT NULL,
  `TOTAL` decimal(15,2) NOT NULL,
  `PAGOCON` decimal(15,2) NOT NULL,
  `CAMBIO` decimal(15,2) NOT NULL,
  `ESTADO` int(11) DEFAULT NULL,
  `ID_CLIENTE` varchar(20) DEFAULT NULL,
  `ID_USUARIO` varchar(10) DEFAULT NULL,
  `ID_TURNO` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `venta_contado`
--

INSERT INTO `venta_contado` (`ID_VENTA`, `FECHAHORA`, `FECHA`, `ANO`, `MES`, `DIA`, `SUBTOTAL`, `DESCUENTO`, `TOTAL`, `PAGOCON`, `CAMBIO`, `ESTADO`, `ID_CLIENTE`, `ID_USUARIO`, `ID_TURNO`) VALUES
('000860', '2022-07-14 07:52:34', '2022-07-14', '2022', '07', '14', '120.00', '0.00', '120.00', '120.00', '0.00', 1, '100', 'USU0001', 'TURN91838378');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_credito`
--

CREATE TABLE `venta_credito` (
  `ID_VENTA` varchar(15) NOT NULL,
  `FECHA` date DEFAULT NULL,
  `ANO` varchar(4) DEFAULT NULL,
  `MES` varchar(2) DEFAULT NULL,
  `DIA` varchar(2) DEFAULT NULL,
  `SUBTOTAL` decimal(15,2) NOT NULL,
  `DESCUENTO` decimal(15,2) NOT NULL,
  `TASA` varchar(2) DEFAULT NULL,
  `INTERES` decimal(15,2) NOT NULL,
  `TOTAL` decimal(15,2) NOT NULL,
  `ID_CLIENTE` varchar(20) DEFAULT NULL,
  `ID_USUARIO` varchar(10) DEFAULT NULL,
  `ESTADO` int(11) DEFAULT NULL,
  `MESES` int(11) DEFAULT NULL,
  `MESESCUOTA` decimal(15,2) NOT NULL,
  `INICIAL` decimal(15,2) NOT NULL,
  `DIA_PAGO` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD PRIMARY KEY (`ID_BITACORA`),
  ADD KEY `ID_USUARIO` (`ID_USUARIO`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID_CATEGORIA`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`ID_CLIENTE`);

--
-- Indices de la tabla `cotizacion`
--
ALTER TABLE `cotizacion`
  ADD PRIMARY KEY (`ID_COTIZACION`);

--
-- Indices de la tabla `cuotas_credito`
--
ALTER TABLE `cuotas_credito`
  ADD PRIMARY KEY (`ID_CUOTA`),
  ADD KEY `ID_VENTA` (`ID_VENTA`),
  ADD KEY `ID_CLIENTE` (`ID_CLIENTE`);

--
-- Indices de la tabla `detalle_cotizacion`
--
ALTER TABLE `detalle_cotizacion`
  ADD PRIMARY KEY (`ID_DETALLE`);

--
-- Indices de la tabla `detalle_salida_entrada_producto`
--
ALTER TABLE `detalle_salida_entrada_producto`
  ADD PRIMARY KEY (`ID_DETALLE`),
  ADD KEY `ID_PRODUCTO` (`ID_PRODUCTO`);

--
-- Indices de la tabla `detalle_venta_contado`
--
ALTER TABLE `detalle_venta_contado`
  ADD PRIMARY KEY (`ID_DETALLE`),
  ADD KEY `ID_VENTA` (`ID_VENTA`),
  ADD KEY `ID_PRODUCTO` (`ID_PRODUCTO`);

--
-- Indices de la tabla `detalle_venta_credito`
--
ALTER TABLE `detalle_venta_credito`
  ADD PRIMARY KEY (`ID_DETALLE`),
  ADD KEY `ID_VENTA` (`ID_VENTA`),
  ADD KEY `ID_PRODUCTO` (`ID_PRODUCTO`);

--
-- Indices de la tabla `entrada_producto`
--
ALTER TABLE `entrada_producto`
  ADD PRIMARY KEY (`ID_ENTRADA`),
  ADD KEY `ID_PROVEEDOR` (`ID_PROVEEDOR`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`ID_MARCA`);

--
-- Indices de la tabla `paramatros`
--
ALTER TABLE `paramatros`
  ADD PRIMARY KEY (`ID_PARAMETRO`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`ID_PERSONA`);

--
-- Indices de la tabla `precio_producto`
--
ALTER TABLE `precio_producto`
  ADD PRIMARY KEY (`ID_PRECIO`),
  ADD KEY `ID_UNIDAD` (`ID_UNIDAD`),
  ADD KEY `ID_PRODUCTO` (`ID_PRODUCTO`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`ID_PRODUCTO`),
  ADD KEY `ID_MARCA` (`ID_MARCA`),
  ADD KEY `ID_CATEGORIA` (`ID_CATEGORIA`);

--
-- Indices de la tabla `productos_almacen`
--
ALTER TABLE `productos_almacen`
  ADD PRIMARY KEY (`ID_PA`),
  ADD KEY `ID_PRODUCTO` (`ID_PRODUCTO`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`ID_PROVEEDOR`);

--
-- Indices de la tabla `salida_producto`
--
ALTER TABLE `salida_producto`
  ADD PRIMARY KEY (`ID_SALIDA`);

--
-- Indices de la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `ticket_cuotas_credito`
--
ALTER TABLE `ticket_cuotas_credito`
  ADD PRIMARY KEY (`ID_TICKET`),
  ADD KEY `ID_CUOTA` (`ID_CUOTA`),
  ADD KEY `ID_USUARIO` (`ID_USUARIO`);

--
-- Indices de la tabla `ticket_inicial_credito`
--
ALTER TABLE `ticket_inicial_credito`
  ADD PRIMARY KEY (`ID_TICKET`),
  ADD KEY `ID_VENTA` (`ID_VENTA`),
  ADD KEY `ID_USUARIO` (`ID_USUARIO`),
  ADD KEY `ID_CLIENTE` (`ID_CLIENTE`);

--
-- Indices de la tabla `turno`
--
ALTER TABLE `turno`
  ADD PRIMARY KEY (`ID_TURNO`);

--
-- Indices de la tabla `unidad_medida`
--
ALTER TABLE `unidad_medida`
  ADD PRIMARY KEY (`ID_UNIDAD`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID_USUARIO`),
  ADD KEY `ID_PERSONA` (`ID_PERSONA`);

--
-- Indices de la tabla `venta_contado`
--
ALTER TABLE `venta_contado`
  ADD PRIMARY KEY (`ID_VENTA`),
  ADD KEY `ID_USUARIO` (`ID_USUARIO`);

--
-- Indices de la tabla `venta_credito`
--
ALTER TABLE `venta_credito`
  ADD PRIMARY KEY (`ID_VENTA`),
  ADD KEY `ID_USUARIO` (`ID_USUARIO`),
  ADD KEY `ID_CLIENTE` (`ID_CLIENTE`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID_CATEGORIA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cuotas_credito`
--
ALTER TABLE `cuotas_credito`
  MODIFY `ID_CUOTA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detalle_cotizacion`
--
ALTER TABLE `detalle_cotizacion`
  MODIFY `ID_DETALLE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detalle_salida_entrada_producto`
--
ALTER TABLE `detalle_salida_entrada_producto`
  MODIFY `ID_DETALLE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `detalle_venta_contado`
--
ALTER TABLE `detalle_venta_contado`
  MODIFY `ID_DETALLE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detalle_venta_credito`
--
ALTER TABLE `detalle_venta_credito`
  MODIFY `ID_DETALLE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `ID_MARCA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `paramatros`
--
ALTER TABLE `paramatros`
  MODIFY `ID_PARAMETRO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `precio_producto`
--
ALTER TABLE `precio_producto`
  MODIFY `ID_PRECIO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productos_almacen`
--
ALTER TABLE `productos_almacen`
  MODIFY `ID_PA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ticket`
--
ALTER TABLE `ticket`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ticket_cuotas_credito`
--
ALTER TABLE `ticket_cuotas_credito`
  MODIFY `ID_TICKET` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ticket_inicial_credito`
--
ALTER TABLE `ticket_inicial_credito`
  MODIFY `ID_TICKET` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `unidad_medida`
--
ALTER TABLE `unidad_medida`
  MODIFY `ID_UNIDAD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD CONSTRAINT `bitacora_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`);

--
-- Filtros para la tabla `cuotas_credito`
--
ALTER TABLE `cuotas_credito`
  ADD CONSTRAINT `cuotas_credito_ibfk_1` FOREIGN KEY (`ID_VENTA`) REFERENCES `venta_credito` (`ID_VENTA`),
  ADD CONSTRAINT `cuotas_credito_ibfk_2` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`);

--
-- Filtros para la tabla `detalle_salida_entrada_producto`
--
ALTER TABLE `detalle_salida_entrada_producto`
  ADD CONSTRAINT `detalle_salida_entrada_producto_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`);

--
-- Filtros para la tabla `detalle_venta_contado`
--
ALTER TABLE `detalle_venta_contado`
  ADD CONSTRAINT `detalle_venta_contado_ibfk_1` FOREIGN KEY (`ID_VENTA`) REFERENCES `venta_contado` (`ID_VENTA`),
  ADD CONSTRAINT `detalle_venta_contado_ibfk_2` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`);

--
-- Filtros para la tabla `detalle_venta_credito`
--
ALTER TABLE `detalle_venta_credito`
  ADD CONSTRAINT `detalle_venta_credito_ibfk_1` FOREIGN KEY (`ID_VENTA`) REFERENCES `venta_credito` (`ID_VENTA`),
  ADD CONSTRAINT `detalle_venta_credito_ibfk_2` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`);

--
-- Filtros para la tabla `entrada_producto`
--
ALTER TABLE `entrada_producto`
  ADD CONSTRAINT `entrada_producto_ibfk_1` FOREIGN KEY (`ID_PROVEEDOR`) REFERENCES `proveedor` (`ID_PROVEEDOR`);

--
-- Filtros para la tabla `precio_producto`
--
ALTER TABLE `precio_producto`
  ADD CONSTRAINT `precio_producto_ibfk_1` FOREIGN KEY (`ID_UNIDAD`) REFERENCES `unidad_medida` (`ID_UNIDAD`),
  ADD CONSTRAINT `precio_producto_ibfk_2` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`ID_MARCA`) REFERENCES `marca` (`ID_MARCA`),
  ADD CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`ID_CATEGORIA`) REFERENCES `categoria` (`ID_CATEGORIA`);

--
-- Filtros para la tabla `productos_almacen`
--
ALTER TABLE `productos_almacen`
  ADD CONSTRAINT `productos_almacen_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`);

--
-- Filtros para la tabla `ticket_cuotas_credito`
--
ALTER TABLE `ticket_cuotas_credito`
  ADD CONSTRAINT `ticket_cuotas_credito_ibfk_1` FOREIGN KEY (`ID_CUOTA`) REFERENCES `cuotas_credito` (`ID_CUOTA`),
  ADD CONSTRAINT `ticket_cuotas_credito_ibfk_2` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`);

--
-- Filtros para la tabla `ticket_inicial_credito`
--
ALTER TABLE `ticket_inicial_credito`
  ADD CONSTRAINT `ticket_inicial_credito_ibfk_1` FOREIGN KEY (`ID_VENTA`) REFERENCES `venta_credito` (`ID_VENTA`),
  ADD CONSTRAINT `ticket_inicial_credito_ibfk_2` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`),
  ADD CONSTRAINT `ticket_inicial_credito_ibfk_3` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `persona` (`ID_PERSONA`);

--
-- Filtros para la tabla `venta_contado`
--
ALTER TABLE `venta_contado`
  ADD CONSTRAINT `venta_contado_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`);

--
-- Filtros para la tabla `venta_credito`
--
ALTER TABLE `venta_credito`
  ADD CONSTRAINT `venta_credito_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`),
  ADD CONSTRAINT `venta_credito_ibfk_2` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
