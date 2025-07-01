# 🍕 E-commerce Gastronómico - React App

Un e-commerce moderno desarrollado en React para productos gastronómicos, con integración a Firebase y un sistema de carrito de compras completo.

## 🚀 Características

- **Catálogo de productos** gastronómicos con filtros y búsqueda
- **Carrito de compras** interactivo con gestión de cantidades
- **Detalle de productos** con selector de cantidad y control de stock
- **Navegación** fluida con React Router
- **Base de datos** en tiempo real con Firebase Firestore
- **Diseño responsive** con gradientes modernos y animaciones
- **Gestión de estado** con Context API

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal
- **React Router DOM** - Navegación entre páginas
- **Firebase/Firestore** - Base de datos NoSQL
- **CSS3** - Estilos con gradientes y animaciones
- **Context API** - Manejo de estado global
- **Vite** - Herramienta de construcción

## 📁 Estructura del Proyecto

```
src/
├── Componentes/
│   ├── CartWidget.jsx          # Widget del carrito de compras
│   ├── Error.jsx               # Página de error 404
│   ├── Home.jsx                # Página de inicio
│   ├── Layout.jsx              # Layout principal con navegación
│   ├── Loader.jsx              # Componente de carga
│   ├── Nosotros.jsx            # Página "Sobre nosotros"
│   ├── Producto.jsx            # Card individual de producto
│   ├── Productos.jsx           # Lista de productos
│   ├── ProductosDetalle.jsx    # Detalle del producto
│   └── RenderCondicional.jsx   # Componente de renderizado condicional
├── CartContext.jsx             # Context para manejo del carrito
├── firebase.js                 # Configuración de Firebase
├── App.jsx                     # Componente principal
├── App.css                     # Estilos globales
├── Style.css                   # Estilos específicos de componentes
└── main.jsx                    # Punto de entrada
```

## 🎯 Funcionalidades Principales

### 🛒 Sistema de Carrito

- Agregar productos al carrito
- Modificar cantidades desde el detalle del producto
- Eliminar productos individuales
- Vaciar carrito completo
- Contador dinámico de productos
- Cálculo automático del total

### 📦 Gestión de Productos

- Visualización de catálogo completo
- Detalle individual con información completa
- Control de stock en tiempo real
- Estados de "sin stock" claramente identificados

### 🎨 Interfaz de Usuario

- Diseño moderno con gradientes
- Animaciones suaves y transiciones
- Cards con efectos hover
- Loader personalizado durante la carga
- Diseño completamente responsive

## 🔧 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone [url-del-repositorio]
cd ecommerce-gastronomico
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar Firebase**

   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Firestore Database
   - Copiar la configuración en `firebase.js`

4. **Agregar productos a Firestore**

   - Crear una colección llamada "productos"
   - Usar la estructura del archivo `productos.js` como referencia

5. **Ejecutar en desarrollo**

```bash
npm run dev
```

## 📊 Estructura de Datos (Firestore)

### Colección: `productos`

```javascript
{
  id: "string",
  nombre: "string",
  descripcion: "string",
  precio: number,
  stock: number,
  categoria: "string", // opcional
  imagen: "string" // opcional
}
```

## 🎨 Personalización de Estilos

Los estilos están organizados en dos archivos principales:

- **`App.css`** - Estilos globales y layout general
- **`Style.css`** - Estilos específicos de componentes

### Paleta de Colores Principal

- Gradiente primario: `#667eea` → `#764ba2`
- Fondo: Gradiente de púrpura a azul
- Texto: `#333` para títulos, `#555` para contenido

## 🚀 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run preview      # Vista previa de la build
npm run lint         # Linting del código
```

## 📱 Características Responsive

- **Desktop**: Grid de 3-4 columnas para productos
- **Tablet**: Grid de 2 columnas adaptativo
- **Mobile**: Vista de una columna con navegación optimizada

## 🔮 Futuras Mejoras

- [ ] Sistema de autenticación de usuarios
- [ ] Proceso de checkout y pagos
- [ ] Filtros avanzados por categoría y precio
- [ ] Sistema de favoritos
- [ ] Historial de pedidos
- [ ] Panel de administración
- [ ] Optimización de imágenes
- [ ] PWA (Progressive Web App)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ para el curso de React de CoderHouse

---

## 🐛 Problemas Conocidos

Si encuentras algún problema, por favor:

1. Verifica que todas las dependencias estén instaladas
2. Confirma que la configuración de Firebase sea correcta
3. Revisa la consola del navegador para errores específicos

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto, puedes:

- Abrir un issue en el repositorio
- Contactar al equipo de desarrollo

---

_¡Gracias por usar nuestra aplicación de e-commerce gastronómico!_ 🍽️# ProyectoFinal+Zarandon
ProyectoFinal React Coder
