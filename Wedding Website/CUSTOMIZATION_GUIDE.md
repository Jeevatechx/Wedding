# 🎯 Quick Customization Guide | விரைவு தனிப்பயனாக்க வழிகாட்டி

## 📝 5-Minute Setup Checklist

### 1️⃣ Personal Information (5 mins)

**Open `index.html` and replace:**

```
Line 42-45: Bride & Groom Names
"Bride Name" → Your bride's name
"Groom Name" → Your groom's name

Line 572: Wedding Hashtag
"#YourWeddingHashtag" → Your actual hashtag (e.g., #RahulMeetsPreethi2026)

Line 599: Footer names
"Bride & Groom" → Your actual names
```

### 2️⃣ Event Details (10 mins)

**Update these locations in `index.html`:**

| Event | Line | What to Change |
|-------|------|----------------|
| Mehendi | 179, 185, 189 | Date, Time, Venue |
| Sangeet | 215, 221, 225 | Date, Time, Venue |
| Wedding | 253, 259, 263 | Date, Time, Venue |
| Reception | 289, 295, 299 | Date, Time, Venue |

### 3️⃣ Google Maps (5 mins)

**Open `script.js` (Lines 206-235):**

**Easy Way:** Just update addresses
```javascript
mehendi: {
    name: 'Name of Venue',
    address: 'Full Address with PIN code',
    lat: 0,  // Leave as 0
    lng: 0   // Leave as 0
},
```

**Better Way:** Add coordinates
1. Google Maps → Right-click venue → Copy coordinates
2. Paste lat/lng values

**Example:**
```javascript
wedding: {
    name: 'Guruvayur Temple',
    address: 'Guruvayur, Kerala 680101',
    lat: 10.5937,
    lng: 76.0407
},
```

## 🎨 Easy Color Changes

**Open `styles.css` (Lines 2-20):**

### For Red & Gold Theme (Default):
```css
--gold: #D4AF37;
--deep-red: #8B0000;
```

### For Pink & Gold Theme:
```css
--gold: #D4AF37;
--deep-red: #FF1493;  /* Change this */
```

### For Blue & Gold Theme:
```css
--gold: #FFD700;  /* Brighter gold */
--deep-red: #000080;  /* Navy blue instead */
```

### For Green & Gold (Kerala Style):
```css
--gold: #D4AF37;
--deep-red: #006400;  /* Dark green */
```

## 📸 Adding Your Photos

### Method 1: Replace Placeholders

**Current code** (in `index.html`):
```html
<div class="gallery-item glass-card">
    <div class="gallery-placeholder">
        <span>📷</span>
        <p>Photo 1</p>
    </div>
</div>
```

**Replace with:**
```html
<div class="gallery-item glass-card">
    <img src="images/photo1.jpg" alt="Our engagement" 
         style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### Method 2: Create Images Folder
1. Create folder: `Wedding Website/images/`
2. Add your photos: `photo1.jpg`, `photo2.jpg`, etc.
3. Update paths in HTML

### Recommended Photo Specs:
- **Format:** JPG or PNG
- **Size:** 1000x1000 pixels (square)
- **File size:** < 500KB each
- **Optimize at:** [TinyPNG.com](https://tinypng.com)

## 👥 Wedding Party

**Format for each member:**
```html
<div class="party-member glass-card">
    <div class="member-photo">
        <!-- Option 1: Emoji -->
        👰
        
        <!-- Option 2: Actual photo -->
        <img src="images/bridesmaid1.jpg" 
             style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
    </div>
    <h4>Person's Full Name</h4>
    <p>Role (e.g., Sister of Bride)</p>
</div>
```

## 💌 RSVP Setup (Choose One)

### Option A: Google Forms (Easiest - 5 mins)

1. Create Google Form with same fields
2. Get form link
3. Replace RSVP section:

```html
<iframe src="YOUR_GOOGLE_FORM_LINK?embedded=true" 
        width="100%" height="1000" frameborder="0">
</iframe>
```

### Option B: Email (No setup needed)

Current form sends alert. To send email instead, update `script.js` (Line 169):

```javascript
// Create email subject and body
const subject = `RSVP from ${data.fullName}`;
const body = `
Name: ${data.fullName}
Email: ${data.email}
Attending: ${data.attendance}
Guests: ${data.guests}
Events: ${data.events?.join(', ')}
Meal: ${data.mealPreference}
Message: ${data.message}
`;

