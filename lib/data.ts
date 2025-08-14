import bcrypt from "bcryptjs"

// In-memory data store (replace with database in production)
export const users = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@linkedin.com",
    password: bcrypt.hashSync("demo123", 12),
    bio: "Welcome to MiniLinkedIn! I'm a demo user here to show you around the platform. Feel free to explore and create your own posts!",
    createdAt: "2024-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    password: bcrypt.hashSync("password123", 12),
    bio: "Software Engineer passionate about building great user experiences. Love working with React and Node.js!",
    createdAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike@example.com",
    password: bcrypt.hashSync("password123", 12),
    bio: "Product Manager with 5+ years experience in tech startups. Always excited about new opportunities and networking!",
    createdAt: "2024-02-01T00:00:00.000Z",
  },
]

export const posts = [
  {
    id: "1",
    content:
      "Welcome to MiniLinkedIn! 🎉 This is a demo platform where you can share your thoughts, connect with others, and build your professional network. Feel free to create your own posts and explore user profiles!",
    authorId: "1",
    createdAt: "2024-01-02T10:00:00.000Z",
  },
  {
    id: "2",
    content:
      "Just finished working on a new React project! The component architecture is so clean and maintainable. Love how hooks have simplified state management. What's your favorite React feature? 💻 #React #WebDev",
    authorId: "2",
    createdAt: "2024-01-16T14:30:00.000Z",
  },
  {
    id: "3",
    content:
      "Excited to announce that our team just launched a new feature that improves user engagement by 40%! 📈 It's amazing what you can achieve when you really listen to user feedback and iterate quickly. #ProductManagement #UserExperience",
    authorId: "3",
    createdAt: "2024-02-02T09:15:00.000Z",
  },
  {
    id: "4",
    content:
      "Had an amazing networking event today! Met so many talented professionals from different industries. The key to great networking is being genuinely interested in others and finding ways to help each other grow. 🤝 #Networking #ProfessionalGrowth",
    authorId: "3",
    createdAt: "2024-02-03T16:45:00.000Z",
  },
]
