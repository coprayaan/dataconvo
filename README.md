# POS Dashboard with AskYourDatabase Chatbot

A modern Point of Sale (POS) dashboard application with integrated AI chatbot powered by AskYourDatabase. This application provides comprehensive sales data visualization, inventory management, and AI-powered assistance.

## Features

- 📊 **Sales Analytics**: Interactive charts showing sales trends and order data
- 📦 **Inventory Management**: Real-time inventory tracking with status indicators
- 💰 **Financial Metrics**: Key performance indicators and revenue tracking
- 🤖 **AI Chatbot**: Integrated AskYourDatabase chatbot for data queries and assistance
- 📱 **Responsive Design**: Modern, mobile-friendly interface
- 🎨 **Beautiful UI**: Clean, professional design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **AI Chatbot**: AskYourDatabase integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- AskYourDatabase account and API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pos-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # AskYourDatabase Configuration
   AYD_API_KEY=your_api_key_here
   CHATBOT_ID=your_chatbot_id_here
   NEXT_PUBLIC_CHATBOT_ID=your_chatbot_id_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## AskYourDatabase Integration

This application integrates with AskYourDatabase to provide AI-powered chatbot functionality. The chatbot can:

- Answer questions about sales data
- Provide inventory insights
- Generate reports
- Assist with data analysis

### Setup Instructions

1. **Get your API key**: Visit [AskYourDatabase](https://www.askyourdatabase.com) and create an account
2. **Create a chatbot**: Set up a new chatbot in your AskYourDatabase dashboard
3. **Get your chatbot ID**: The chatbot ID is found in the URL when editing your bot (`.../chatbot/your_chatbot_id`)
4. **Configure environment variables**: Add your API key and chatbot ID to `.env.local`

### How it works

The chatbot integration follows the official AskYourDatabase documentation:

1. **Session Creation**: The backend API (`/api/ayd`) creates authenticated sessions
2. **Iframe Embedding**: The chatbot is embedded in an iframe with proper authentication
3. **Message Handling**: The application listens for messages from the chatbot iframe
4. **Floating Action Button**: Users can access the chatbot via a floating action button

## Project Structure

```
pos-dashboard/
├── app/
│   ├── api/ayd/route.ts    # AskYourDatabase API integration
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main dashboard page
├── components/
│   ├── ChatbotWidget.tsx   # AI chatbot component
│   ├── InventoryTable.tsx  # Inventory management table
│   ├── SalesChart.tsx      # Sales analytics chart
│   └── StatsCards.tsx      # Key metrics cards
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Adding New Charts
Add new chart components in the `components/` directory and import them in `app/page.tsx`.

### Modifying the Chatbot
The chatbot widget can be customized by modifying `components/ChatbotWidget.tsx`. You can:
- Change the positioning
- Modify the styling
- Add custom event handlers
- Integrate with your database

### Styling
The application uses Tailwind CSS. Modify `tailwind.config.js` to customize the design system.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `AYD_API_KEY` | Your AskYourDatabase API key | Yes |
| `CHATBOT_ID` | Your AskYourDatabase chatbot ID | Yes |
| `NEXT_PUBLIC_CHATBOT_ID` | Public chatbot ID for client-side fallback | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues related to:
- **Application**: Create an issue in this repository
- **AskYourDatabase**: Visit [AskYourDatabase Support](https://www.askyourdatabase.com/docs)

## Acknowledgments

- [AskYourDatabase](https://www.askyourdatabase.com) for the AI chatbot integration
- [Next.js](https://nextjs.org) for the React framework
- [Tailwind CSS](https://tailwindcss.com) for the styling system
- [Recharts](https://recharts.org) for the chart components 