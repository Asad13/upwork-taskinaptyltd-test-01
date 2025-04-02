# Test 01

test 01

## Prerequisites

Before setting up the application, ensure that you have the following installed:

- **Git**: Download and install from [Git SCM](https://git-scm.com/download).
- **Node.js**: Install version 22.13.1 or later using either:
  - [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) (**Recommended**)
  - Direct download from the [Node.js website](https://nodejs.org/en)
- **Package Manager**: This project uses `pnpm`. Install it globally by running:

  ```bash
  npm i -g pnpm
  ```

## Installation

### 1. Clone the Repository

You can either download the repository as a ZIP file from GitHub or clone it using Git:

- **SSH:**
  ```bash
  git clone git@github.com:Asad13/upwork-taskinaptyltd-test-01.git
  ```
- **HTTPS:**
  ```bash
  git clone https://github.com/Asad13/upwork-taskinaptyltd-test-01.git
  ```

### 2. Navigate to the Project Directory

Ensure your terminal is in the project folder before proceeding. Use `cd` (change directory)
to go to the project folder. Examples:

- **Windows:**
  ```bash
  cd path\to\upwork-taskinaptyltd-test-01
  ```
- **macOS/Linux:**
  ```bash
  cd path/to/upwork-taskinaptyltd-test-01
  ```

### 3. Install Dependencies

Run the following command to install all required dependencies:

```bash
pnpm install
```

## Running the Application

### Development Mode

To start the application in development mode, run:

```bash
pnpm dev
```

Visit **[http://localhost:5173](http://localhost:5173)** to view the running application.

### Production Mode

To build the project for production, execute:

```bash
pnpm build
```

This generates optimized JavaScript files in the `dist` directory.

To start the application in production mode, run:

```bash
pnpm start
```

Visit **[http://localhost:5173](http://localhost:5173)** to access the application in production mode.
