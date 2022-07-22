SET FOREIGN_KEY_CHECKS=0;

CREATE DATABASE IF NOT EXISTS amosis;

USE amosis;

DROP TABLE IF EXISTS bitacora;

CREATE TABLE `bitacora` (
  `ID_BITACORA` varchar(100) NOT NULL,
  `ID_USUARIO` varchar(10) DEFAULT NULL,
  `F_INICIO` datetime DEFAULT CURRENT_TIMESTAMP,
  `F_FIN` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_BITACORA`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  CONSTRAINT `bitacora_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS categoria;

CREATE TABLE `categoria` (
  `ID_CATEGORIA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(20) DEFAULT NULL,
  `DETALLE` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_CATEGORIA`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS cliente;

CREATE TABLE `cliente` (
  `ID_CLIENTE` varchar(20) NOT NULL,
  `NOMBRE` varchar(100) DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_CLIENTE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS cotizacion;

CREATE TABLE `cotizacion` (
  `ID_COTIZACION` varchar(10) NOT NULL,
  `ID_CLIENTE` varchar(20) NOT NULL,
  `ID_USUARIO` varchar(10) NOT NULL,
  `FECHAHORA` datetime DEFAULT NULL,
  `FECHA` date NOT NULL,
  `ENTREGA` int(11) DEFAULT NULL,
  `SUBTOTAL` double(6,2) DEFAULT NULL,
  `DESCUENTO` double(6,2) DEFAULT NULL,
  `PRECIO_VENTA` double(6,2) DEFAULT NULL,
  PRIMARY KEY (`ID_COTIZACION`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS cuotas_credito;

CREATE TABLE `cuotas_credito` (
  `ID_CUOTA` int(11) NOT NULL AUTO_INCREMENT,
  `NUM_CUOTA` int(11) DEFAULT NULL,
  `ID_VENTA` varchar(15) DEFAULT NULL,
  `ID_CLIENTE` varchar(10) DEFAULT NULL,
  `MES` varchar(2) DEFAULT NULL,
  `ANO` varchar(4) DEFAULT NULL,
  `DIA` varchar(2) DEFAULT NULL,
  `MONTOCUOTA` decimal(15,2) NOT NULL,
  `ESTADO` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_CUOTA`),
  KEY `ID_VENTA` (`ID_VENTA`),
  KEY `ID_CLIENTE` (`ID_CLIENTE`),
  CONSTRAINT `cuotas_credito_ibfk_1` FOREIGN KEY (`ID_VENTA`) REFERENCES `venta_credito` (`ID_VENTA`),
  CONSTRAINT `cuotas_credito_ibfk_2` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS detalle_cotizacion;

CREATE TABLE `detalle_cotizacion` (
  `ID_DETALLE` int(11) NOT NULL AUTO_INCREMENT,
  `ID_COTIZACION` varchar(10) DEFAULT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `DETALLE` varchar(100) DEFAULT NULL,
  `CANTIDAD` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_DETALLE`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS detalle_salida_entrada_producto;

CREATE TABLE `detalle_salida_entrada_producto` (
  `ID_DETALLE` int(11) NOT NULL AUTO_INCREMENT,
  `TIPO_DETALLE` int(11) DEFAULT NULL,
  `ID_SALIDA_ENTRADA` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `CANTIDAD` int(11) DEFAULT NULL,
  `PRECIO` double(6,2) DEFAULT NULL,
  `STOCK_EXISTENTE` int(11) DEFAULT NULL,
  `FECHA` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_DETALLE`),
  KEY `ID_PRODUCTO` (`ID_PRODUCTO`),
  CONSTRAINT `detalle_salida_entrada_producto_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS detalle_venta_contado;

CREATE TABLE `detalle_venta_contado` (
  `ID_DETALLE` int(11) NOT NULL AUTO_INCREMENT,
  `ID_VENTA` varchar(15) DEFAULT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `DETALLE` varchar(200) DEFAULT NULL,
  `CANTIDAD` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_DETALLE`),
  KEY `ID_VENTA` (`ID_VENTA`),
  KEY `ID_PRODUCTO` (`ID_PRODUCTO`),
  CONSTRAINT `detalle_venta_contado_ibfk_1` FOREIGN KEY (`ID_VENTA`) REFERENCES `venta_contado` (`ID_VENTA`),
  CONSTRAINT `detalle_venta_contado_ibfk_2` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS detalle_venta_credito;

CREATE TABLE `detalle_venta_credito` (
  `ID_DETALLE` int(11) NOT NULL AUTO_INCREMENT,
  `ID_VENTA` varchar(15) DEFAULT NULL,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `DETALLE` varchar(200) DEFAULT NULL,
  `CANTIDAD` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_DETALLE`),
  KEY `ID_VENTA` (`ID_VENTA`),
  KEY `ID_PRODUCTO` (`ID_PRODUCTO`),
  CONSTRAINT `detalle_venta_credito_ibfk_1` FOREIGN KEY (`ID_VENTA`) REFERENCES `venta_credito` (`ID_VENTA`),
  CONSTRAINT `detalle_venta_credito_ibfk_2` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;




DROP TABLE IF EXISTS entrada_producto;

CREATE TABLE `entrada_producto` (
  `ID_ENTRADA` varchar(10) NOT NULL,
  `TIPO_INGRESO` int(11) DEFAULT NULL,
  `ID_PROVEEDOR` varchar(10) DEFAULT NULL,
  `DOCUMENTO` int(11) DEFAULT NULL,
  `NUMERO` varchar(10) DEFAULT NULL,
  `OBSERVACION` varchar(2000) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL,
  `F_INGRESO` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_ENTRADA`),
  KEY `ID_PROVEEDOR` (`ID_PROVEEDOR`),
  CONSTRAINT `entrada_producto_ibfk_1` FOREIGN KEY (`ID_PROVEEDOR`) REFERENCES `proveedor` (`ID_PROVEEDOR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS marca;

CREATE TABLE `marca` (
  `ID_MARCA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(20) DEFAULT NULL,
  `DETALLE` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_MARCA`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS paramatros;

CREATE TABLE `paramatros` (
  `ID_PARAMETRO` int(11) NOT NULL AUTO_INCREMENT,
  `MONEDA` varchar(10) DEFAULT NULL,
  `EMPRESA` varchar(100) DEFAULT NULL,
  `TIPO` int(11) DEFAULT NULL,
  `NUMERO` varchar(40) DEFAULT NULL,
  `PROPIETARIO` varchar(100) DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL,
  `LOGO` varchar(100) DEFAULT NULL,
  `LOGOSIDE` varchar(100) NOT NULL,
  `NOMBRESIDE` varchar(25) NOT NULL,
  PRIMARY KEY (`ID_PARAMETRO`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

INSERT INTO paramatros VALUES("1","S/.","NOMBRE DE LA EMPRESA","1","123213213214","NOMBRE PROPIETARIO","DIRECCION DE LA EMPRESA","AMOSIS-LOGO-pdf.png","AMOSIS-LOGO.png","AMOSIS");


DROP TABLE IF EXISTS persona;

CREATE TABLE `persona` (
  `ID_PERSONA` varchar(10) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `APELLIDO` varchar(50) DEFAULT NULL,
  `DNI` varchar(50) DEFAULT NULL,
  `DIRECCION` varchar(50) DEFAULT NULL,
  `TELEFONO` varchar(50) DEFAULT NULL,
  `PERFIL` varchar(200) NOT NULL,
  PRIMARY KEY (`ID_PERSONA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS precio_producto;

CREATE TABLE `precio_producto` (
  `ID_PRECIO` int(11) NOT NULL AUTO_INCREMENT,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `UNIDADES` int(11) DEFAULT NULL,
  `PRECIO` double(6,2) DEFAULT NULL,
  `PRECIO_COSTO` double(6,2) DEFAULT NULL,
  PRIMARY KEY (`ID_PRECIO`),
  KEY `ID_UNIDAD` (`ID_UNIDAD`),
  KEY `ID_PRODUCTO` (`ID_PRODUCTO`),
  CONSTRAINT `precio_producto_ibfk_1` FOREIGN KEY (`ID_UNIDAD`) REFERENCES `unidad_medida` (`ID_UNIDAD`),
  CONSTRAINT `precio_producto_ibfk_2` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS producto;

CREATE TABLE `producto` (
  `ID_PRODUCTO` varchar(10) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `STOCK_MINIMO` int(11) DEFAULT NULL,
  `CODIGO_BARRA` varchar(20) DEFAULT NULL,
  `ID_UNIDAD` int(11) DEFAULT NULL,
  `ID_MARCA` int(11) DEFAULT NULL,
  `ID_CATEGORIA` int(11) DEFAULT NULL,
  `PRECIO_COSTO` double(6,2) DEFAULT NULL,
  `PRECIO_VENTA` double(6,2) DEFAULT NULL,
  PRIMARY KEY (`ID_PRODUCTO`),
  KEY `ID_MARCA` (`ID_MARCA`),
  KEY `ID_CATEGORIA` (`ID_CATEGORIA`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`ID_MARCA`) REFERENCES `marca` (`ID_MARCA`),
  CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`ID_CATEGORIA`) REFERENCES `categoria` (`ID_CATEGORIA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS productos_almacen;

CREATE TABLE `productos_almacen` (
  `ID_PA` int(11) NOT NULL AUTO_INCREMENT,
  `ID_PRODUCTO` varchar(10) DEFAULT NULL,
  `STOCK` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_PA`),
  KEY `ID_PRODUCTO` (`ID_PRODUCTO`),
  CONSTRAINT `productos_almacen_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID_PRODUCTO`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS proveedor;

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
  `TELEFONO_R` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`ID_PROVEEDOR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS salida_producto;

CREATE TABLE `salida_producto` (
  `ID_SALIDA` varchar(10) NOT NULL,
  `TIPO_SALIDA` int(11) DEFAULT NULL,
  `DESTINATARIO` varchar(50) DEFAULT NULL,
  `DOC_DESTINATARIO` int(11) DEFAULT NULL,
  `NUM_DOC_DESTINATARIO` varchar(15) DEFAULT NULL,
  `DOCUMENTO` int(11) DEFAULT NULL,
  `NUMERO` varchar(10) DEFAULT NULL,
  `OBSERVACION` varchar(2000) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL,
  `F_SALIDA` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_SALIDA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS ticket;

CREATE TABLE `ticket` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TITULO` varchar(100) DEFAULT NULL,
  `TELEFONO` varchar(20) DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL,
  `PIE` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

INSERT INTO ticket VALUES("1","PUNTO DE VENTA PRUEBA","+99 999999999","AV. Direccion","Gracias por Tu compra");


DROP TABLE IF EXISTS ticket_cuotas_credito;

CREATE TABLE `ticket_cuotas_credito` (
  `ID_TICKET` int(11) NOT NULL AUTO_INCREMENT,
  `ID_CUOTA` int(11) DEFAULT NULL,
  `FECHAHORA` datetime DEFAULT NULL,
  `PAGOCON` decimal(15,2) NOT NULL,
  `CAMBIO` decimal(15,2) NOT NULL,
  `ID_USUARIO` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ID_TICKET`),
  KEY `ID_CUOTA` (`ID_CUOTA`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  CONSTRAINT `ticket_cuotas_credito_ibfk_1` FOREIGN KEY (`ID_CUOTA`) REFERENCES `cuotas_credito` (`ID_CUOTA`),
  CONSTRAINT `ticket_cuotas_credito_ibfk_2` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS ticket_inicial_credito;

CREATE TABLE `ticket_inicial_credito` (
  `ID_TICKET` int(11) NOT NULL AUTO_INCREMENT,
  `ID_VENTA` varchar(15) DEFAULT NULL,
  `FECHAHORA` datetime DEFAULT NULL,
  `INICIAL` decimal(15,2) NOT NULL,
  `PAGOCON` decimal(15,2) NOT NULL,
  `CAMBIO` decimal(15,2) NOT NULL,
  `ID_CLIENTE` varchar(10) DEFAULT NULL,
  `ID_USUARIO` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ID_TICKET`),
  KEY `ID_VENTA` (`ID_VENTA`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  KEY `ID_CLIENTE` (`ID_CLIENTE`),
  CONSTRAINT `ticket_inicial_credito_ibfk_1` FOREIGN KEY (`ID_VENTA`) REFERENCES `venta_credito` (`ID_VENTA`),
  CONSTRAINT `ticket_inicial_credito_ibfk_2` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`),
  CONSTRAINT `ticket_inicial_credito_ibfk_3` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS turno;

CREATE TABLE `turno` (
  `ID_TURNO` varchar(15) NOT NULL,
  `SALDO` double(6,2) DEFAULT NULL,
  `FECHA_I` date DEFAULT NULL,
  `FECHA_F` date DEFAULT NULL,
  `FHORA` datetime DEFAULT NULL,
  `FHORA2` datetime DEFAULT NULL,
  `ESTADO` int(11) DEFAULT NULL,
  `ID_USUARIO` varchar(10) NOT NULL,
  PRIMARY KEY (`ID_TURNO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS unidad_medida;

CREATE TABLE `unidad_medida` (
  `ID_UNIDAD` int(11) NOT NULL AUTO_INCREMENT,
  `PREFIJO` varchar(10) DEFAULT NULL,
  `DETALLE` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_UNIDAD`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

INSERT INTO unidad_medida VALUES("1","und","Unidad");
INSERT INTO unidad_medida VALUES("2","kg","Kilogramo");
INSERT INTO unidad_medida VALUES("3","mm","Milimetro");
INSERT INTO unidad_medida VALUES("4","cm","Centimetro");
INSERT INTO unidad_medida VALUES("5","inch","Pulgada");
INSERT INTO unidad_medida VALUES("6","ft","Pie");
INSERT INTO unidad_medida VALUES("7","yd","Yarda");
INSERT INTO unidad_medida VALUES("8","ml","Mililitro");
INSERT INTO unidad_medida VALUES("9","L","Litro");
INSERT INTO unidad_medida VALUES("10","mg","Miligramo");
INSERT INTO unidad_medida VALUES("11","g","gramo");
INSERT INTO unidad_medida VALUES("12","oz","Onza");
INSERT INTO unidad_medida VALUES("13","lb","Libra");
INSERT INTO unidad_medida VALUES("14","pkg","Paquete");
INSERT INTO unidad_medida VALUES("15","Caj","Caja");
INSERT INTO unidad_medida VALUES("28","blister","Blister");


DROP TABLE IF EXISTS usuario;

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
  `BACKUP` int(11) NOT NULL,
  PRIMARY KEY (`ID_USUARIO`),
  KEY `ID_PERSONA` (`ID_PERSONA`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`ID_PERSONA`) REFERENCES `persona` (`ID_PERSONA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS venta_contado;

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
  `ID_TURNO` varchar(15) NOT NULL,
  PRIMARY KEY (`ID_VENTA`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  CONSTRAINT `venta_contado_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS venta_credito;

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
  `DIA_PAGO` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`ID_VENTA`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  KEY `ID_CLIENTE` (`ID_CLIENTE`),
  CONSTRAINT `venta_credito_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`),
  CONSTRAINT `venta_credito_ibfk_2` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


SET FOREIGN_KEY_CHECKS=1;