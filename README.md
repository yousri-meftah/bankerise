# Bankerise BackOffice

Welcome to the Bankerise BackOffice repository! This project is part of my internship at Proxym, where I am developing a centralized dashboard for controlling and managing all applications related to Bankerise, Proxym's banking product.

## Description

The Bankerise BackOffice is a comprehensive platform that provides a central dashboard for managing and controlling various aspects of the Bankerise platform. It includes features such as Dashboard Access, Applications Management, Configuration Management, Message Center, User Management, Jobs Management, Cache Maintenance, Lookups Configuration, Audit, Forms Management, Content Management, and BPMN Configuration.

# Starting the API Gateway

To launch the API gateway, please follow these steps:

## Start the Gateway:

Run the command:

```bash
docker-compose up --build -d
```

## Verify the Services:

```bash
docker-compose ps
```

## View Logs (if necessary):

```bash
docker-compose up
```

## Features

- **Dashboard Access:** Users can view a central dashboard that presents key metrics and notifications relevant to their operations.
- **Applications Management:** Users can create, manage, and delete applications within the platform, including modifying application details such as name, description, and settings.
- **Configuration Management:** Allows users to adjust system configurations and settings that influence the platform's operation and functionality.
- **Message Center:** Users can send and receive messages, including system notifications and alerts, to facilitate communication within the platform.
- **User Management:** Administrators can manage user accounts, including creating, editing, and deleting users, as well as assigning roles and managing access rights.
- **Jobs Management:** Users can manage and monitor scheduled and background jobs, including viewing their status and execution logs.
- **Cache Maintenance:** Provides tools for users to manage and clear the system's cache to maintain optimal performance.
- **Lookups Configuration:** Users can define and manage lookup values that are used across the platform for selections and dropdowns.
- **Audit:** The system records and displays logs of all system activities and user actions for security, compliance, and monitoring purposes.
- **Forms Management:** Users can create and customize forms for data entry and submissions, tailoring them to specific needs within the platform.
- **Content Management:** Allows users to manage and update content displayed on the platform, including informational pages, help documents, and user guides.
- **BPMN Configuration:** Users can configure and manage Business Process Model and Notation (BPMN) workflows to automate and streamline business processes.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **Vite:** Frontend build tool for faster development and optimized production builds.
- **Redux Toolkit (RTK):** State management library for managing application state.
- **Tailwind CSS:** Utility-first CSS framework for designing custom user interfaces.
- **Java:** Programming language for backend development.
- **Spring Boot:** Framework for building Java-based enterprise applications.
- **Lerna:** Tool for managing JavaScript projects with multiple packages.
- **NX:** Toolkit for building full-stack applications with Angular and React.



