# 🪴 AgriOne — Empowering Farmers, Fueling the Future 🚜

AgriOne is a scalable, full-stack agri-tech solution built using the **MERN stack with TypeScript**. It enables farmers to sell their yields directly, schedule logistics, join cooperatives, and access essential farming resources. Consumers can purchase produce, rate services, and track deliveries. Logistics partners get real-time route management. Admins monitor performance across the ecosystem.

---

## 🚀 Tech Stack

- **Node.js** with **Express.js** (Server)
- **TypeScript** (Strongly typed backend)
- **MongoDB** with **Mongoose** (NoSQL Database)
- **JWT Authentication** with Role-based Access Control
- **Cloudinary / Firebase / S3** for file storage (optional)
- **Google Maps API** for logistics (optional)

---

## 📁 Project Structure

src/
├── config/ # DB and env config
├── controllers/ # Business logic
├── middleware/ # Auth, validation, error handlers
├── models/ # Mongoose schemas
├── routes/ # API endpoints
├── utils/ # Reusable utilities (token, validators)
├── types/ # TypeScript interfaces
├── app.ts # Express app
└── server.ts # Server entry point


---

## 🔐 Authentication & Authorization

- JWT-based Auth (`accessToken`, `refreshToken`)
- Role-based Access Control for:
  - `farmer`
  - `buyer`
  - `logistics`
  - `admin`

---

## 🧠 Core Models (MongoDB + Mongoose)

| Model        | Description                                           |
|--------------|-------------------------------------------------------|
| `User`       | All user roles (farmer, buyer, logistics, admin)     |
| `Product`    | Farmer-posted yields and crops                       |
| `Order`      | Orders placed by buyers for produce                  |
| `Logistics`  | Vehicles and delivery service providers              |
| `Equipment`  | Leasable farming tools tracked per cooperative       |
| Future Models to be added                                            |
| `Loan`       | Individual or group loans for farmers/coops          |
| `SeedProduct`| Seeds, fertilizers, tools sold on marketplace        |
| `Review`     | Ratings and reviews for logistics & sellers          |
| `Transaction`| In-app wallet & payments                             |
| `Notification`| Alerts for status updates                           |
| `Forecast`   | AI-based price/demand prediction                     |

---

## 🧠 Controllers

| Controller      | Purpose                                               |
|------------------|-------------------------------------------------------|
| `auth.controller.ts` | Register, login, logout, refresh token            |
| `user.controller.ts` | Profile mgmt, address, wallet                     |
| `product.controller.ts` | Create, update, fetch yields                   |
| `order.controller.ts` | Buyer placing orders, order tracking             |
| `logistics.controller.ts` | Assign & track delivery status              |
| `equipment.controller.ts` | Book/return tools                            |
| `admin.controller.ts` | System analytics, user mgmt                     |
| `review.controller.ts` | Post/retrieve reviews                          |
| Future Scope: Controllers to be added                                   |
| `transaction.controller.ts` | Payment logging & wallet transactions    |
| `forecast.controller.ts` | AI integration endpoints                     |

---

## 🔰 Middlewares

| Middleware         | Description                                     |
|-------------------|-------------------------------------------------|
| `auth.middleware.ts` | JWT token validation                          |
| `role.middleware.ts` | Role-based access enforcement                  |
| `errorHandler.ts`     | Centralized error response handler           |
| `validator.middleware.ts` | DTO & schema validation                  |
| `rateLimiter.ts`       | (Optional) Rate limiting for public APIs    |

---


## API Routes Overview

| Method | Route                | Description             |
| ------ | -------------------- | ----------------------- |
| `POST` | `/api/auth/register` | Register a user         |
| `POST` | `/api/auth/login`    | Login + JWT             |
| `GET`  | `/api/products`      | Get all listed produce  |
| `POST` | `/api/orders`        | Buyer places order      |
| `GET`  | `/api/logistics/:id` | Delivery tracking       |
| `GET`  | `/api/admin/stats`   | Admin dashboard metrics |

## 🔮 AI/ML Integrations (Planned/Optional)
 - *Forecasting Models*: Predict crop demand & price
 - *Yield Analysis*: ML on image uploads to rate quality
 - *Route Optimization*: Smart logistics for faster delivery

---

## Maintainer

[@avidhanorkar](https://github.com/avidhanorkar) 