// Open email client
window.location.href = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
```

### Option C: Formspree (Free - 2 mins)

1. Go to [Formspree.io](https://formspree.io)
2. Create free account
3. Get form endpoint
4. Add to `script.js`:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## 📱 Social Media Links

**Update icons with your links** (`index.html` Line 578):

```html
<a href="https://facebook.com/your-event" class="social-icon">📘</a>
<a href="https://instagram.com/your-hashtag" class="social-icon">📷</a>
<a href="https://twitter.com/search?q=%23YourHashtag" class="social-icon">🐦</a>
```

## 🎁 Registry Links

**Add your actual registry URLs** (`index.html` Lines 528-544):

```html
<a href="https://www.amazon.in/wedding/your-registry" 
   class="registry-link glass-card">
    <span class="registry-icon">🛍️</span>
    <span class="registry-name">Amazon</span>
</a>

<a href="https://www.yourstore.com/registry" 
   class="registry-link glass-card">
    <span class="registry-icon">🏬</span>
    <span class="registry-name">Store Name</span>
</a>
```

## 📖 Our Story Timeline

**Customize your love story** (`index.html` Lines 118-157):

```html
<div class="timeline-item left">
    <div class="timeline-content glass-card">
        <h3>Your Event Title</h3>
        <span class="timeline-date">Year/Date</span>
        <p>Your story here...</p>
    </div>
</div>
```

**Pro Tip:** Add as many timeline items as you want!

## 🏨 Hotel Information

**Add booking links** (`index.html` Lines 493-510):

```html
<div class="hotel-info">
    <h4>Hotel Taj Gateway</h4>
    <p>Special rate: ₹3,500/night</p>
    <p>📞 +91 1234567890</p>
    <button class="info-btn" 
            onclick="window.open('https://hotel-booking-link.com')">
        Book Now
    </button>
</div>
```

## ❓ Update FAQs

**Add/edit questions** (`index.html` starting Line 551):

```html
<div class="faq-item glass-card">
    <div class="faq-question">
        <h4>Your Question Here?</h4>
        <span class="faq-toggle">+</span>
    </div>
    <div class="faq-answer">
        <p>Your detailed answer here.</p>
    </div>
</div>
```

## 🚀 Quick Launch

### Local Testing:
1. Double-click `index.html`
2. Test all links
3. Try RSVP form
4. Check on mobile (press F12 → Toggle device toolbar)

### Upload to Web:

**Netlify (Recommended - 2 mins):**
1. Go to [Netlify.com](https://netlify.com)
2. Drag your `Wedding Website` folder
3. Get instant URL like: `your-names-wedding.netlify.app`
4. Share with everyone! 🎉

## 🎯 Pre-Launch Checklist

- [ ] Names updated
- [ ] Dates correct
- [ ] Venues added
- [ ] Photos uploaded
- [ ] Maps working
- [ ] RSVP configured
- [ ] Registry links added
- [ ] Mobile tested
- [ ] All links work
- [ ] Load time < 3 seconds

## 💡 Pro Tips

1. **Test Early:** Share with 2-3 friends first
2. **Track RSVPs:** Keep a spreadsheet
3. **Update Regularly:** Add new photos weekly
4. **Backup Data:** Save RSVP responses
5. **Go Live Early:** Launch 2-3 months before wedding

## 🆘 Common Issues

**Issue: Google Maps not working**
- Solution: Make sure address is complete with PIN code

**Issue: Photos not showing**
- Solution: Check file path is correct (case-sensitive!)

**Issue: RSVP not saving**
- Solution: Set up one of the backend options above

**Issue: Website looks weird on mobile**
- Solution: Clear cache and reload (Ctrl + Shift + R)

**Issue: Countdown wrong**
- Solution: Check date format in `script.js` matches: `'2026-02-20T09:00:00'`

## 📞 Quick Reference

**Main Files:**
- `index.html` - All content
- `styles.css` - All colors & design
- `script.js` - All interactions
- `README.md` - Full documentation

**Key Line Numbers:**
- Names: Line 42-45
- Wedding Date: Line 54
- Countdown: script.js Line 25
- Colors: styles.css Line 2-20
- Maps: script.js Line 206-235

---

**Need Help?** Check the full `README.md` file!

**Ready to launch?** Follow the hosting guide above! 🚀

---

💕 **வாழ்த்துக்கள்! Congratulations!** 💕
