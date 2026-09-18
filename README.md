# MovieExplorer

A responsive movie discovery web application built with **React** and the **OMDb API**.
MovieExplorer allows users to search for movies, browse results with incremental loading, and manage a personal favorites list.

## Features

- **Movie Search** — search for movies using the OMDb API
- **Movie Cards** — display movie posters, titles, and release years
- **Favorites** — add and remove movies from a personal favorites list
- **Load More Pagination** — fetch movie results page by page instead of loading everything at once
- **Duplicate Prevention** — prevents the same movie from being added to favorites multiple times
- **Responsive Design** — optimized for different screen sizes
- **Reusable React Components** — structured into independent components for better maintainability

## How It Works

### Searching Movies

When a user enters a search term, the application sends a request to the OMDb API and retrieves the first page of matching movies.

The search state and current page are managed with React's `useState`, while `useEffect` handles API requests whenever the search term or page changes.

```js
const [movieData, setMovieData] = useState([]);
const [page, setPage] = useState(1);
```

When the search term changes, the page is automatically reset to `1`:

```js
useEffect(() => {
  setPage(1);
}, [searchValue]);
```

---

## Incremental Data Fetching

One of the main features of MovieExplorer is the **Load More pagination pattern**.

Instead of requesting all available search results at once, the application fetches data **page by page** from the API.

For example:

```text
Search "Batman"

Page 1 → Fetch first batch of movies
        ↓
User clicks "Load More"
        ↓
Page 2 → Fetch next batch
        ↓
User clicks "Load More"
        ↓
Page 3 → Fetch next batch
```

The application keeps the previously loaded movies and appends the newly fetched results:

```js
setMovieData((prev) =>
  page === 1 ? data.Search || [] : [...prev, ...(data.Search || [])]
);
```

### Why this approach?

Fetching data incrementally has several advantages:

- Reduces the amount of data requested initially
- Improves the initial loading experience
- Avoids loading unnecessary results before the user asks for them
- Reduces the amount of data rendered on the first request
- Allows users to control how much additional content they want to load

This pattern is especially useful when working with APIs that return large datasets or when building interfaces where users may not need every available result.

---

## Favorites

Favorites are managed through React state in the `App` component:

```js
const [favorites, setFavorites] = useState([]);
```

The state is shared with the movie and favorites sections through props.

Each movie uses its unique `imdbID` to determine whether it has already been added to favorites.

```js
const alreadyExists = props.favorites.some(
  (fav) => fav.imdbID === props.imdbID
);
```

The favorite button works as a toggle:

- **Add Favorites** → adds the movie
- **Remove** → removes the movie

Movies are removed using `filter()`:

```js
props.setFavorites((prev) =>
  prev.filter((movie) => movie.imdbID !== props.imdbID)
);
```

Because the favorites state is updated in React, the UI automatically re-renders and the removed movie disappears from the Favorites section.

---

## Component Structure

The application is divided into reusable components:

```text
src/
├── Components/
│   ├── FavoritesSection/
│   │   ├── FavoritesSection.jsx
│   │   └── FavoritesSection.css
│   │
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── MovieCard/
│   │   ├── MovieCard.jsx
│   │   └── MovieCard.css
│   │
│   └── MovieSection/
│       ├── MovieSection.jsx
│       └── MovieSection.css
│
├── assets/
├── App.jsx
├── App.css
└── main.jsx
```

### Component Responsibilities

**`App`**

- Stores the global application state
- Manages the search value
- Manages the favorites list
- Passes state and state setters to child components

**`Header`**

- Displays the application logo and title
- Handles movie search input

**`MovieSection`**

- Fetches movies from the OMDb API
- Manages pagination
- Displays movie results
- Handles the "Load More" functionality

**`MovieCard`**

- Displays individual movie information
- Handles adding/removing favorites
- Prevents duplicate favorites

**`FavoritesSection`**

- Displays the user's favorite movies
- Shows an empty state when no favorites have been added

---

## 🛠️ Tech Stack

- **React**
- **JavaScript (ES6+)**
- **CSS3**
- **Vite**
- **OMDb API**
- **Fetch API**
- **React Hooks**

  - `useState`
  - `useEffect`

---

## API

Movie data is provided by the **OMDb API**.

The application sends requests using the search term and current page:

```text
https://www.omdbapi.com/?apikey=API_KEY&s=SEARCH_TERM&page=PAGE
```

The `page` parameter allows the application to implement incremental fetching instead of requesting all search results in a single request.

---

## React Concepts Practiced

This project was built to practice several important React concepts:

- Component-based architecture
- Props and prop drilling
- State management with `useState`
- Side effects with `useEffect`
- API requests with `fetch`
- Conditional rendering
- Rendering lists with `.map()`
- Array methods such as `.some()`, `.filter()`, and spread syntax
- State updates using functional state setters
- Pagination / incremental data fetching
- Reusable components
- Parent-child communication

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Lanssii/react-movie-app.git
```

Navigate to the project:

```bash
cd movie-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL provided by Vite.

---

## API Configuration

To run the application, you need an OMDb API key.

Create your own API key and add it to the project configuration.

> **Note:** For a production application, API keys should be handled through environment variables rather than being hardcoded in source files.

---

## Future Improvements

Possible improvements for future versions:

- Add loading states and skeleton cards
- Add error handling and user-friendly error messages
- Disable the "Load More" button when no more results are available
- Add movie details pages
- Add genre and year filters
- Persist favorites using `localStorage`
- Add sorting options
- Improve accessibility
- Add animations and transitions
- Add automated tests

---

## 👩‍💻 Author

**Lana Shotashvili**

Frontend Developer focused on building responsive and interactive web applications with React and modern JavaScript.
