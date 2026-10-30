# Portfolio Website Template

A simple, animated portfolio website you can make your own in one afternoon. No frameworks and nothing to install: just HTML, CSS, and JavaScript.

**What's included:** a welcome section with your name, About Me, Skills, Projects, and Contact sections, plus built-in effects like a mouse sparkle trail, a glowing dot background, and cards that slide in as you scroll.

---

## What's in the folder

| File | What it does |
|---|---|
| `index.html` | The **content**: your name, text, projects, and links |
| `style.css` | The **look**: colors, fonts, spacing, animations |
| `script.js` | The **behavior**: menu, scroll effects, mouse sparkles |
| `assets/` | Your **extra files**: project screenshots go in `assets/images/`, and your resume goes in `assets/` |
| `README.md` | This guide |

```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── resume.pdf
└── README.md
```

You'll spend most of your time in `index.html`.

---

## Step 1: Get the template

There are two ways to get a copy onto your computer, and both give you the exact same files.

**Option A: Download ZIP**
1. Scroll to the top of this page.
2. Click the green **Code** button, then **Download ZIP**.
3. Find the ZIP in your Downloads folder and **unzip it** (double-click on Mac, or right-click and choose **Extract All** on Windows).
4. Move the unzipped folder somewhere easy to find, like your Desktop or Documents.

**Option B: Clone it (if you have Git installed)**

Cloning downloads the project using Git, a tool developers use to track changes to their code.

*In the terminal:*
1. Scroll to the top of this page, click the green **Code** button, and copy the link under **HTTPS**.
2. Open a terminal (on Mac: the **Terminal** app; on Windows: **Command Prompt** or **Git Bash**).
3. Go to where you want the folder, for example your Desktop:
   ```
   cd Desktop
   ```
4. Type `git clone`, a space, then paste the link you copied, and press Enter. It will look like this:
   ```
   git clone https://github.com/raghadala/webdev-workshop.git
   ```

*Or straight from VS Code:*
1. Open VS Code and press Ctrl+Shift+P (Cmd+Shift+P on Mac).
2. Type **Git: Clone**, press Enter, and paste the link you copied from the **Code** button on this page.
3. Choose a folder to save it in, then click **Open** when VS Code asks.

Don't have Git, or not sure what it is? Use Option A. It works just as well for this workshop.

---

## Step 2: Open it in VS Code

