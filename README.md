# Feedback Form Builder

## Overview

This project is a custom feedback form builder developed using React and Vite. It allows users to create, edit, and manage feedback forms with various field types, including Star Rating, Smile Rating, Text Area, Radio Buttons, Categories, Numerical Rating, and Single Line Input. The system supports drag-and-drop functionality for field arrangement, custom validation, and display logic based on specific conditions.

## Features

- **Form Creation and Management:**
  - Create feedback forms with a minimum of 1 and a maximum of 7 fields.
  - Field types include Star Rating, Smile Rating, Text Area, Radio Buttons, Categories, Numerical Rating, and Single Line Input.
  - Edit field labels, required status, and error messages.
  - Add multiple instances of the same field type.
  - Rearrange fields using drag-and-drop.

- **Field Customization:**
  - For Text Area, Numerical Rating, Star Rating, Smile Rating, and Single Line Input:
    - Customize label, required status, and error messages.
  - For Radio Buttons and Categories:
    - Customize label, required status, error messages, and options.

- **Form Logic:**
  - Apply display logic based on specific pages, timed display, or other conditions.
  - Ensure forms do not reappear after submission or closure.

- **Admin Panel:**
  - Dashboard to list all created feedback forms with an option to add new forms.
  - Form creation and editing interface with drag-and-drop field arrangement.
  - Form detail page displaying submissions, creation date, view count, and logic applied.

- **Website Integration:**
  - Display feedback forms in a modal on the website.
  - Trigger display based on defined logic and prevent reappearance after submission or closure.

- **Feedback Storage:**
  - Use Firebase Firestore for storing feedback submissions, form structures, and metadata.

- **UI/UX:**
  - Utilize Material UI for a polished and user-friendly interface.
  - Responsive design to ensure a good experience across devices.