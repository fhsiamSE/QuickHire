# QuickHire Laravel Backend Setup

## Prerequisites
- PHP 8.1+
- Composer
- MySQL 8.0+

## Installation Steps

### 1. Create Laravel Project
```bash
composer create-project laravel/laravel QuickHireAPI
cd QuickHireAPI
```

### 2. Configure Database
Create a MySQL database:
```sql
CREATE DATABASE quickhire;
```

Update `.env` file:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=quickhire
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 3. Generate API Token Key
```bash
php artisan key:generate
```

### 4. Copy the provided files to your Laravel project:
- Models go to: `app/Models/`
- Migrations go to: `database/migrations/`
- Controllers go to: `app/Http/Controllers/Api/`
- Routes go to: `routes/api.php`

### 5. Run Migrations
```bash
php artisan migrate
```

### 6. Start the Server
```bash
php artisan serve
```

The API will be available at: `http://localhost:8000/api`

## API Endpoints

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/{id}` - Get single job
- `POST /api/jobs` - Create job (Admin only)
- `DELETE /api/jobs/{id}` - Delete job (Admin only)

### Applications
- `POST /api/applications` - Submit application

## CORS Configuration
If frontend is on different port, update `config/cors.php`:
```php
'allowed_origins' => ['http://localhost:5173'], // Your React dev port
```
