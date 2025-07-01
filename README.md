# liveresume
Host an interactive version of your resume online, add any file/pics



# LiveResume – Interactive HTML Resume Template

LiveResume is a minimalist, interactive, and fully responsive resume template built using only HTML, CSS, and JavaScript. It allows you to showcase your professional profile with both a dynamic web-based CV and a downloadable PDF.

## Features

- Clean, modern design
- Embedded PDF resume viewer
- Download as PDF button
- Animated “Learn More” modals for experience details
- Dark mode toggle
- Language toggle (French / English)
- Responsive layout for all devices
- No external libraries or frameworks

## File Structure

```
LiveResume/
├── assets/
│   ├── avatar.jpg          # Profile picture
│   ├── favicon.jpg         # Favicon image
│   ├── resume.pdf          # PDF resume file
│   ├── linkedinIcon.png    # LinkedIn icon
│   └── darkmodeicon.png    # Icon for dark mode toggle
├── index.html              # Main HTML file
├── style.css               # All stylesheets
├── script.js               # All JavaScript functionality
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone or download the repository**

```bash
git clone https://github.com/your-username/liveresume.git
cd liveresume
```

2. **Customize**

- Replace `assets/resume.pdf` with your own CV file
- Replace `avatar.jpg` and other assets with your own images
- Edit `index.html` to modify personal details, experiences, education, and section content
- Adjust `style.css` for layout and color tweaks
- Modify `script.js` to control modal behavior, dark mode, and translation content

3. **Open in browser**

Simply open `index.html` in your browser to preview.

## Deployment

You can host your LiveResume on any static hosting service. Recommended:

- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)

### Netlify Example

- Go to netlify.com and sign in
- Click "Add new site" > "Import an existing project"
- Connect your GitHub repo or drag and drop the project folder
- Set the publish directory to `.`
- Deploy

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it for personal and commercial purposes.

---
LiveResume is designed to be simple, and effective. 
