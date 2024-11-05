# Main Concepts Applied

In this practical, I delved into various fundamental concepts of web development, focusing particularly on the creation of reusable components through the use of Web Components. Key concepts include:

1. Custom Elements: I designed a custom HTML element, (my-card), which serves as a self-contained card component for displaying MLBB heroes. This approach promotes reusability and improves the maintainability of the code.

2. Shadow DOM: I leveraged the Shadow DOM to encapsulate the card's styles and structure. This isolation prevents global styles from interfering with the component, ensuring a clean separation between the card and the rest of the document.

3. Dynamic Content Generation: I implemented JavaScript to dynamically select and display a random hero from a predefined set of data. This aspect of the project introduced me to the concept of data manipulation and dynamic rendering within web components.


# New Skills and Knowledge Acquired

1. Understanding Web Components: I learned how to define and register custom elements, manage their lifecycles, and utilize the Shadow DOM effectively for encapsulation.

2. CSS Variables: By incorporating CSS custom properties, I achieved greater flexibility in styling the card components, allowing for easy customization without altering the base styles.

3. Manipulating JavaScript Objects: I enhanced my ability to work with JavaScript objects and arrays, particularly in terms of selecting random entries and rendering them dynamically in the DOM.


# Reflection
## What I Learned

This practical was instrumental in reinforcing my understanding of modular web development. I discovered the significance of encapsulation in web components, which not only enhances reusability but also mitigates potential style conflicts across the application. Additionally, I gained practical experience in working with dynamic content, deepening my proficiency in JavaScript and its interactions with the DOM.

# Challenges Encountered

1. Understanding Shadow DOM: Initially, I found the concept of the Shadow DOM quite challenging. I struggled to understand how encapsulation worked and how styles applied within the shadow root do not affect the main document's styles. To overcome this, I spent extra time studying the official documentation and watching online tutorials. These resources provided practical examples that clarified how to effectively implement the Shadow DOM, ultimately helping me integrate it smoothly into my practical.

2. Implementing Random Image Selection: Another challenge was ensuring the proper functionality of the random hero image selection. I encountered difficulties with displaying the correct images based on the selection logic. After several attempts, I realized the need to dynamically set the src attribute according to the selected hero's key. Debugging my code using the console helped me identify and resolve this issue effectively.


