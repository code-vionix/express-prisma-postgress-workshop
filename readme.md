# Mamar Dokan

Mamar Dokan is a robust e-commerce backend built with Node.js, Express, and Prisma, providing a complete API for an online shopping platform.

## 🚀 Features

- RESTful API endpoints for products and users
- Authentication and authorization
- Database management with Prisma ORM
- Logging middleware for request tracking
- Environment-based configuration
- PostgreSQL database integration

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm or pnpm
- PostgreSQL (v12 or later)
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/code-vionix/express-prisma-postgress-workshop.git
   cd express-prisma-postgress-workshop/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update the database connection string and other environment variables as needed

4. **Set up the database**
   ```bash
   npx prisma migrate dev --name init
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
# or
pnpm dev
```

### Production Mode
```bash
npm start
# or
pnpm start
```

The server will start on `http://localhost:3000` by default.

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

## 🗄️ Database Schema

The database schema is defined in `prisma/schema.prisma`. After making changes to the schema, run:

```bash
npx prisma migrate dev --name your_migration_name
```

## 🧪 Testing

To run tests:

```bash
npm test
# or
pnpm test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using Node.js, Express, and Prisma
- Thanks to all contributors who have helped shape this project

## 📧 Contact

For any questions or suggestions, please open an issue on GitHub.
