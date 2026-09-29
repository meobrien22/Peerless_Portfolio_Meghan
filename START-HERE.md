# Put your portfolio on GitHub Pages

The easiest upload method for this image-rich site is [GitHub Desktop](https://desktop.github.com/). No coding or terminal commands are needed.

**Important: choose GitHub Actions in Settings → Pages.** Choosing Deploy from a branch will show the README instructions instead of the portfolio.

## 1. Unzip the download

Extract **Meghan-Fasano-Portfolio-New-Photo.zip**. Keep the entire `meghan-fasano-portfolio` folder together.

## 2. Add the folder to GitHub Desktop

Sign in to GitHub Desktop. Choose **File → Add local repository**, then select the extracted `meghan-fasano-portfolio` folder.

If Desktop says it is not a Git repository, choose the **create a repository here** link. Keep the existing folder, use `meghan-fasano-portfolio` as the name, and do not choose a license template or replace the included README.

If files appear in Changes afterward, enter **Add portfolio** in the summary and choose **Commit to main**. If Desktop creates a differently named default branch, rename it to **main** before publishing.

## 3. Publish the repository

Click **Publish repository**. Use any available repository name. For the simplest free GitHub Pages setup, uncheck **Keep this code private**, then publish.

## 4. Turn on GitHub Pages

Open the repository on GitHub.com. Choose **Settings → Pages**. Under **Build and deployment → Source**, select **GitHub Actions**.

## 5. Run the included publisher

Open the repository’s **Actions** tab. Select **Publish portfolio**, choose **Run workflow**, and run it on **main**. If the first automatic run failed before you enabled Pages, this new run handles it.

When the run finishes successfully, your website address will appear under **Settings → Pages** and in the completed workflow.

Your address will normally look like:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

The included publisher adjusts images, slides and page links to that address automatically.

## Keep this in mind

- Upload the extracted folder’s contents, not the ZIP file itself.
- The complete folder is needed; the ready-built pages and images are stored separately and combined during publishing.
- This download is a snapshot. Future edits to the Sites version do not automatically reach GitHub.
- For later text or layout edits, the editable source and rebuild instructions are in `README.md`.
