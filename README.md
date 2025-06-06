# Photo Gallery

The goal of this project was to create a photo gallery web application using the Unsplash API and mimicking the look of the Unsplash website.

Utilizes HTML, CSS, JavaScript, React, React Router, Redux Toolkit, Axios, Motion

### Features

-   On the home page the user can browse Unsplash's featured images and can navigate through the pages using pagination.

-   In the header, the user can search for images which will redirect them to the **/photos** route and they can view the results using pagination.

-   When selecting a specific image, the user will be navigated to the **/details** route which will render a component containing more details about the image. The user can also click on the image again to zoom in. The user can also click on any of the tags below the image which will redirect them to the **/photos** route and load in relevant images.

-   From either the home page or the detailed view, users can click on the uploader's username which will redirect them to the **/users** route. Here they can view the uploader's profile, connect to them via their social networks and view all their uploaded and liked photos. Here endless scrolling is used for loading more images. In the tablet and desktop view, a 3rd party library called **React Masonry CSS** arranges the results in masonry layout.

-   All pages have skeleton loading and before the images are completely loaded, a blurhash of the image is displayed using the **Blurhash** library.

### Screenshots

**The Homepage in Desktop/Tablet/Mobile view**

<div align="center">
  <img src="https://github.com/user-attachments/assets/2209e8a3-e3ed-489e-b798-b07ee60b0d37" alt="Home - desktop" />
  <br />
  <img src="https://github.com/user-attachments/assets/aea1284c-624c-44cb-ab70-263b61edf7c3" alt="Home - tablet" />
  <br />
  <img src="https://github.com/user-attachments/assets/6eb14d76-b570-462a-ad45-22400011c71b" alt="Home - mobile" />
</div>

<br />
<br />

**The User Profile in Desktop/Tablet/Mobile view**

<div align="center">
  <img src="https://github.com/user-attachments/assets/69109e93-0ac2-4e24-8c72-c943a2866c0f" alt="User profile - desktop" />
  <br />
  <img src="https://github.com/user-attachments/assets/75a9b722-4faf-4048-b285-a7aa5d6fdf6b" alt="User profile - tablet" />
  <br />
  <img src="https://github.com/user-attachments/assets/6ad238e3-1716-4e6b-a2e8-e4950bef5bd8" alt="User profile - mobile" />
</div>

<br />
<br />

**The Photo Details in Desktop/Tablet/Mobile view**

<div align="center">
  <img src="https://github.com/user-attachments/assets/c9f544de-dbb0-4d62-93e9-79d2263b3c8e" alt="Detailed view - desktop" />
  <br />
  <img src="https://github.com/user-attachments/assets/0c57cea5-8611-4573-80ea-d1c33496e7fa" alt="Detailed view - tablet" />
  <br />
  <img src="https://github.com/user-attachments/assets/31a59e5f-72bb-462d-b5b2-0fe023c2914f" alt="Detailed view - mobile" />
</div>

![Detailed view - desktop](https://github.com/user-attachments/assets/2f64c4d3-6bac-4a4f-a98a-a9219aa4c01c)
