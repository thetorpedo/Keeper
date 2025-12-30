
# Project Blueprint

## Overview

This is a React application that displays statistics fetched from Firestore and allows for real-time updates.

## Implemented Features

*   **Stat Component:** A generic component `src/components/Stat.jsx` that displays a stat with a name and a value.
*   **Firebase Integration:** The project is configured to connect to a Firebase project to fetch data from Firestore.
*   **Real-time Updates:** The stat values can be incremented and decremented, and the changes are reflected in the Firestore database in real-time.

## Current Plan

*   Fetch stats data from a "stats" collection in Firestore.
*   Display the stats using the generic `Stat` component.
*   Provide a way for the user to configure their Firebase project credentials.
*   Allow users to increment and decrement stat values, with changes persisting to Firestore.
