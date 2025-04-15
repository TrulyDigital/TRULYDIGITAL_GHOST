# TrulyDigital.tech - Menú general de Navegación.

**Objetivo General**

Realizar el diseño y descripción de cada uno de los items del menú de navegación para el blog `https://trulydigital.tech`.

**Objetivos Específicos**

- Realizar el diagrama de estructura de árbol del menú de navegación del blog, para poder tener una fácil visualización y planeación de la construcción de artículos.

- Convertir cada item del menú de navegación en una entrada o **post** del blog, el artículo debe ser muy bien estructurado, completo, detallado y lo mas educativo posible, sin escatimar en la longitud del artículo.

- Cada item del menú de navegación diseñado en esta documentación, debe tener una descripción general sobre los temas que se tratarán en el artículo.

- Cada item del menú de navegación diseñado en esta documentación, debe tener un cuadro representativo de **cada una** de las palabras clave que se incluirán en el artículo, una estimación de búsqueda mensual de cada palabra clave y el promedio del total de búsquedas de palabras para ese artículo. Información basada en las estadísticas encontradas en **Google ADS**. 

**Observaciones**

Las siguientes son las palabras claves **principales** con las que se iniciaron las consultas en **Google ADS** y cada uno de sus resultados sirvieron como insumo para saber que palabras clave incluir en cada uno de los artículos que se describen en esta documentación.

- nestjs
- arquitectura hexagonal
- spring boot
- docker
- microservicios
- typescript
- rabbitmq
- apache kafka
- mysql
- postgresql

Los países donde se analizan el promedio e intención de búsquedas de palabras claves son:

- Colombia
- Argentina
- España
- México

## Arquitectura SEO transaccional

```
📂 https://trulydigital.tech
 |
 |
 |
 |   # Menú principal desplegable
 ├── 📂 Nombre: 2. NestJS  
 |   | 
 |   |   # Menú item             
 │   ├── 📂 Nombre: 2.1 Primeros pasos.
 |   |   |   Descripción:
 |   |   |   URI: /nestjs/tutorial-nestjs/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre Menú Item: 2.1.1 Controladores.
 |   |   |       Título Artículo: Controladores en NestJS: qué son, cómo funcionan y cómo crear uno 
 |   |   |       URI: /nestjs/tutorial-nestjs/controladores/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre: 2.2.1 Dependencias.   
 |   |   |       URI: /nestjs/tutorial-nestjs/inyeccion-de-dependencias/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre: 2.3.1 Módulos.   
 |   |   |       URI: /nestjs/tutorial-nestjs/modulos/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre: 2.4.1 Servicios.   
 |   |   |       URI: /nestjs/tutorial-nestjs/servicios/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre: 2.5.1 HTTP.   
 |   |   |       URI: /nestjs/tutorial-nestjs/http/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre: 2.6.1 Configuraciones.   
 |   |   |       URI: /nestjs/tutorial-nestjs/variables-de-entorno/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre: 2.7.1 Interceptores.   
 |   |   |       URI: /nestjs/tutorial-nestjs/interceptores/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre: 2.8.1 Middlewares.   
 |   |   |       URI: /nestjs/tutorial-nestjs/middlewares/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre: 2.9.1 Excepciones.   
 |   |   |       URI: /nestjs/tutorial-nestjs/excepciones/
 |   |   |
 |   |   |   # Artículo
 |   |   └── 📂 Nombre: 2.10.1 Validaciones.   
 |   |           URI: /nestjs/tutorial-nestjs/validacion-de-request/
 |   | 
 |   |   # Menú item             
 │   ├── 📂 Nombre: 2.2 Bases de datos.
 |   |   |   URI: /nestjs/tutorial-nestjs/bases-de-datos/
 |   |   |
 |   |   |   # Artículo
 |   |   ├── 📂 Nombre: 2.2.1 Controladores.   
 |   |   |       URI: /nestjs/tutorial-nestjs/controladores/
 |   |
 |   |
 |   |
 |   # Menú principal desplegable
 ├── 📂 Nombre: TypeScript  

 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 2. Arquitectura Hexagonal en NestJS.   
 |   |   |       URI: /arquitectura-hexagonal-ejemplo/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 2. Arquitectura Hexagonal en NestJS.   
 |   |   |       URI: /arquitectura-hexagonal-ejemplo/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 3. NestJS y MySQL.    
 |   |   |       URI: /mysql/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 4. NestJS y PostgreSQL.    
 |   |   |       URI: /postgresql/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 5. Microservicios en NestJS.    
 |   |   |       URI: /microservicios-ejemplo/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 6. Prisma ORM en NestJS.    
 |   |   |       URI: /prisma/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 7. Pruebas unitarias con Jest y NestJS.    
 |   |   |       URI: /jest/
 |   | 
 |   |
 |   |   # Menú item             
 │   ├── 📂 Nombre: 8. TypeScript.
 |          URI: /typescript/
 |
 |
 |   # Menú principal desplegable
 ├── 📂 Nombre: SpringBoot  
 |   | 
 |   |
 |   |   # Menú item             
 │   ├── 📂 Nombre: 1. Primeros pasos en SpringBoot.
 |   |   |   URI: /springboot/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 2. Arquitectura Hexagonal en SpringBoot.   
 |   |   |       URI: /arquitectura-hexagonal-spring-boot/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 3. SpringBoot y MySQL.    
 |   |   |       URI: /mysql-spring-boot/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 4. SpringBoot y PostgreSQL.    
 |   |   |       URI: /postgresql-spring/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 5. Microservicios en SpringBoot.    
 |   |   |       URI: /microservicios-spring-boot/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 6. SpringBoot y Kafka.    
 |   |   |       URI: /spring-kafka/
 |   |   |
 |   |   |
 |   |   |   # Menú item
 |   |   ├── 📂 Nombre: 7. Pruebas unitarias en SpringBoot.    
 |   |   |       URI: /javatest/
 |   | 
 |   |
 |   |   # Menú item             
 │   ├── 📂 Nombre: 8. Java.
 |          URI: /java/
 |
 |
 |   # Menú principal desplegable
 ├── 📂 Nombre: Arquitectura
 |
 |
 |   # Menú principal desplegable
 ├── 📂 Nombre: Docker  
 

```

