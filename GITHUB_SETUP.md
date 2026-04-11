# Push This Project to GitHub

Your code is **already committed** locally. You only need to add your GitHub repo and push.

---

## Option A: Use the script (easiest)

1. **Create a new repo on GitHub:** https://github.com/new  
   - Name it (e.g. `bioscope`), leave "Add a README" **unchecked**, click Create.

2. **Edit `push-to-github.cmd`** in this folder:  
   - Set `GITHUB_USER=YOUR_GITHUB_USERNAME` to your real GitHub username.  
   - Set `REPO_NAME=bioscope` (or whatever you named the repo).

3. **Double‑click `push-to-github.cmd`** or run it from Command Prompt.  
   - It uses Git’s full path, so it works even if `git` is not in your PATH.

4. When asked for **password**, use a **Personal Access Token**, not your GitHub password:  
   https://github.com/settings/tokens (create token with `repo` scope).

---

## Option B: Use terminal commands

1. **Set your Git identity** (once per machine):
   ```bash   "C:\Program Files\Git\bin\git.exe" config --global user.email "your@email.com"
   "C:\Program Files\Git\bin\git.exe" config --global user.name "Your Name"
   ```

2. **Create a new repo on GitHub:** https://github.com/new (no README).

3. **Add remote and push** (replace USERNAME and REPO_NAME):
   ```bash
   cd D:\Development\FIRST
   "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/USERNAME/REPO_NAME.git
   "C:\Program Files\Git\bin\git.exe" branch -M main
   "C:\Program Files\Git\bin\git.exe" push -u origin main
   ```
   If `git` is in your PATH, you can use `git` instead of the full path.

---

## If push asks for login

- **Username:** your GitHub username  
- **Password:** use a **Personal Access Token** from https://github.com/settings/tokens (not your account password)

---

After this, your code will be on GitHub.
