## Funcionamiento en Node
-Primero se debe ejecutar el proyecto node con el comando 
~~~
npm run dev
~~~
- si el codigo compila bien al ejecutar el comando y conectar los demas en node y los comandos de los nodos debera aparcer en la consola de vs code la siguiente imagen
- Cada que se actualiza la web se cambian los id de conexion por lo tanto deben volverse a agregar los nodos para hacer la conexion lo que permite que los nuevos id se reflejen en la consola de vs code.

![img-1](https://user-images.githubusercontent.com/33810066/225120937-0b6b5205-7606-455c-85e5-b0bde322ae94.png)

## Funcionamiento en Vue
### Se abre proyecto en vue nodo_1_vue y se ejecuta el proyecto con el siguiente comando 
-Si el codigo es correcto mostrara en consola el id y en el template de vue el id propio generado
~~~
npm run dev -- --host
~~~

![img-2](https://user-images.githubusercontent.com/33810066/225771622-65a3f8f9-9bb1-4b0d-acc7-5631fc4d4916.png)

### Se abre proyecto en vue nodo_2_vue y se ejecuta el proyecto con el siguiente comando 
~~~
npm run dev -- --host
~~~
-En el segundo nodo conectado aparecera igual que el primero pero ejecutando en otro puerto

![img-3](https://user-images.githubusercontent.com/33810066/225771778-579c3549-a4c2-41dd-87d9-ccea50f1fa25.png)

-Para conectarlos entre si debe proporcionar el id que se genera en la vista del template resaltado en rojo

![img-4](https://user-images.githubusercontent.com/33810066/225771903-f3ac52af-f440-4542-a1a3-2e84fdbe2280.png)

-Si la conexion entre ambos nodos es exitosa mostrara en consola del navegador el siguiente mensaje y en el input podras escribir mensajes entre los dos nodos

![img-5](https://user-images.githubusercontent.com/33810066/225772044-5c53a3fe-5332-4e8b-9022-b94c5b631f63.png)

-Mensajes entre nodos se veria de esta manera dialogo entre nodo 1 y nodo 2 no tiene ningun tipo de diseño html y css  esta en su version mas basica.

![img-6](https://user-images.githubusercontent.com/33810066/225772237-abc6497f-2872-4c68-8137-ab430c4bd23d.png)


