import { useState } from 'react';

// // === useState ===
// // explicit typing
// const [price, setPrice] = useState<number>(0);
// const [nickname, setNickname] = useState<string>("");

// // arrays
// const [items, setItems] = useState<string[]>([]);
// const [ids, setIds] = useState<number[]>([]);

// // objects
// type User = { id: number; name: string };
// const [user, setUser] = useState<User | null>(null); 

// // union types
// const [selectedId, setSelectedId] = useState<number | undefined>();
// const [error, setError] = useState<string | null>(null);

// // lazy initialization
// const [token, setToken] = useState<string>(() => {
//     return localStorage.getItem("token") || "";
// });

// // type assertion (avoid if possible)
// const [names, setNames] = useState([] as string[]); 

// // no initial value, must provide type
// const [socket, setSocket] = useState<WebSocket>();

// // literal types / enums
// type Status = 'idle' | 'loading' | 'success' | 'error';
// const [status, setStatus] = useState<Status>('idle'); 

// // boolean
// const [isOpen, setIsOpen] = useState<boolean>(false);

// ========================================= // =========================================

// TYPE ASSERTION
// without type assertion   | <Type>  | enables full type checking and validation
// with type assertion      | as Type | forces the type, skips initial value validation

// TYPE
// complex compositions of multiple types, cannot be typed twice
// type Status = 'success' | 'error';
// type Point = [number, number];
// type User = { id: number } & { name: string };

// INTERFACE
// describing object shapes, models that may be extended or merged
// interface User {
//     id: number;
//     name: string;
//   }
  
//   interface Admin extends User {
//     role: string;
//   }

// RENDER IN REACT
// component mounting (first time on screen)
// state update (useState, useReducer)
// prop change
// context change (useContext)

// CODE OUTSIDE USEEFFECT
// if you place fetch() outside useEffect, it will re-run on every render
// even if the state change is unrelated
// good for logs or simple synchronous execution (like checking window.innerWidth)

// useEffect(() => ..., [])
// you only need to fetch data once when the component mounts
// ideal for initial API calls

// useEffect(() => ..., [product])
// you only want to run this effect when the product is available
// avoids running before the API response is ready

// useMemo(() => ..., [ratingFilter, reviews])
// reviews might be a large list
// recalculating on every render would be expensive
// useMemo improves performance by memoizing the filtered result

// HOOK BEHAVIOR OVERVIEW
// this section explains when each hook or pattern executes during the component lifecycle,
// including best practices and performance considerations

// LIFTING STATE UP
// Lifting state up is the React pattern of moving a state variable from a child component to their closest shared parent,
// e so multiple components can access and update the same data via props.

// KEY PROP  
// Helps React identify list items and update only what changes.  
// Use a unique, stable key (like an ID), not the index, to avoid rendering bugs.

// VOID TYPE  
// Indicates that a function does not return any value.  
// Example: () => void means the function performs an action but returns nothing.


// =========================================== // ===========================================


// LAZY LOADING  
// An e-commerce page loads the checkout module only when the user clicks “Proceed to checkout,” instead of loading it when the site first opens.

// CODE SPLITTING  
// An admin dashboard splits its sections (Users, Reports, Settings) so that each one loads only when opened, reducing the initial bundle size.

// MEMOIZATION  
// A product list with hundreds of items avoids re-rendering all items when only one product’s state changes, improving UI responsiveness.

// VIRTUALIZED LISTS  
// A social media feed like Twitter renders only the posts visible on screen and recycles components as the user scrolls, instead of rendering thousands of elements.

// OPTIMIZED IMAGES  
// A portfolio website serves images in WebP format and adjusts resolution depending on device size, preventing unnecessary downloads.

// COMPRESSION AND CACHING  
// JavaScript and CSS files are compressed (gzip or br) and cached by the browser, making subsequent visits load much faster.

// MINIFICATION  
// A corporate site reduces file size by removing spaces, line breaks, and long variable names before serving assets to users.

// REDUCING REFLOWS  
// A dynamic form updates its layout as the user types; if layout changes trigger multiple recalculations, it causes lag and layout shifts, so minimizing reflows keeps animations smooth.


