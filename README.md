# Urvann Plant App - Backend API

A robust Node.js/Express.js backend API for the Urvann Plant Application, providing plant management, category management, and image upload functionality with Cloudinary integration.

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Backend
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

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
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
GET /api/v1/plant
```

#### Get Plant by ID
```
GET /api/v1/plant/:id
```

#### Create New Plant
```
POST /api/v1/plant
Content-Type: application/json

{
  "plantName": "String",
  "plantPrice": Number,
  "plantDescription": "String",
  "plantCategories": ["Category IDs"],
  "plantAvailability": "String"
}
```

#### Update Plant
```
PUT /api/v1/plant/:id
Content-Type: application/json

{
  "plantName": "String",
  "plantPrice": Number,
  "plantDescription": "String",
  "plantCategories": ["Category IDs"],
  "plantAvailability": "String"
}
```

#### Delete Plant
```
DELETE /api/v1/plant/:id
```

### Image Upload

#### Upload Image
```
POST /api/v1/upload/image
Content-Type: multipart/form-data

file: [Image file]
```

### Category Management

#### Get All Categories
```
GET /api/v1/plant/categories
```

#### Create Category
```
POST /api/v1/plant/category
Content-Type: application/json

{
  "categoryName": "String",
  "categoryDescription": "String"
}
```

## 🗄️ Database Models

### Plant Schema
```javascript
{
  plantName: String (required),
  plantPrice: Number (required),
  plantImage: String (required),
  plantDescription: String,
  plantCategories: [ObjectId] (required),
  plantAvailability: String (default: "In Stock"),
  timestamps: true
}
```

### Category Schema
```javascript
{
  categoryName: String (required),
  categoryDescription: String,
  timestamps: true
}
```

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port number | No (default: 5000) |
| `MONGODB_URL` | MongoDB connection string | Yes |
| `CLOUD_NAME` | Cloudinary cloud name | Yes |
| `API_KEY` | Cloudinary API key | Yes |
| `API_SECRET` | Cloudinary API secret | Yes |
| `NODE_ENV` | Environment mode | No |

## 🚀 Deployment

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

### Manual Deployment
1. Set up environment variables on your hosting platform
2. Install dependencies: `npm install --production`
3. Start the server: `npm start`

## 🧪 Development

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (not configured yet)

### Development Workflow
1. Make changes to the code
2. Test locally with `npm run dev`
3. Ensure all environment variables are set
4. Test API endpoints
5. Deploy to production

## 🔧 Configuration

### CORS Configuration
The API is configured for production with specific origin:
```javascript
app.use(cors({
    origin: "https://urvann-fe.vercel.app",
    credentials: true
}));
```

### File Upload Configuration
- Maximum file size: 50MB
- Temporary file directory: `/tmp/`
- Debug mode enabled in development

## 🐛 Error Handling

The application includes comprehensive error handling:
- Environment variable validation
- Global error middleware
- File upload error handling
- Database connection error handling

## 📝 License

ISC License

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.
