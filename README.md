# Photo Gallery

The goal of this project was to create a photo gallery web application using the [Unsplash API](https://unsplash.com/developers) and mimicking the look of the Unsplash website.

Utilizes HTML, CSS (CSS Components), JavaScript, React, React Router, Redux Toolkit, Axios, Motion

### Features

-   On the home page the user can browse Unsplash's featured images and can navigate through the pages using pagination.

-   In the header, the user can search for images which will redirect them to the **/photos** route and they can view the results using pagination.

-   When selecting a specific image, the user will be navigated to the **/details** route which will render a component containing more details about the image. The user can also click on the image again to zoom in. The user can also click on any of the tags below the image which will redirect them to the **/photos** route and load in relevant images.

-   From either the home page or the detailed view, users can click on the uploader's username which will redirect them to the **/users** route. Here they can view the uploader's profile, connect to them via their social networks and view all their uploaded and liked photos. Here endless scrolling is used for loading more images. In the tablet and desktop view, a 3rd party library called **React Masonry CSS** arranges the results in masonry layout.

-   All pages have skeleton loading and before the images are completely loaded, a blurhash of the image is displayed using the **Blurhash** library.

### Screenshots

**The Homepage in Desktop/Tablet/Mobile view**

<div align="center">
  <img src="https://github.com/user-attachments/assets/15b02561-16eb-4c83-9062-654f875d3bc6" alt="Home - desktop" />
  <br />
  <img src="https://github.com/user-attachments/assets/e59631bd-46b5-40ce-a934-a6c71ba0b55c" alt="Home - tablet" />
  <br />
  <img src="https://github.com/user-attachments/assets/9310426a-ef4d-443e-a02a-e44340be9a67" alt="Home - mobile" />
</div>

<br />
<br />

**The User Profile in Desktop/Tablet/Mobile view**

<div align="center">
  <img src="https://github.com/user-attachments/assets/08ca985f-762b-40b7-81a7-3032ae7fd1db" alt="User profile - desktop" />
  <br />
  <img src="https://github.com/user-attachments/assets/7ce2f6e7-1faa-463a-8d35-908d790b3d89" alt="User profile - tablet" />
  <br />
  <img src="https://github.com/user-attachments/assets/fd2b1969-3727-4221-9b49-b7a43df7e500" alt="User profile - mobile" />
</div>

<br />
<br />

**The Photo Details in Desktop/Tablet/Mobile view**

<div align="center">
  <img src="https://github.com/user-attachments/assets/463cd26b-b82f-48bc-b90e-9499330ff331" alt="Detailed view - desktop" />
  <br />
  <img src="https://github.com/user-attachments/assets/e30bb90f-1776-4aa7-806c-b3afbb8a3628" alt="Detailed view - tablet" />
  <br />
  <img src="https://github.com/user-attachments/assets/fc030470-d5b0-450c-829b-e9136e0303de" alt="Detailed view - mobile" />
</div>