1. Download and install [VS Code](https://code.visualstudio.com) if you don't have it.
2. Open VS Code, click **File**, then **Open Folder**, and choose the template folder.
3. You should see `index.html`, `style.css`, and `script.js` in the sidebar on the left.

---

## Step 3: See your website live while you edit

1. In VS Code, click the **Extensions** icon on the left sidebar (it looks like four squares).
2. Search for **Live Server** and click **Install**.
3. Open `index.html`, right-click anywhere in the code, and choose **Open with Live Server**.

Your website opens in the browser, and it **refreshes automatically every time you save** (Ctrl+S on Windows, Cmd+S on Mac).

---

## Step 4: Make it yours

### ✏️ Change your info

Open `index.html` and search for **✏️ EDIT** (Ctrl+F on Windows, Cmd+F on Mac). Every place you need to change is marked with it: your name, bio, skills, projects, and links.

Tips:
- **Adding a skill:** copy a whole `<span class="skill-tag">` line and change the text.
- **Adding a project:** copy everything from `Project 1 START` to `Project 1 END` and paste it after the last project.
- **Removing something:** delete its whole block, from START to END.

### 🎨 Change your colors

Open `style.css`. The very top section is labeled **CUSTOMIZE YOUR COLORS HERE**. Change these lines:

```css
--bg-primary: #121212;      /* dark mode background */
--text-primary: #f8f9fa;    /* dark mode text */

--light-bg: #f8f9fa;        /* light mode background */
--light-text: #121212;      /* light mode text */

--accent-primary: #3b82f6;  /* buttons, links, sparkles (both modes) */
```

Everything else on the site, including the sparkles and glowing effects, updates to match automatically. Need color ideas? Try [coolors.co](https://coolors.co) and copy a color code like `#ff6b6b`.

### 📷 Add project screenshots (optional)

Images are turned off by default, so your site looks good even without them. To add one:

1. Put your screenshot in the `assets/images` folder, for example `assets/images/project1.png`. (If the folders aren't there, create a folder called `assets`, and inside it a folder called `images`.)
2. In `index.html`, find the project and delete the two lines that say `IMAGE START` and `IMAGE END`.
3. Make sure the file name in `src="assets/images/project1.png"` matches your file **exactly**, including capital letters.

### 📄 Add your resume (optional)

Put your resume PDF in the `assets` folder and name it `resume.pdf`. The download button in the Contact section will work automatically. Don't have one yet? Delete the Resume block in the Contact section.

---

## Step 5: Put your website online with Vercel (free)

**Vercel** hosts your website for free and gives you a real link you can share, like `https://your-portfolio.vercel.app`. It works in two parts: your code goes on GitHub, and Vercel publishes it from there.

### Part 1: Put your code on your own GitHub

First, make an empty repository to hold your site:

1. Sign in to [GitHub](https://github.com) (make a free account if you don't have one).
2. Click the **+** in the top-right corner, then **New repository**.
3. Give it a name, like `portfolio`. **Don't** check "Add a README file"; leave it empty.
4. Click **Create repository**.

Then get your files into it. Pick whichever way you're comfortable with:

**Option A: Upload in the browser (no Git needed)**

1. On your new repository's page, click **uploading an existing file**.
2. Open your template folder on your computer, select **everything inside it** (`index.html`, `style.css`, `script.js`, `README.md`, plus your `assets` folder), and drag it all onto the GitHub page.
   Drag the files themselves, not the folder they're in. Otherwise your site will be hidden one folder too deep.
3. Scroll down and click **Commit changes**.

**Option B: Push with Git**

On your new repository's page, copy its link (it looks like `https://github.com/your-username/portfolio.git`). Then open a terminal in your template folder (in VS Code: **Terminal**, then **New Terminal**) and run the commands for how you got the template.

*If you **cloned** the template in Step 1*, your folder is still linked to the workshop repository. Point it at your own instead:

```
git remote set-url origin PASTE-YOUR-REPO-LINK-HERE
git add .
git commit -m "My portfolio"
git push -u origin main
```

*If you **downloaded the ZIP** in Step 1*, your folder isn't a Git project yet. Set it up first:

```
git init
git add .
git commit -m "My portfolio"
git branch -M main
git remote add origin PASTE-YOUR-REPO-LINK-HERE
git push -u origin main
```

The first time you push, Git may open a window asking you to sign in to GitHub. That's normal; sign in and the push will continue.

### Part 2: Publish it with Vercel

1. Go to [vercel.com](https://vercel.com) and click **Sign Up**. Choose the free **Hobby** plan and **Continue with GitHub**, so your accounts are connected.
2. On your Vercel dashboard, click **Add New...**, then **Project**.
3. Find your `portfolio` repository in the list and click **Import**.
   Don't see it? Click the link to adjust GitHub permissions and give Vercel access to that repository.
4. Leave all the settings as they are. There's nothing to configure for a plain HTML site.
5. Click **Deploy** and wait about a minute. 🎉
6. Click the preview image or **Continue to Dashboard** to find your live link. That's the link to share!

**Updating your site later:** get your changes onto GitHub the same way you did the first time, and Vercel updates your live site automatically within a minute. You don't need to touch Vercel again.

- **Uploading:** upload the changed files to the same repository and click **Commit changes**.
- **Pushing:** run these three commands:
  ```
  git add .
  git commit -m "Describe what you changed"
  git push
  ```

**Want a nicer link?** In your Vercel project, go to **Settings**, then **Domains**, and you can change the `.vercel.app` name to something like `your-name.vercel.app`, if it's not already taken.

---

## Want to go further?

- **Remove an effect you don't like:** each effect in `style.css` and `script.js` has its own labeled section. Delete that section to turn it off.
- **Try more animations:** browse [Uiverse](https://uiverse.io) for buttons and components, or [Animista](https://animista.net) to design your own animations.
- **Learn more:** [MDN Web Docs](https://developer.mozilla.org) explains every HTML tag, CSS property, and JavaScript feature used here.

---

## Before you publish: make this README yours

This README is the workshop guide, and it will get uploaded along with your other files in Step 5. Once your site is done, replace everything in `README.md` with a few lines about **your** portfolio, like this:

```markdown
# Your Name - Portfolio

My personal portfolio website, built with HTML, CSS, and JavaScript.

🔗 Live site: https://your-portfolio.vercel.app
```

That way, anyone who finds your repository sees your project, not the workshop instructions.