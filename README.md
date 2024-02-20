<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

LOGIN

Email: admin@gmail.com
Password: admin123


Tech Stack:
Laravel
Inertia.js
React.js
Tailwind CSS
SQLite
License
This project is licensed under the MIT License - see the LICENSE file for details.





### Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

Ensure you have the following software installed on your local machine:

- [PHP](https://www.php.net/) (>= 8.1)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) (>= 14.x)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

#### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project_directory>
   ```

3. Install PHP dependencies:

   ```bash
   composer install
   ```

4. Install JavaScript dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

5. Copy the `.env.example` file and rename it to `.env`:

   ```bash
   cp .env.example .env
   ```

6. Generate an application key:

   ```bash
   php artisan key:generate
   ```

7. Run the database migrations and seed the database:

   ```bash
   php artisan migrate --seed
   ```

8. Compile assets:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

9. Start the development server:

   ```bash
   php artisan serve
   ```
