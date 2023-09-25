# OOP Principal with TypeScript

## 🚀 Run in your local environment

Follow these steps to get started with this project

1. Clone the repository:

   ```bash
   git clone https://github.com/kanta1207/OOP-Principals
   ```

2. Navigate to the project directory (or simply open the project in VSCode ):

   ```bash
   cd OOP-Principals
   ```

3. Install the dependency (Just TypeScript tho):

   ```bash
   npm install
   ```

4. Compile TypeScript into JavaScript:

   ```bash
    npm run start
   ```

5. Start [Live Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server)

## Overview

In my project, the directory structure is organized to maintain a clear separation of concerns among different parts of the code. Under the `scripts` directory, I have four distinct types of directories, each with its own unique responsibility.

## 0. `App.ts`

- **Responsibility**: App initialization

This file is directly placed under the "scripts" directory. Initialize the `Shop.controller.ts` and make the whole app work.

## 1. `controller` Directory

- **Responsibility**: Application Logic

The `controller` directory contains files responsible for managing the application's logic. Controllers utilize the view logic and create a logic to make the entire application (or each section) work as intended.

Example:

- `Browse.controller.ts` : Manages the logic for "Browse" section. Utilize "view" class's logic, and also interact with "shopping cart" section by utilizing "ShoppingCartController" class's logic.

- `ShoppingCart.controller.ts` : Manages the logic for "shopping cart" section.
- `Shop.controller.ts`: Binds the each sections controller classes,initialize them, and make them work together.

## 2. `view` Directory

- **Responsibility**: View Logic

The `view` directory contains files responsible for handling the presentation and user interface logic of your application. Views are responsible for providing HTML elements to controller classes.

Example:

- `Product.view.ts`: Generates HTML elements related to products.
- `Util.view.ts`: Generates common HTML elements.

## 3. `abstract` Directory

- **Responsibility**: Base Class Definitions

This directory is dedicated to defining base classes that serve as the foundation for other parts of the code. These base classes often contain common properties or methods that are shared across multiple classes.

Example:

- `Section.Controller.ts` defines the base abstract class for each of section controller class.

## 4. `model` Directory

- **Responsibility**: Object Definitions

The `model` directory is responsible for defining the object structures or classes that represent various entities within your application.

Example:

- `Product.ts`: Defines the `Product` class, which represents individual product.

## Key achievements of the project:

- By **separating the concern(or responsibility)** in each classes, and by **the encapsulation** in each classes, this project is designed to be **easier on collaborative development**.

- By implementing **Inheritance** it will reduce future development time and ensures a higher level of accuracy.

- By implementing **TypeScript**, enhancing development experience.
