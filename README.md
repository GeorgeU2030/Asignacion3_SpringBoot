# Proyecto Asignación 5 Spring Boot y React con Hibernate

Este proyecto combina Spring Boot, React y Hibernate para crear una aplicación web con una base de datos relacional PostgreSQL. A continuación, se detallan los pasos necesarios para ejecutar correctamente el proyecto.

## Requisitos previos
Asegúrese de tener instalado lo siguiente en su sistema:

- [Node.js](https://nodejs.org/es/) para gestionar las dependencias de frontend.
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) como entorno de desarrollo integrado o el IDE de su preferencia.

## Pasos para ejecutar el proyecto

1. **Clonar el Repositorio:**
   ```
   git clone https://github.com/GeorgeU2030/Asignacion3_SpringBoot.git
   ```

2. **Instalar dependencias del Frontend:**
   - Abra una terminal y navegue hasta la carpeta `frontend` del repositorio.
   ```
   cd <ruta_del_repositorio> /Asignacion3_SpringBoot/frontend
   ```
   - Ejecute el siguiente comando para instalar las dependencias de Node.js.
   ```
   npm install
   ```
   - Instale la librería `react-hook-form` ejecutando el siguiente comando.
   ```
   npm install react-hook-form
   ```

3. **Configuración de la Base de Datos PostgreSQL:**
   - Configure las credenciales de la base de datos en `application.properties` ubicado en `library/src/main/resources`.
   - Ejecutar el script de postgresSQL para la creación de la base de datos, la creación del usuario y los permisos del mismo.

4. **Ejecutar la Aplicación Spring Boot:**
   - Abra su IDE y abra el archivo `LibraryApplication.java` ubicado en `library/src/main/java/com/project/library/`.
   - Ejecute la aplicación haciendo clic con el botón derecho en `LibraryApplication.java` y seleccionando "Run".

5. **Ejecutar el Frontend:**
   - En la terminal, estando en la carpeta `frontend`, ejecute el siguiente comando para iniciar el servidor de desarrollo de React.
   ```
   npm run dev
   ```

6. **Iniciar Sesión en la Aplicación:**
   - Una vez que la aplicación Spring Boot y el servidor de desarrollo de React estén en ejecución, en el localhost de su navegador:
   - Inicie sesión con las siguientes credenciales: 
     - Usuario: `user`
     - Contraseña: `12345`

**Nota:** Asegúrese de tener configurado correctamente el archivo `application.properties` con las credenciales de la base de datos y ajustes adicionales según sea necesario para su entorno.
