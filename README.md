# AI Test Case Generator

An intelligent test case generator that integrates with GitHub to automatically create comprehensive test cases for your code using AI.

## 🚀 Live Demo

**Demo URL:** [https://ai-test-generator.vercel.app](https://ai-test-generator.vercel.app)

## ✨ Features

### 🔗 GitHub Integration
- **Personal Access Token Authentication** - Secure GitHub integration
- **Repository Browsing** - View all your repositories
- **File Explorer** - Navigate and select code files with tree structure
- **Multi-file Selection** - Choose multiple files for comprehensive testing

### 🤖 AI-Powered Test Generation
- **Intelligent Analysis** - AI analyzes your code structure and patterns
- **Framework Detection** - Automatically detects appropriate test frameworks
- **Multiple Test Types** - Unit, integration, and error handling tests
- **Language Support** - JavaScript, TypeScript, Python, Java, C#, and more

### 📋 Test Case Management
- **Summary Generation** - AI creates detailed test case summaries
- **Complexity Assessment** - Categorizes tests by complexity level
- **Code Generation** - Generates complete, runnable test code
- **Framework-Specific** - Uses appropriate testing frameworks for each language

### 🔄 GitHub Integration
- **Pull Request Creation** - Automatically create PRs with generated tests
- **Branch Management** - Creates feature branches for test additions
- **Code Review Ready** - Generated tests are ready for team review

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Serverless backend
- **GitHub API** - Repository and file management
- **AI Integration** - OpenAI/Gemini for test generation

### Deployment
- **Vercel** - Serverless deployment platform

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- GitHub Personal Access Token
- AI API key (OpenAI or Gemini)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/ai-test-case-generator.git
   cd ai-test-case-generator
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Update `.env.local`:
   \`\`\`env
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   OPENAI_API_KEY=sk-your-openai-key
   GEMINI_API_KEY=your-gemini-api-key
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage Guide

### Step 1: GitHub Authentication
1. Create a GitHub Personal Access Token at [GitHub Settings](https://github.com/settings/tokens)
2. Required permissions: `repo`, `read:user`, `pull_requests:write`
3. Enter your token directly in the application (no OAuth setup required)
4. The application uses token-based authentication for simplicity

### Step 2: Select Repository & Files
1. Choose a repository from your GitHub account
2. Browse the file tree structure
3. Select code files you want to generate tests for
4. Multiple file selection is supported

### Step 3: Generate Test Summaries
1. Click "Generate Test Case Summaries"
2. AI analyzes your code and creates test summaries
3. Review different test types and complexity levels
4. Each summary shows framework and target files

### Step 4: Generate Test Code
1. Select a test summary you want to implement
2. Click "Generate Test Code"
3. AI creates complete, runnable test code
4. Code is framework-specific and ready to use

### Step 5: Create Pull Request (Optional)
1. Review the generated test code
2. Click "Create PR" to add tests to your repository
3. A new branch and pull request are created automatically
4. Tests are ready for team review and integration

## 🧪 Supported Test Frameworks

### JavaScript/TypeScript
- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Cypress** - End-to-end testing

### Python
- **pytest** - Modern testing framework
- **unittest** - Built-in testing framework
- **Selenium** - Web automation testing

### Java
- **JUnit 5** - Modern Java testing
- **TestNG** - Testing framework
- **Mockito** - Mocking framework

### C#
- **NUnit** - Unit testing framework
- **xUnit** - Testing framework
- **Moq** - Mocking library

## 🎯 Test Types Generated

### Unit Tests
- Function and method testing
- Parameter validation
- Return value verification
- Isolated functionality testing

### Integration Tests
- Component interaction testing
- API integration testing
- Data flow verification
- Cross-module functionality

### Error Handling Tests
- Exception scenario testing
- Invalid input handling
- Network failure recovery
- Boundary condition testing

### Performance Tests
- Execution time validation
- Memory usage testing
- Load testing scenarios
- Optimization verification

## 🔧 Configuration

### GitHub Integration
No GitHub App setup required! Users provide their own Personal Access Tokens.

### AI Provider Setup
\`\`\`env
# Choose one AI provider
OPENAI_API_KEY=sk-your-openai-key
# OR
GEMINI_API_KEY=your-gemini-api-key
\`\`\`

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically

3. **Environment Variables in Vercel**
   - Add all variables from `.env.local`
   - Update `NEXTAUTH_URL` to your production domain

## 📊 Demo Video Features

The application demonstrates:

1. **GitHub Authentication Flow**
   - Token-based authentication
   - Repository access and listing

2. **File Selection Process**
   - Interactive file tree navigation
   - Multi-file selection capabilities

3. **AI Test Generation**
   - Real-time test summary generation
   - Framework-specific code generation

4. **Pull Request Creation**
   - Automated branch creation
   - Test file addition to repository

## 🔮 Future Enhancements

### Planned Features
- [ ] **Multiple AI Providers** - Support for Claude, Cohere
- [ ] **Test Execution** - Run tests directly in the platform
- [ ] **Coverage Analysis** - Test coverage reporting
- [ ] **Custom Templates** - User-defined test templates
- [ ] **Team Collaboration** - Shared test generation workflows
- [ ] **CI/CD Integration** - GitHub Actions integration

### Technical Improvements
- [ ] **Real Database** - PostgreSQL/MongoDB integration
- [ ] **Caching** - Redis for performance optimization
- [ ] **Rate Limiting** - API usage management
- [ ] **Analytics** - Usage tracking and insights
- [ ] **Mobile App** - React Native version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** - AI-powered test generation
- **GitHub API** - Repository integration
- **Next.js Team** - Amazing React framework
- **Vercel** - Excellent deployment platform
- **shadcn/ui** - Beautiful component library

PRs and collaborations are always welcome

**Built with ❤️ for developers who love quality code and comprehensive testing**
