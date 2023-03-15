# DOMUS-nodejs-challenge

## Respuestas:

**Ejercicio 2:**

Partiendo de la premisa de que el orden de ejecución O de una función depende de su complejidad temporal constante, la función realizada tiene un orden de ejecución de O(n) donde n será el tamaño del input ingresado, en este caso una palabra. Cada ciclo de iteración, sumado a métodos como .split, .toLowerCase, agregan complejidad temporal que no es constante. 

**Ejercicio 4:**

Un middleware en Express es una función que se ejecuta entre la request del cliente y la response del servidor. Estos tienen acceso a ambas, y pueden realizar diversas tareas como enviar respuestas, validar inputs, procesar datos, entre otras funciones. Son muy útiles a la hora de realizar acciones comunes en todas o varias rutas, como por ejemplo, la autenticación de usuarios frente a peticiones protegidas. 

**Ejercicio 5:**

Then y await sirven para manejar la asincronía y promesas en un environment JavaScript. 
Para el caso, then es un método utilizado principalmente para manejar el resultado de una promesa. En primera instancia, se declaran los respectivos ‘resolved’ y ‘rejected’ de la promesa, luego se ejecuta la misma, y una vez se haya resuelto o rechazado, podremos utilizar then para ejecutar una acción posterior al cumplimiento de la operación asincrónica. 

En cambio, await (junto a async) se utiliza para poner en pausa la ejecución de una función asíncrona hasta que la promesa se resuelva, lo que provocará que la función contenida por el await no se ejecute hasta en tanto la promesa se haya resuelto o rechazado. 

**Ejercicio 6:**

Ante el postulado, y teniendo en cuenta que la estrategia adecuada dependerá del contexto específico del sistema y de los requerimientos de rendimiento y escalabilidad del proyecto, optaría por:

- Implementar una estrategia de paginación en caso de que el listado de usuarios fuese muy extensa, a los fines de limitar el número de usuarios devueltos en cada solicitud. 

- Implementar una estrategia de caching: en este caso, puede ser pensado de dos maneras: (1) del lado del cliente: si se trata de un conjunto de datos pequeños (esta es una estrategia que utiliza Google con su sistema de auth-checkout), o (2) del lado del servidor: almacenando la respuesta del endpoint externo en caché, evitando peticiones seguidas pudiendo utilizar ese almacenamiento en futuras consultas. También existen servicios de caché externos como Redis, pero la verdad nunca estuve en la implementación de este tipo de estrategia por lo que no conozco en profundidad sus ventajas y desventajas. 

- Implementar una estrategia de pre-carga de datos: si se trata de datos que no cambian con mucha frecuencia. 

- La que menos me resultó, implementación de estrategias de programación asincrónica: son muy útiles para el caso en que necesitamos actualizar datos de los usuarios en paralelo, en este caso, al mismo tiempo que obtenemos el listado actualizado, pero me trajo más complicaciones que resultados porque los procesos de escritura eran mucho más costosos que los procesos de lectura, y varias veces llegaba la información desactualizada por un momento.

**Ejercicio 7:**

Las principales diferencias entre una DB relacional y una DB no-relacional, pueden ser:

DB relacional [ MySQL, PostgreSQL, Oracle ]:
- Estructura de tabla y relacion de PK y FK
- Utilización de SQL para la consultas.
- Aconsejable para datos estructurados y relaciones complejas entre los datos. 
- Escalabilidad vertical
- Mejor garantía de la integridad de los datos

DB no-relacional [ MongoDB, DynamoDB ]:
- Estructura de documentos o KV en lugar de tablas. 
- No utiliza SQL, sino un lenguaje de consulta propio. 
- Ideal para datos no estructurados o semi-estructurados, como documentos JSON o XML. 
- Escalabilidad horizontal. 
- Mejor rendimiento en operaciones de lectura y escritura masiva.

En cuanto a sus casos de uso, la verdad es que depende de varios factores como la naturaleza de los datos que necesitan almacenarse, la complejidad de las relaciones entre los datos y los requerimientos de rendimiento y escalabilidad (tmb de disponibilidad) del sistema. En mi caso actual, estoy utilizando PostgreSQL ya que estoy desarrollando una plataforma para un cliente cuya industria es la logística y el nivel de estructura de datos es muy estricto, más aún la validación de composición de cada uno. Se tratan de tablas altamente relacionadas, de muchisima dependencia de una con otra (lo cual a veces daña). Por ejemplo: la entidad primaria del sistema son los pedidos de los destinatarios. En esta entidad comienzan a nacer los procesos de toda la empresa. No pueden pensarse los modulos de facturación, distribución, rendiciones, auditorías, sin una inevitable relación directa con esta entidad. Es por eso que seleccionamos este tipo de DB, e intentamos desacoplar la información que puede vivir en solitario en otros formatos de DB, como DynamoDB. 

