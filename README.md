<h1>Interactive Gallery and Js Code Challenges</h1>

## Table of Contents

- [Introduction](#introduction-to-this-repository)
- [Setup](#setup-and-run)
- [Gallery Approaches](#approaches-to-building-the-interactive-gallery)
- [Challenges Approaches](#approaches-to-solving-the-given-challenges)
- [Testing](#testing-the-challenges)
- [License](#license)

## 🚨 Introduction to This Repository

This repository contains my solutions for the COA Taskforce Take Home Challenge dated 06.06.2024, with interactive photo gallery and contains my solutions to two coding challenges: Array Manipulation and String Transformation.

## 🛠 Setup and Run

1. Clone this repository to your local machine.
2. Navigate to `gallery.html` file and open it with live server to access the gallery interface
3. Navigate to the `Challenges` directory.
4. Run the JavaScript files using the command in your `node arrayMap.js` and `node stringTransform.js` to see the results in the console.

## 🛠 Approaches to building the interactive gallery

1. I created `gallery.html` file which contains the content and linked it with the styles from `styles` folder and javascript for interactivity from `javascript` folder.

2. The designs ensure that when you hover over a certain image, it shows some additional details about the image with cool animations.

3. I added the event listeners using `Javascript` to the images, so that when you click an image, it open in full image view, with the options to exit that view, or move through all the images of th gallery using next or prev arrows in the view full image view.

4. It also has the cool responsiveness using `CSS media queries` to make sure that it can be used accross all the screens.

## 🛠 Approaches to solving the given challenges

### 🚀 Array Manipulation

This challenge involves determining if a contiguous subarray within an array sums up to a target value. The solution is in the `arrayMap.js` file. To solve this, I used `The sliding window` technique as follows:

1. I initialized a variable `sum` to 0 and `start` to 0.

2. I iterated over the array from start to end, adding each element to `sum`.

3. While `sum` was greater than the target and `start` index was less than the current index, I subtracted the element at the `start` index from `sum` and incremented `start`.

4. If at any point `sum` became equal to the target, I returned `true`.

5. If I went through the entire array and didn’t find a subarray that sums to the target, I returned `false`.

### 🚀 String Transformation

This challenge involves transforming a string based on certain rules related to the length of the string. The solution is in the `stringTransform.js` file. Here, I checked the length of the string and then applied the transformations as requested like this:

1. If the length of the string was divisible by `3`, I `reversed` the entire string.

2. If the length of the string was divisible by `5`, I `replaced` each character with its `ASCII code`.

3. If the length of the string was divisible by both `3` and `5` (i.e., divisible by `15`), I performed both operations in the order specified above.

## 🚨 Testing The Challenges

All the functions are tested with sample inputs provided in the challenge doc. In case you want to test it by yourself, you can modify the test cases to verify the correctness of the solutions with different inputs.

## 🚨 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/pandao/editor.md/blob/master/LICENSE) file for details.