## Tabla

📂

<table>
    <tr>
        <td rowspan="1">📂 /</td>
        <td>
            <tr>
                <td rowspan="1">📂 /nestjs/</td>
            </tr>
            <tr>
                <td rowspan="1">Tipo:</td>
                <td rowspan="1">Menú desplegable</td>
            </tr>
        </td>
    </tr>
</table>

<table>
  <tr>
    <td rowspan="2">Padre</td>
    <td>Hijo 1</td>
  </tr>
  <tr>
    <td>Hijo 1</td>
  </tr>
</table>

## NestJS - 1️⃣ Primeros pasos en NestJS.

Realizar un tutorial con la información general del framework:
- Pre-requisitos para instalar NestJS
- Como instalar NestJS y sus herramientas de consola
- Iniciar una aplicación/proyecto NestJS
- Explicar conceptos básicos (controladores, servicios, etc.)

Incluir las siguientes palabras clave:

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|nestjs|De 10 k a 100 k|/nestjs/|
|api rest nestjs|De 10 a 100|/nestjs/|
|js nest|De 10 a 100|/nestjs/|
|nestjs api rest|De 10 a 100|/nestjs/|
|tutorial nestjs|De 10 a 100|/nestjs/|
|nestjs v9|De 10 a 100|/nestjs/|

|Total de búsquedas promedio|
|:-------------------------:|
|50250|

Esta lista de palabras clave son opcionales a incluir y solo utilizarlas para explicar conceptos específicos en caso de ser necesario.

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|typescript|De 10 k a 100 k|/nestjs/|
|node js ts|De 100 a 1 K|/nestjs/|
|node ts|De 100 a 1 K|/nestjs/|
|type script javascript|De 100 a 1 K|/nestjs/|
|axiosresponse|De 10 a 100|/nestjs/|
|comentario typescript|De 10 a 100|/nestjs/|
|express ts|De 10 a 100|/nestjs/|
|for en typescript|De 10 a 100|/nestjs/|
|if ternario typescript|De 10 a 100|/nestjs/|
|node express ts|De 10 a 100|/nestjs/|
|ternario typescript|De 10 a 100|/nestjs/|
|tipado typescript|De 10 a 100|/nestjs/|

|Total de búsquedas promedio|
|:-------------------------:|
|51900|

|Nivel de Dificultad del Artículo|
|:------------------------------:|
|Principiante|

## NestJS - 2️⃣ Arquitectura Hexagonal en NestJS.

Un ejemplo de la implementación de la arquitectura hexagonal en el framework NestJS.

El artículo debe detallar los conceptos básicos de la arquitectura hexagonal hasta su implementación con el framework NestJS.

📢 Ya que el análisis de intención de búsqueda de palabras clave en **Google ADS** muestra que para **SpringBoot** hay mayores intenciones de búsqueda, el resto de palabras clave se intentarán incluir en este artículo para dar mas visibilidad.

Incluir las siguientes palabras clave:

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|arquitectura hexagonal ejemplo|De 100 a 1 K|/arquitectura-hexagonal-ejemplo|
|ejemplo arquitectura hexagonal|De 10 a 100|/arquitectura-hexagonal-ejemplo|

|Total de búsquedas promedio|
|:-------------------------:|
|550|

