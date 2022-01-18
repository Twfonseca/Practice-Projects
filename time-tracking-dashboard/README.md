# Frontend Mentor - Time tracking dashboard

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

(./screenshot/Screenshot 2022-01-18-at-17-40-25-Frontend Mentor-Time tracking-dashboard.jpg)
### Links

- Solution URL:(https://github.com/Twfonseca/Practice-Projects/tree/main/time-tracking-dashboard)


### Built with
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

 I improved my skills with display: grid and flex; trying to build a responsive design
 I also improved my way to plan the structure of the code thinking on how each elemente will be display in their container, box model helped to figured out about it


```html
<div class="profileBackground"> 
        <div class="profileLaier">
          <div class="photoContainer">
              <img src="style/images/image-jeremy.png" alt="Jeremy Robson photo">
          </div>
          <div class="txtContainer">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div class="listContainer">
          <ul class="myList">
            <li id="daybtn">Daily</li>
            <li id="weekbtn" >Weekly</li>
            <li id="monthbtn">Monthly</li>
          </ul>
        </div>
      </div>
      a brief exemple of "box-model" solution: I separated each child element into a <div> so when I applied the flex display they acted independently, so it's easier to control the positions.
```
```css
    .gridContainer{
        display: grid;
        grid-template-rows: 221px 221px;
        grid-template-columns:1fr 1fr 1fr 1fr ;
        gap: 15px;
        width: 94.2%;
    }
  grid-row: 1 / span 2; About grid display I learned how to choose the column or row that the element will start and how much it will expand. I also learnd about  "fr" in grid template
```
### Useful resources

- [Example resource 1](https://www.w3schools.com/css/css_grid.asp) 
- [Example resource 2](https://developer.mozilla.org/pt-BR/docs/Web/CSS/grid) 

    Both web pages helped me  with grid display


## Author

- Website - [github profile ](https://github.com/Twfonseca)
- Frontend Mentor - [@y@Twfonseca](https://www.frontendmentor.io/profile/Twfonseca)
- Twitter - [@TawanFonseca2](https://twitter.com/TawanFonseca2)
- Linkedin - [Tawan Fonseca](https://www.linkedin.com/in/tawan-fonseca-5161b8217/)