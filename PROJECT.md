# Documento de Requerimientos del Sistema
## Marketplace de Bienes Digitales — Stage 1 (Venta vía WhatsApp)

---

## 1. Introducción

### 1.1 Propósito
Este documento especifica los requerimientos funcionales y no funcionales del Stage 1 de la plataforma de venta de bienes digitales, cuyo canal de venta y cierre de transacción será WhatsApp. Sirve como base para el diseño operativo, la construcción de herramientas de soporte y la definición de métricas de éxito antes de avanzar al Stage 2.

### 1.2 Alcance del Stage 1
El sistema en esta etapa **no** es una plataforma web transaccional. Es un flujo de ventas híbrido: catálogo visible (web simple o catálogo de WhatsApp Business) + cierre de venta, cobro y entrega gestionados manualmente por un operador humano vía WhatsApp.

### 1.3 Categorías de producto incluidas
- Ítems de videojuegos
- Monedas/divisas virtuales de videojuegos
- Gift cards
- Servicios digitales (suscripciones, licencias)

### 1.4 Explícitamente fuera de alcance en Stage 1
- Marketplace C2C (compra-venta entre usuarios finales)
- Programas de fidelización
- Programas de referidos
- Checkout automatizado / pasarela de pago integrada
- Entrega automática de productos

---

## 2. Objetivo del sistema

Validar, con la mínima inversión posible en infraestructura, que existe demanda recurrente en el público venezolano por las cuatro categorías de producto mencionadas, operando con un proceso manual pero **estandarizado y medible**, que permita tomar decisiones informadas sobre qué automatizar en el Stage 2.

---

## 3. Actores del sistema

| Actor | Rol |
|---|---|
| Cliente | Consulta catálogo, arma pedido, negocia y paga vía WhatsApp |
| Operador/Vendedor | Atiende WhatsApp, confirma pedido, verifica pago, entrega producto |
| Administrador | Gestiona catálogo, precios, proveedores, y revisa métricas |
| Proveedor/Mayorista | Suministra los productos digitales que el administrador adquiere como inventario |

---

## 4. Requerimientos funcionales

### 4.1 Catálogo de productos
- RF-01: El sistema debe contar con un catálogo web dinámico (no gestionado dentro de WhatsApp), con nombre, categoría, precio, descripción y disponibilidad de cada producto (para el primer stage esto se activará y desactivará).
- RF-02: El catálogo debe permitir actualización de precios, stock y disponibilidad en tiempo real a través de un panel de administración, sin intervención manual en archivos externos.
- RF-03: Cada producto debe tener un identificador único para su rastreo en el registro de ventas e inventario.
- RF-03b: El catálogo debe soportar las cuatro categorías de producto (ítems de videojuegos, monedas virtuales, gift cards, servicios digitales) con atributos propios por categoría (ej. plataforma/juego para ítems y monedas, denominación para gift cards, duración para servicios).

### 4.2 Flujo de "carrito" y pedido
- RF-04: El cliente debe poder navegar el catálogo web, seleccionar uno o más productos y generar un pedido.
- RF-05: Al finalizar la selección, el sistema debe generar automáticamente un mensaje con la información del pedido (producto(s), cantidad, precio unitario y total) para ser enviado vía WhatsApp.
- RF-05b: WhatsApp se utiliza exclusivamente para la confirmación de pago, coordinación de entrega y atención al cliente — no para la navegación o gestión del catálogo.

### 4.3 Guion de conversación (estandarización del trato)
- RF-06: El operador debe seguir un guion definido con mensajes estándar para: bienvenida, confirmación de pedido, instrucciones de pago, confirmación de pago recibido, entrega del producto y cierre/despedida.
- RF-07: El tono y estructura del guion debe ser consistente independientemente de qué operador atienda.

### 4.4 Verificación de pago
- RF-08: El sistema debe registrar el método de pago utilizado por el cliente (ej. Pago Móvil, Zelle, criptoactivo, otro).
- RF-09: El operador debe confirmar manualmente la recepción del pago antes de proceder a la entrega.
- RF-10: Todo pago debe quedar respaldado con evidencia (captura de comprobante) almacenada junto al registro del pedido.

