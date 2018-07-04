# ladbrokes
Ladbrokes CSS Exercise - Alon Kochav Raifman


DEPLOY :   npm start  // http-server
BUILD  :   npm run build   // gulp watch

There is not really a need to "npm install" since this is just a standalone html file, except for gulp watch. 

INSTRUCTIONS :  

Workflow and tools
1. No JS implementation on the code.
2. No frameworks allowed (including bootstrap). 
3. Use SASS (scss) 
4. Use modular approach (BEM or similar), UI should be stand alone and reusable
5. Use a build tool, tasks (grunt, gulp etc..) - optional
6. Work with git, upload to a repo (github, bitbucket...) 
7. Send us the repo link.

How do we Grade:
1. Compliant with instructions.
2. Modular CSS. (smacss, BEM, OOcss), UI components.  
3. Visual integrity and overall look and feel.
4. Output size and efficiency.
5. Level of scss use and build tools. 
6. Linting, prefix strategy, postCSS (bonus)

Task details: 
Create a responsive HTML page with the following elements on it:
1. A top menu with 4 links –
a. The links don’t have to lead anywhere. 
b. Each link should have an animated effect when hovered. 
c. The menu should be displayed in full as a top sticky menu in 1920*1080 resolution and display as a single button from 375*667 resolution (clicking the button will open an off-canvas menu. Feel free to use any kind of creative off-canvas menu variation & animations). 
d. The menu elements should take up the whole width of the menu and display the full text for each menu item when resolution is higher than 375*667. Please name the menu items differently, with different lengths of text for each (i.e. Home, Let’s get started, FAQ, How to get this, etc.)
2. 9 identical elements on the page, each using the image (bugs-bunny.png) as a background, displaying it as a circle. 
a. Each object should be 200px high * 200px wide and have an animated effect when hovered. 
b. These elements should be displayed as a 3x3 grid at 1080*1920 resolution and scale down to 1x9 grid at 320*480 resolution.
c. The grid must not be bigger than 3x3.

General guides: 
1. The page should be scalable and responsive from 1920*1080 resolution down to 320*480 resolution. 
2. Do not use any images apart from the image provided (bugs-bunny.png).
3. Assume you only need to support the latest version of Chrome. 
4. Attached is an example of how the grid should look at full 1920*1080 resolution (grid-example.png) 
