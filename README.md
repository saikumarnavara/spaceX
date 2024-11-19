# SpaceX Project

A sleek and interactive SpaceX data explorer built with **React**, **TypeScript**, and **Tailwind CSS**, leveraging the **SpaceX Open AI API** to fetch dynamic data about SpaceX launches, rockets, ships, and more. The application is designed for performance and scalability, using **Redux Toolkit** for state management.

### 🚀 Deployed URL

Explore the live application: [SpaceX Project](https://space-x-ochre.vercel.app/)

---

## 📖 Features

- **Dynamic Rockets Screen**: View detailed information about SpaceX's rockets.
- **Mission History Screen**: Explore the history of SpaceX launches.
- **Launches Screen**: Get insights into all SpaceX launches, past and future.
- **Ships Screen**: Learn about the SpaceX ships supporting their missions.
- **About Page**: A brief overview of SpaceX and its vision.
- **Dragons Screen**: Discover SpaceX's Dragon spacecraft and their missions.

### 🛠️ Routes

| Route       | Description                               |
| ----------- | ----------------------------------------- |
| `/launches` | Displays detailed launch data.            |
| `/rockets`  | Information about SpaceX rockets.         |
| `/dragons`  | Details on SpaceX Dragon spacecraft.      |
| `/ships`    | SpaceX's maritime support ships.          |
| `/history`  | Timeline of SpaceX's historical missions. |
| `/about`    | Overview and vision of SpaceX.            |

---

## ⚙️ Tech Stack

- **React**: Component-based UI library for building interactive interfaces.
- **TypeScript**: Static type checking to ensure code reliability and scalability.
- **Tailwind CSS**: Utility-first CSS framework for responsive and clean design.
- **Redux Toolkit**: Simplified state management and API integration.
- **SpaceX OpenAI API**: Fetching real-time data about SpaceX.

---

## 🛡️ State Management

The project uses **Redux Toolkit** for managing global state. API data and application-wide states are handled efficiently, ensuring smooth performance and an organized codebase.

---

## 📂 Project Structure

```plaintext
src/
├── components/      # Reusable UI components
├── redux/        # Redux slices and state logic
├── navigation/           # Route-specific screens
├── services/        # API service configurations
├── styles/          # Global Tailwind styles
├── utils/           # Utility functions
├── App.tsx          # Root app component
└── index.tsx        # Entry point
```

---

## 🚀 Setup and Installation

### Prerequisites

- **Node.js** (>=16.x)
- **npm** or **yarn**

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/saikumarnavara/spaceX.git
   cd spaceX
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Visit the app at `http://localhost:5173/`.

---

## 🎨 Design

- Fully responsive and mobile-friendly.
- Clean and modern UI powered by Tailwind CSS.
- Intuitive navigation and data representation.

---

## 🔮 Future Improvements

- Add advanced search and filter options for launches and rockets.
- Implement user authentication for personalized features.
- Include a dark mode toggle for enhanced user experience.

---

## 🙌 Contributions

Contributions are welcome! Feel free to fork this repository and submit a pull request. Please ensure your changes align with the existing codebase and add value to the project.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

### 🌌 Built with passion for space exploration and coding.
