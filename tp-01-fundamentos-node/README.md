# Trabajo práctico 01:
Este es el trabajo práctico Nro. 1 del módulo 3 (Cohorte 6) del curso de Full Stack del Nodo Tecnológico

## Descripción:
El mismo consiste en realizar un código en JavaScript integrando comandos de Node.js para crear un archivo que contenga un texto con datos de un videojuego, partiendo de un array o vector.

## Cómo ejecutar:
La forma de ejecución es desde la terminal integrada a VS Code con los siguientes comandos:
node index.js (para el programa generador del archivo con los datos)
node orden-event-loop.js (para que describe el proceso de ejecución MonoHilo en sentencias del tipo CallBack)

## Archivo generado:
Se genera el archivo en la ruta definida ---> salida\ficha-videojuego.txt

## Conceptos:
1. ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?
   - JavaScript necesita de un navegador para ejecutarse y se orienta a interfaces visuales dentro de páginas Web,
   - En cambio Node.js se puede ejecutar dentro de la terminal de la pc y no es visible al usuario, puede ejecutar scripts de automatizaciones y servidores.
   - V8 es el motor de ejecución de las instrucciones de JavaScript embebido dentro de Node.js
   
2. ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?
   - Eso es debido a la forma de ejecución del código en condiones de MonoHilo, cuando se terminan de ejecutar todos las sentencias del código recién el sistema llama a las instrucciones CallBack que quedaron pendientes.
    
3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?
   - Una instrucción Bloqueante hace que la ejecución del código quede detenida en esa instrucción hasta que la misma se termine de realizar, luego continua ejecutando el código siguiente.
   - Una instrucción No Bloqueante permite que el código se siga ejecutando mientras la instrucción se resuelve, ésto se utiliza para no generar demoras en las respuestas de los programas.

4. ¿Qué responsabilidades cumplen node:path y node:fs en index.js ?
   - Node:path lee la ruta en la que el programa está guardado y ejecutándose.
   - Node:fs da las herramientas necesarias del File System para poder gestionar, crear carpetas (directorios), crear archivos nuevos, etc.
