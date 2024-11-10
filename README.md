# Leap Year Finder

## Description

The **Leap Year Finder** is a simple web application that allows users to check whether a specific year is a leap year or not. A leap year occurs if a year is divisible by 4, but if it is divisible by 100, it must also be divisible by 400 to be a leap year.

This application provides an interactive user interface where users can input a year, and the application will determine if it is a leap year and display the result.

## Features

- User-friendly interface with an input field and a submit button.
- Displays the result of the leap year check directly below the input.
- Supports modern browsers and devices using responsive design.
  
## How It Works

1. The user enters a year in the input field.
2. When the **Submit** button is clicked, the JavaScript function `clickHandler()` is triggered.
3. The function checks whether the entered year meets the conditions of a leap year:
   - If a year is divisible by 4 and not divisible by 100, or
   - If a year is divisible by 400.
4. The result is displayed in a paragraph element (`<p>`) below the input, indicating whether the year is a leap year or not.

## How to Use

1. Open the HTML file in a web browser.
2. Enter a year in the input box.
3. Click the **Submit** button.
4. The application will show whether the entered year is a leap year or not.