### 4.5 Entrega del producto
- RF-11: El sistema debe definir un flujo documentado de entrega por tipo de producto (código, key, transferencia de moneda virtual, credenciales de servicio).
- RF-12: El tiempo de entrega debe registrarse desde la confirmación de pago hasta la entrega efectiva.

### 4.6 Registro de transacciones
- RF-13: Cada transacción debe quedar registrada con: fecha, cliente (identificador mínimo, ej. número de WhatsApp), producto, monto, método de pago, tiempo de entrega y operador que atendió.
- RF-14: El registro debe permitir exportación o consulta para análisis posterior (ej. hoja de cálculo).

### 4.7 Gestión de inventario/proveedores
- RF-15: El administrador debe poder registrar el costo de adquisición de cada producto para calcular margen por categoría.
- RF-16: El sistema debe permitir identificar qué proveedor suministró cada unidad vendida, para trazabilidad ante reclamos.

---

## 5. Requerimientos no funcionales

- RNF-01 (Disponibilidad): El canal de atención vía WhatsApp debe tener un horario de atención definido y comunicado públicamente.
- RNF-02 (Tiempo de respuesta): Debe establecerse un tiempo máximo de respuesta objetivo por mensaje entrante (a definir por el negocio, ej. menos de 15 minutos en horario activo).
- RNF-03 (Trazabilidad): Todo registro de transacción debe ser auditable — no se permiten ventas sin registro correspondiente.
- RNF-04 (Simplicidad): La solución técnica del Stage 1 debe minimizar complejidad innecesaria, pero requiere sí un catálogo web con base de datos y panel administrativo, dado el requerimiento de catálogo dinámico. El resto del flujo (cobro, entrega) se mantiene manual vía WhatsApp.
- RNF-05 (Escalabilidad de datos): El formato de registro de transacciones debe ser compatible con una futura migración a un sistema automatizado (Stage 2), es decir, estructurado y no en texto libre no clasificado.

---

## 6. Métricas mínimas a capturar desde el día uno

| Métrica | Propósito |
|---|---|
| Volumen de pedidos por semana | Medir demanda real |
| Producto/categoría más vendida | Priorizar catálogo e inventario |
| Margen por categoría | Evaluar rentabilidad real, no teórica |
| Tiempo promedio de entrega | Detectar cuellos de botella operativos |
| Tasa de recompra por cliente | Medir retención antes de invertir en fidelización |
| Tiempo promedio de respuesta en WhatsApp | Medir calidad de atención |

---

## 7. Criterios de salida del Stage 1 (para avanzar al Stage 2)

El sistema se considera listo para escalar cuando:
1. Existe un flujo operativo documentado y repetible de venta-cobro-entrega para cada categoría de producto.
2. Se cuenta con al menos [N semanas/meses — a definir] de datos de las métricas de la sección 6.
3. Se ha identificado qué categoría(s) de producto justifica(n) inversión en automatización.

---

## 8. Fuera de alcance (reservado para etapas futuras)

- Automatización de pagos y entrega (Stage 2)
- Plataforma web transaccional propia con checkout integrado
- Marketplace C2C entre usuarios
- Integraciones con pasarelas de pago automatizadas

### 8.1 Stage 2 — Sistema de coins (especificación preliminar)
- Los coins se obtienen mediante: (a) programa de referidos, (b) frecuencia/volumen de compras.
- Los coins son canjeables por descuentos en futuras compras dentro de la plataforma.
- Antes de su implementación debe definirse: tasa de conversión coin-a-descuento, límite de acumulación/vencimiento, y su impacto en el margen por categoría (ver sección 6, "Margen por categoría").
- Este sistema depende de tener datos históricos de recompra del Stage 1 (sección 6) para calibrarse con evidencia real, no con supuestos.

---

*Documento base para Stage 1. Debe revisarse y actualizarse antes de iniciar el diseño del Stage 2.*
