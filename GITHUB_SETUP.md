# Push This Project to GitHub

Git is not installed (or not in your PATH) on this machine. Follow these steps to create a repo and push your code.

---

## 1. Install Git (if needed)

- Download: **https://git-scm.com/download/win**
- Run the installer and use default options.
- **Restart your terminal** (or VS Code/Cursor) after installing.

---

## 2. Create a New Repository on GitHub

1. Go to **https://github.com/new**
2. Sign in if needed.
3. Set:
   - **Repository name:** e.g. `dr-sumaira-edu` or `first-edu`
   - **Description:** (optional) e.g. "Educational platform – Biochemistry & Molecular Sciences"
   - **Public**
   - **Do not** check "Add a README" (you already have one).
4. Click **Create repository**.

---

## 3. Push Your Code (in terminal)

Open **PowerShell** or **Command Prompt** in your project folder and run:

```bash
cd D:\Development\FIRST

git init
git add .
git commit -m "Initial commit: Dr. Sumaira educational platform (Next.js + Tailwind)"

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace **YOUR_USERNAME** with your GitHub username and **YOUR_REPO_NAME** with the repo name you chose (e.g. `dr-sumaira-edu`).

---

## 4. If GitHub Asks for Login

- **HTTPS:** GitHub may ask for username and password. Use a **Personal Access Token** instead of your account password:  
  https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token  
- **SSH:** If you use SSH keys, use the SSH URL instead:  
  `git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git`

---

After this, your code will be on GitHub. You can delete this file later if you want.
