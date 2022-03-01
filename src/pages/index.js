import React from "react";

// IMPORT PAGES
import HomePage from './Home';
import DetailedPage from "./Detailed";
import DetailedNullPage from "./DetailedNull";
import TagsPage from "./Tags"
import FilteredTagsPage from "./FilteredTags"


// MANAGE PAGES
export function Home() {
  return <HomePage />
}

export function Detailed() {
  return <DetailedPage />
}

export function DetailedNull() {
    return <DetailedNullPage />
  }

export function Tags() {
  return <TagsPage />
}

export function FilteredTags() {
  return <FilteredTagsPage />
}


/*
 * The React Router passes properties to the components it renders. 
 * For instance, we can obtain the current location via a property. 
 * Let’s use the current location to help us create a 404 Not Found component. 
 * First, we’ll create the component:
 */
export function Whoops() {
    return (
      <div>
        <h1>404</h1>
        <p>Oops! Resource not found.</p>
      </div>
    );
  }