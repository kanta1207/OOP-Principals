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

## Project Objectives

- The goals of this project are as follows:
  1. Develop a fake online shop using OOP principals.
  2. Leverage TypeScript for the better developer experience, especially while implementing OOP principals into the project.

## How I implemented each of OOP Principles

## 1. Encapsulation

- **Definition**: Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on the data into a single unit called a class. It restricts direct access to some of an object's components, ensuring that the internal state of an object is consistent and protected from external interference.

- **Benefits**:

  - **Data Hiding**: It hides the internal details and provides a controlled interface for interacting with objects.
  - **Modularity**: Encapsulation promotes modularity by grouping related data and behaviors together.
  - **Reduced Complexity**: It simplifies the complexity of accessing and modifying an object's attributes.

  ### Implementation in the Project

- **Product Class**:
  - Encapsulates the properties of a product (`id`, `title`, `price`, `description`, `image`) within a class.
- **ShoppingCart Class**:

  - Encapsulates the cart's properties (`items`) and behavior within a class.
  - Uses encapsulation to hide the inner workings of the cart.

- **ProductList Class**:

  - Encapsulates the list of products (`products`) and their management.
  - Keeps the product data contained within the class.

- **Shop Class**:

  - Encapsulates the shop's functionality, managing product lists and shopping carts.
  - Provides a high-level interface for interacting with the shop.

- **App Class**:
  - Encapsulates the initialization and management of the entire application.
  - Provides a clear entry point for the application's execution.

## 2. Inheritance

- **Definition**: Inheritance is a mechanism that allows a class (subclass or derived class) to inherit properties and behaviors (attributes and methods) from another class (superclass or base class). It promotes code reuse and establishes a hierarchy of classes.

- **Benefits**:
  - **Code Reusability**: Inherited attributes and methods can be reused in the subclass without duplicating code.
  - **Polymorphism**: It enables polymorphic behavior, where objects of different classes can be treated as objects of a common superclass.

### Implementation in the Project

- **ProductItem Class**:
  - Inherits properties and methods from the base `Product` class.
  - Demonstrates inheritance by extending the functionality of a base class.

## 3. Polymorphism

- **Definition**: Polymorphism is the ability of different classes to be treated as instances of a common superclass. It allows objects of different classes to respond to the same method or message in a way that is specific to their individual class.

- **Benefits**:
  - **Flexibility**: Polymorphism allows for flexibility in designing and extending classes.
  - **Dynamic Binding**: Method calls are determined at runtime, enabling dynamic behavior based on the actual object type.
  - **Code Abstraction**: It abstracts the specific implementation details, promoting high-level code design.

### Implementation in the Project

- **ProductItem Class**:
  - Provides a `render` method to render product information.
  - Defines a `addToCart` method for adding products to the cart.
  - Demonstrates polymorphism by allowing different product items to be rendered and added to the cart using consistent method names.

## 4. Abstraction

- **Definition**: Abstraction is the process of simplifying complex reality by modeling classes based on the essential properties and behaviors of real-world objects. It focuses on what an object does rather than how it does it.

- **Benefits**:
  - **Complexity Reduction**: Abstraction simplifies complex systems by focusing on essential details.
  - **Problem Solving**: It aids in problem-solving by representing real-world concepts and entities as classes.
  - **Information Hiding**: It hides the complex inner workings, exposing only necessary interfaces.

### Implementation in the Project

- **ProductList Class**:

  - Abstracts the process of fetching product data from an API.
  - Hides the low-level details of the API request and response handling.

- **ShoppingCart Class**:
  - Abstracts the management of cart items and total calculation.
  - Provides a simplified interface for interacting with the shopping cart.

## 5. Composition

- **Definition**: Composition is a design principle where complex structures or objects are created by combining simpler components or objects. Instead of using inheritance, objects are combined to achieve a desired functionality.

- **Benefits**:
  - **Flexibility**: Composition allows for greater flexibility in constructing objects with varying behaviors.
  - **Reusability**: It promotes reusability by using existing components to build more complex objects.
  - **Loose Coupling**: Components are loosely coupled, making it easier to change or replace them without affecting the entire system.

### Implementation in the Project

- **App Class**:
  - Composes the application by creating instances of the `Shop`, `ProductList`, and `ShoppingCart` classes.
  - Manages the interaction between these components, showcasing composition.

These OOP principles provide a foundation for designing modular, maintainable, and extensible software systems.

## TypeScript and OOP

- TypeScript offers several advantages for my project:

  - Strong typing enhances code quality and reduces errors.
  - Improved code readability and maintainability.

- OOP principles applied in my project:
  - **Encapsulation**: Each class has well-defined responsibilities and properties.
  - **Inheritance**: Classes like **ProductItem** inherit properties from **Product**.
  - **Polymorphism**: Methods such as `render` and `addToCart` are consistently used across various classes.

## Conclusion

- Key achievements of the project:

  - Successfully implemented a simulated online shop using TypeScript and adhering to OOP principles.
  - Demonstrated the effective use of classes for organizing and managing the shop's functionalities.

- We faced several challenges during the project, but through collaboration and adhering to best practices, we overcame them.

- We invite questions and discussions from the audience to further explore the project and its technical aspects.
