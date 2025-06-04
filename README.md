# Photo Gallery

The goal of this project was to create a photo gallery web application using the Unsplash API and mimicking the look of the Unsplash website.

Utilizes HTML, CSS, JavaScript, React, React Router, Redux Toolkit, Axios, Motion

### Features

-   On the home page the user can browse Unsplash's featured images and can navigate through the pages using pagination.

-   In the header, the user can search for images which will redirect them to the **/photos** route and they can view the results using pagination.

-   When selecting a specific image, the user will be navigated to a route which will render a component containing more details about the image. The user can also click on the image again to zoom in. The user can also click on any of the tags below the image which will redirect them to the **/photos** route and load in relevant images.

-   From either the home page or the detailed view, users can click on the uploader's username which will redirect them to the **/users** route. Here they can view the uploader's profile, connect to them via their social networks and view all their uploaded and liked photos. Here endless scrolling is used for loading more images. In the tablet and desktop view, a 3rd party library called **React Masonry CSS** arranges the results in masonry layout.

-   All pages have skeleton loading and before the images are completely loaded, a blurhash of the image is displayed using the **Blurhash** library.

### Screenshots

**The Homepage in Desktop/Tablet/Mobile view**

**The User Profile in Desktop/Tablet/Mobile view**

**The Photo Details in Desktop/Tablet/Mobile view**
