# rs-book

# Rust Bundler for React with Storybook and Biome JS

This project demonstrates how to set up a React application using a Rust-based bundler, integrated with Storybook for UI development and Biome JS for code formatting and linting.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)

1. Clone the repository:

    ```bash
    git clone https://github.com/claudiolau/rs-book.git
    cd rs-book
    ```

2. Install the Node.js dependencies:

    ```bash
    npm install
    ```

## Project Structure

```plaintext
rs-book/
│
├── src/
│   ├── assets/
│   │   ├── stories/
│   │   │   ├── ExampleComponent.tsx
│   │   │   └── ExampleComponent.stories.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
│       
├── .biome.json
├── package.json
├── README.md
└── tsconfig.json