|Nivel de Dificultad del Artículo|
|:------------------------------:|
|Principiante|

## NestJS - 3️⃣ NestJS y MySQL.

Tutorial de conexión entre NestJS y MySQL con **TypeORM** y explicando los conceptos de **Entidades**.

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|nestjs mysql|De 10 a 100|/mysql/|
|typeorm express|De 10 a 100|/mysql/|
|typeorm nodejs express|De 10 a 100|/mysql/|

|Total de búsquedas promedio|
|:-------------------------:|
|150|

Las siguientes palabras clave son específicamente sobre **MySQL**, tenerlas en cuenta para la escritura del artículo ya que pueden apalancar o beneficiar el tema principal.

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|mysql|De 10 k a 100 k|/mysql/|
|mysqlworkbench|De 10 k a 100 k|/mysql/
|mysql server|De 1 K a 10 k|/mysql/|
|crear base de datos mysql|De 1 K a 10 k|/mysql/|
|base de datos mysql|De 1 K a 10 k|/mysql/|
|mysql connector|De 1 K a 10 k|/mysql/|
|mysql update|De 1 K a 10 k|/mysql/|
|insert mysql|De 1 K a 10 k|/mysql/|
|insert en mysql|De 1 K a 10 k|/mysql/|
|update en mysql|De 1 K a 10 k|/mysql/|
|database mysql|De 100 a 1 K|/mysql/|
|mysql db|De 100 a 1 K|/mysql/|

|Total de búsquedas promedio|
|:-------------------------:|
|145000|

|Nivel de Dificultad del Artículo|
|:------------------------------:|
|Principiante|

## NestJS - 4️⃣ NestJS y PostgreSQL.

Tutorial de conexión entre NestJS y PostgreSQL con **TypeORM** y explicando los conceptos de **Entidades**.

📢 De acuerdo al análisis de palabras clave entre NestJS, PostgreSQL y Docker, puedo enfocar o incluir en la construcción del artículo como implementar la base de datos con Docker sin interferir en los artículos de la sección **Docker** (no hay canibalización).

Incluir las siguientes palabras clave:

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|nestjs postgresql|De 10 a 100|/postgresql/|

|Total de búsquedas promedio|
|:-------------------------:|
|50|

Las siguientes palabras clave son específicamente sobre **PostgreSQL**, tenerlas en cuenta para la escritura del artículo ya que pueden apalancar o beneficiar el tema principal.

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|postgresql|De 10 k a 100 k|/postgresql/|
|pg admin|De 1 K a 10 k|/postgresql/|
|dockerfile postgresql|De 1 K a 10 k|/postgresql/|
|pg admin 4|De 1 K a 10 k|/postgresql/|
|postgresql server|De 100 a 1 K|/postgresql/|
|postgresql db|De 100 a 1 K|/postgresql/|
|insert postgresql|De 100 a 1 K|/postgresql/|
|database postgresql|De 100 a 1 K|/postgresql/|
|pg admin3|De 100 a 1 K|/postgresql/|
|php pg admin|De 100 a 1 K|/postgresql/|

|Total de búsquedas promedio|
|:-------------------------:|
|68000|

|Nivel de Dificultad del Artículo|
|:------------------------------:|
|Principiante|

## NestJS - 5️⃣ Microservicios en NestJS

Tutorial y guía completa sobre la construcción de microservicios en NestJS, para los conceptos del **patrón SAGA** en coreografía, utilizar **rabbitmq** para el paso de mensajes/eventos.

Incluir las siguientes palabras clave:

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|microservicios ejemplo|De 100 a 1 K|/microservicios-ejemplo/|
|rabbitmq|De 1 K a 10 k|/microservicios-ejemplo/|
|broker rabbitmq|De 100 a 1 K|/microservicios-ejemplo/|
|microservices nest|De 10 a 100|/microservicios-ejemplo/|
|microservicios nodejs|De 10 a 100|/microservicios-ejemplo/|
|arquitectura de microservicios ejemplo|De 10 a 100|/microservicios-ejemplo/|
|arquitectura microservicios ejemplo|De 10 a 100|/microservicios-ejemplo/|
|arquitectura microservicios nodejs|De 10 a 100|/microservicios-ejemplo/|
|ejemplo arquitectura microservicios|De 10 a 100|/microservicios-ejemplo/|
|ejemplo de arquitectura de microservicios|De 10 a 100|/microservicios-ejemplo/|
|ejemplo microservicios|De 10 a 100|/microservicios-ejemplo/|
|ejemplo microservicios nodejs|De 10 a 100|/microservicios-ejemplo/|
|microservicios con node js|De 10 a 100|/microservicios-ejemplo/|
|microservicios en node js|De 10 a 100|/microservicios-ejemplo/|
|microservicios node|De 10 a 100|/microservicios-ejemplo/|
|microservicios node js express|De 10 a 100|/microservicios-ejemplo/|
|nodejs microservicios|De 10 a 100|/microservicios-ejemplo/|