Con respecto a las dependencias de Node:
- Para DB relacionales se puede utilizar Sequelize. En mi caso, actualmente estoy utilizando TypeORM porque es el ORM por excelencia la Nestjs. 
- Para DB no-relacionales conozco librerías como mongoose, aunque nunca la he implementado. Actualmente, trabajo con las SDK en integraciones Node-AWS, para utilizar los servicios como DynamoDB (además de lambdas, API Gateway, etc.)

**Ejercicio 8:**

(8.1) Realizar pruebas en el código tiene ventajas como la detección de errores y problemas en el código antes de que sean desplegados en entornos productivos (lo que abarata costos y capacity), ayuda a mejorar la calidad del código detectando posibilidad de refactorización. Asimismo, ayuda a acelerar los procesos de desarrollo ya que permite comprobar la conducta del código en diferentes escenarios. Sirve tmb de documentación con el comportamiento esperado del código. 

Como desventajas se puede mencionar que agregan tiempo y costos al proceso de desarrollo, no garantizan la ausencia absoluta de errores en el código, puede que las pruebas sean difíciles de mantener a medida que se complejiza el código, pueden ser imcompletas o inadecuadas y arrojar resultados erróneos. 

(8.2) En cuanto a las pruebas unitarias y pruebas funcionales, aunque ambas son complementarias para garantizar una pieza de software de calidad, se diferencian en:

- Las pruebas unitarias se realizan a nivel de código para asegurarse que cada unidad individual de código funciona correctamente. Estas son realizadas por desarrolladores, y son automatizadas y ejecutadas cada vez que se realiza algún tipo de cambio sobre el código. El principal objetivo de estas pruebas es identificar y corregir errores en el código, antes que el mismo se integre al resto del sistema.
- Las pruebas funcionales, en cambio, se realizan sobre el software completo para comprobar que se cumplen con los requerimientos funcionales y no-funcionales del usuario. Las mismas son desarrolladas por un equipo de QA y suelen ser manuales. El principal objetivo de estas pruebas es detectar cualquier error antes de que la pieza de software se utilice en un entorno de aplicación real. 

(8.3) Hay 81 combinaciones posibles.

(8.4) Pruebas unitarias que realizaría:

- Caso de la SUMA:
Verificación de que la suma de dos enteros es correcta.
Verificación de que la suma de dos enteros negativos es correcta.
Verificación de que la suma de cualquier entero y cero es igual al entero. 

- Caso de la RESTA:
Verificación de que la resta de dos enteros es correcta.
Verificación de que la resta de un entero negativo y un entero positivo es correcta.
Verificación de que la resta de cualquier entero y cero es igual al entero. 

- Caso de la MULTIPLICACIÓN:
Verificación de que la multiplicación de dos enteros es correcta.
Verificación de que la multiplicación de dos enteros negativos es correcta.
Verificación de que la multiplicación de un entero positivo y un entero negativo es correcta. 
Verificación de que la multiplicación de la división de un entero por cero, arroja una excepción o devuelve el resultado adecuado. 

- Caso de la DIVISIÓN:
Verificación de que la división de dos enteros es correcta.
Verificación de que la división de dos enteros negativos es correcta.
Verificación de que la división de un entero positivo y un entero negativo es correcta.
Verificación de que la división por cero arroja una excepción o devuelve el resultado adecuado (tener en cuenta que trabaja con enteros, por lo no se si estaria permitido que me devuelva decimales). 

Para validar que la función recibe un caracter entero, se puede agregar una validación en ambos parámetros recibidos para asegurarse que sean del tipo Int., o en su defecto parsear el argumento a tipo numérico y redondearlo (esto dentro de la función), así evitar trabajar con decimales. En caso de ir por la primera opción, simplemente validando la tipología del dato, ya podemos arrojar una excepción e interrumpir la ejecución de la función. Si elegimos la segunda opción, podemos continuar la ejecución ya que dentro de ella habremos asegurado que los argumentos (aunque incorrectos) han tomado el formato requerido, lo que aseguraría la continuidad de la ejecución. 
