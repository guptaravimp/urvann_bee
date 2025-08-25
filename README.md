# Urvann Plant App - Backend API

A robust Node.js/Express.js backend API for the Urvann Plant Application, providing plant management, category management, and image upload functionality with Cloudinary integration.

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/guptaravimp/urvann_bee.git
   cd urvann_bee
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URL=your_mongodb_connection_string
   CLOUD_NAME=your_cloudinary_cloud_name
   API_KEY=your_cloudinary_api_key
   API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development
   ```
4 ### CORS Configuration
The API is configured for production with specific origin:
```javascript
app.use(cors({
    origin: "https://urvann-fe.vercel.app",
    credentials: true
}));
```

5. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   ```

## 📁 Project Structure

```
Backend/
├── config/
│   ├── cloudinary.js      # Cloudinary configuration
│   └── DBConnection.js    # MongoDB connection setup
├── controllers/
│   ├── fileupload.js      # File upload controller
│   └── plantController.js # Plant CRUD operations
├── models/
│   ├── Category.js        # Category schema
│   ├── File.js           # File schema
│   └── Plant.js          # Plant schema
├── routes/
│   ├── imageUpload.js     # Image upload routes
│   └── plantRoutes.js     # Plant management routes
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
└── vercel.json          # Vercel deployment config
```

## 🔌 API Endpoints

### Plant Management

#### Get All Plants
```
GET /api/v1/plant/getAllPlants
```



#### Create New Plant
```
POST /api/v1/plant/addPlant
Content-Type: application/json

{
  "plantName": "String",
  "plantPrice": Number,
  "plantDescription": "String",
  "plantCategories": ["Category IDs"],
  "plantAvailability": "String"
}
```



### Image Upload

#### Upload Image
```
POST /api/v1/upload//imageUpload
Content-Type: multipart/form-data

file: [Image file]
```

### Category Management

#### Get All Categories
```
GET /api/v1/plant/getAllCategories
```

#### Create Category
```
POST /api/v1/plant//addCategory
Content-Type: application/json

{
  "categoryName": "String",
  "categoryDescription": "String"
}
```

### Vercel Deployment
The project includes `vercel.json` for easy deployment on Vercel:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```