|Total de búsquedas promedio|
|:-------------------------:|
|6650|

## NestJS - 6️⃣ Prisma ORM en NestJS.

Tutorial con la explicación del funcionamiento del ORM **Prisma**, para el ejemplo, utilizar cualquier motor de base de datos.

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|prisma orm|De 1 K a 10 k|/prisma/|
|nest js prisma|De 100 a 1k|/prisma/|
|orm prisma|De 10 a 100|/prisma/|

|Total de búsquedas promedio|
|:-------------------------:|
|5550|

## NestJS - 7️⃣ Pruebas unitarias con Jest y NestJS.

Tutorial de pruebas unitarias y pruebas e2e en NestJS con **jest**.

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|jest nestjs|De 10 a 100|/jest/|
|nestjs jest|De 10 a 100|/jest/|
|jest ts|De 10 a 100|/jest/|

|Total de búsquedas promedio|
|:-------------------------:|
|150|

El siguiente listado de palabras son específicamente de **jest**, utilizarlas para apalancar o mejorar el artículo original en **NestJS** con pruebas unitarias.

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|jest|De 1 K a 10 k|/jest/|
|jest test|De 100 a 1 K|/jest/|
|npm jest|De 100 a 1 K|/jest/|
|ts jest|De 10 a 100|/jest/|
|jest mysql|De 10 a 100|/jest/|
|jest ts|De 10 a 100|/jest/|
|nodejs jest|De 10 a 100|/jest/|
|test con jest|De 10 a 100|/jest/|
|jest express|De 10 a 100|/jest/|

|Total de búsquedas promedio|
|:-------------------------:|
|6300|

## NestJS - 8️⃣ TypeScript.

Tutoriales de todo lo relacionado a **TypeScript**. Se muestra adentro del menú de navegación de **NestJS** porque porque el framework esta basado en este lenguaje.

---

## SpringBoot - 1️⃣ Primeros pasos en SpringBoot.

Tutorial de introducción a **SpringBoot**, debe ser detallado y sencillo al mismo tiempo, no importa que sea mas extenso de lo habitual siempre y cuando este bien estructurado.

Utilizar las siguientes palabras clave:

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|spring boot|De 10 k a 100 k|/springboot/|
|spring framework spring boot|De 10 k a 100 k|/springboot/|
|springboots|De 10 k a 100 k|/springboot/|
|java spring|De 1 K a 10 k|/springboot/|
|springboot|De 1 K a 10 k|/springboot/|
|framework spring|De 1 K a 10 k|/springboot/|
|initializr spring|De 100 a 1 K|/springboot/|
|springboot 3|De 100 a 1 K|/springboot/|
|framework spring boot|De 10 a 100|/springboot/|
|spring boot descargar|De 10 a 100|/springboot/|
|backend spring|De 10 a 100|/springboot/|
|ejemplo spring boot|De 10 a 100|/springboot/|
|for spring boot|De 10 a 100|/springboot/|
|framework java spring|De 10 a 100|/springboot/|
|framework java spring boot|De 10 a 100|/springboot/|
|framework springboot|De 10 a 100|/springboot/|
|hola mundo en spring boot|De 10 a 100|/springboot/|
|hola mundo spring boot|De 10 a 100|/springboot/|
|java con spring|De 10 a 100|/springboot/|

|Total de búsquedas promedio|
|:-------------------------:|
|X|

|Nivel de Dificultad del Artículo|
|:------------------------------:|
|Principiante|















## Arquitectura - 1️⃣ Arquitectura Hexagonal

Descripción de toda la teoría relacionada a la arquitectura hexagonal.

|keyword|searchs|url post|
|:----:|:-----:|:------:|
|arquitectura hexagonal|De 1 K a 10 k|/arquitectura-hexagonal/|
|arq hexagonal|De 10 a 100|/arquitectura-hexagonal/|
|arquitectura de software hexagonal|De 10 a 100|/arquitectura-hexagonal/|
|arquitectura hexagonal programacion|De 10 a 100|/arquitectura-hexagonal/|
|arquitectura hexagonal software|De 10 a 100|/arquitectura-hexagonal/|
|arquitectura hexagonal y ddd|De 10 a 100|/arquitectura-hexagonal/|
|ddd arquitectura hexagonal|De 10 a 100|/arquitectura-hexagonal/|
|estructura hexagonal arquitectura|De 10 a 100|/arquitectura-hexagonal/|
|hexagonal arquitectura|De 10 a 100|/arquitectura-hexagonal/|

|Total de búsquedas promedio|
|:-------------------------:|
|5400|






