# 💍 திருமண வலைதளம் | Wedding Website

A beautiful, premium wedding website featuring **Kerala and Tamil Nadu traditional design** with modern animations and UI.

## 🎨 Features

### ✨ Core Features
- ✅ **Hero Section** with animated entrance
- ✅ **Countdown Timer** to February 20, 2026
- ✅ **Our Love Story** timeline
- ✅ **Event Schedule** (Mehendi, Sangeet, Wedding, Reception)
- ✅ **Google Maps Integration** for all venues
- ✅ **Wedding Party** showcase
- ✅ **Photo Gallery** with upload option
- ✅ **RSVP Form** with meal preferences
- ✅ **Travel & Stay** information
- ✅ **Gift Registry** links
- ✅ **FAQ Section** with accordion
- ✅ **Social Media** integration
- ✅ **Mobile Responsive** design

### 🎭 Design Elements
- **Traditional Colors**: Kasavu gold, deep red, peacock blue/green
- **Motifs**: Lotus flowers, peacock patterns, paisley designs
- **Animations**: Floating petals, smooth scrolls, parallax effects
- **UI Style**: Glassmorphism, gradients, premium feel
- **Typography**: Elegant serif fonts (Playfair Display, Cormorant Garamond, Cinzel)

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your browser:
1. Double-click `index.html`
2. Or right-click → Open with → Your preferred browser

### Option 2: Use Local Server (Recommended)
For best experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Then open: http://localhost:8000

## 📝 Customization Guide

### 1. Update Bride & Groom Names
**File: `index.html`** (Line ~42-45)
```html
<span class="name-animation">Your Bride Name</span>
<span class="ampersand">&</span>
<span class="name-animation">Your Groom Name</span>
```

### 2. Update Wedding Date
**File: `script.js`** (Line ~25)
```javascript
const weddingDate = new Date('2026-02-20T09:00:00').getTime();
```

### 3. Add Event Locations
**File: `index.html`** (Lines ~179, 215, 253, 289)
Update venue names and addresses for each event:
```html
<span>Your Venue Name, City</span>
```

**File: `script.js`** (Lines ~206-235)
Add actual Google Maps coordinates:
```javascript
mehendi: {
    name: 'Mehendi Venue',
    address: 'Full Address Here',
    lat: 12.9716,  // Your latitude
    lng: 77.5946   // Your longitude
},
```

### 4. Update Our Love Story
**File: `index.html`** (Lines ~118-157)
Replace the timeline events with your actual story

### 5. Add Wedding Party Members
**File: `index.html`** (Lines ~303-343)
Replace placeholder names with actual bridesmaids and groomsmen

### 6. Update Wedding Hashtag
**File: `index.html`** (Line ~572)
```html
<h3 class="hashtag">#YourWeddingHashtag</h3>
```

### 7. Add Photos
Replace the placeholder gallery items with actual images:
```html
<div class="gallery-item glass-card">
    <img src="path/to/your/photo.jpg" alt="Description">
</div>
```

### 8. Configure RSVP (Backend Required)
The RSVP form currently saves data to console. To make it functional:

1. Set up a backend service (Google Forms, Firebase, or custom API)
2. Update `script.js` (Line ~169):
```javascript
// Replace with your API endpoint
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

**Easy Option**: Use Google Forms
1. Create a Google Form with matching fields
2. Use a service like Formspree or form-data to connect it

### 9. Add Registry Links
**File: `index.html`** (Lines ~528-544)
```html
<a href="https://your-amazon-registry-link" class="registry-link glass-card">
```

### 10. Customize Colors
**File: `styles.css`** (Lines 2-20)
Modify CSS variables to change the color scheme:
```css
:root {
    --gold: #D4AF37;
    --deep-red: #8B0000;
    /* etc. */
}
```

## 🗺️ Google Maps Integration

### Getting Coordinates
1. Go to Google Maps
2. Right-click on your venue location
3. Click on the coordinates (e.g., "12.9716, 77.5946")
4. Copy and paste into `script.js`

### Alternative: Address-Only
If you don't have coordinates, just update the address field and it will search on Google Maps.

## 📱 Mobile Responsive

The website is fully responsive and works beautifully on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

## 🎬 Animations Included

1. **Floating Petals** - Continuous background animation
2. **Countdown Timer** - Live countdown to wedding day
3. **Scroll Animations** - Elements fade in as you scroll
4. **Parallax Effect** - Hero section moves with scroll
5. **Hover Effects** - Interactive cards and buttons
6. **Timeline Animation** - Story timeline animates in sequence

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📤 Hosting Options

### Free Hosting
1. **GitHub Pages**
   - Push to GitHub repo
   - Enable GitHub Pages in settings
   - Your site: `username.github.io/repo-name`

2. **Netlify**
   - Drag and drop your folder
   - Get instant URL
   - Free custom domain support

3. **Vercel**
   - Connect GitHub repo
   - Auto-deploy on changes

### With Custom Domain
1. Buy domain from GoDaddy, Namecheap, etc.
2. Connect to your hosting service
3. Your wedding site: `yournames-wedding.com`

## 🎨 Color Scheme

**Primary Colors:**
- Gold (#D4AF37) - Kasavu traditional
- Deep Red (#8B0000) - Maroon
- Cream (#FFF8DC) - Silk white
- Peacock Blue (#005F73)
- Lotus Pink (#FFB6C1)

## 📋 Tamil Content

The website includes Tamil text for:
- Date display (பிப்ரவரி 2026)
- Section subtitles
- Event names
- Thank you messages

## 🔧 Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling with modern features
- **Vanilla JavaScript** - Interactivity
- **Google Fonts** - Typography
- **Google Maps API** - Location integration

## 💡 Tips for Best Experience

1. **Images**: Use high-quality images (1920x1080 recommended)
2. **Loading**: Optimize images before uploading (use TinyPNG)
3. **Testing**: Test on multiple devices before launch
4. **Updates**: Keep RSVP list updated regularly
5. **Backup**: Save form submissions to a spreadsheet

## 📞 Support

For customization help or issues:
1. Check browser console for errors (F12)
2. Ensure all files are in same folder
3. Check file paths are correct

## 🎉 Special Features

- **Auto-hide RSVP fields** based on attendance selection
- **FAQ accordion** for easy reading
- **Smooth scroll navigation**
- **Mobile hamburger menu**
- **Sticky navigation** on scroll
- **Animated entrance** for all sections

## 📝 Checklist Before Launch

- [ ] Update bride & groom names
- [ ] Update wedding date and time
- [ ] Add all venue addresses
- [ ] Configure Google Maps coordinates
- [ ] Upload your photos
- [ ] Set up RSVP backend
- [ ] Add registry links
- [ ] Update wedding hashtag
- [ ] Test on mobile devices
- [ ] Share with friends & family!

---

**Made with ❤️ for your special day**  
**நமது சிறப்பு நாளுக்காக அன்புடன் உருவாக்கப்பட்டது**

💕 Happy Wedding! 💕
