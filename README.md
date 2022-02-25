# GlassEffectMenu 🔨
### Glassmorphic menu width HTML / CSS / Javascript 📱 💻


### INDEX.HTML:

```HTML
<html>
    <head>
        <title></title>
        <link async rel="stylesheet" href="css/reset.min.css">
        <link async rel="stylesheet" href="css/glass.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    </head>
    <body>

        <div id="brg">
            <i class="fa-solid fa-bars"></i>
        </div>

        <nav id="menu">
            <div class="back" id="back">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="cmn">Home</div>
            <div class="cmn">Portfolio</div>
            <div class="cmn">Contact US</div>
            <div class="cmn">Follow US</div>
            <footer>
                <a href="https://instagram.com/rdigital.me">@rdigital.me</a>
            </footer>
        </nav>

        <main id="bg_grad">
            <p class="loremipsum">
                <strong>Title Lorem</strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </main>
        <script type="text/javascript" src="js/abrecierra.js"></script>
    </body>
</html>
```

### GLASS.CSS :

```css
#menu
{
    position            : absolute;
    top                 : 0;
    left                : 0;
    max-width           : 519px;
    min-width           : 150px;
    width               : 100%;
    height              : 100%;
    z-index             : 3;
    transform           : translateX(-100%);
    backdrop-filter     : blur(8px);
    background-color    : rgb(255 255 255 / 3%);
    box-shadow          : 0 8px 10px 0 rgb(7 7 7 / 14%);
    border-right        : 0.5px solid rgba(255,255,255,.1);
    
    transition          : transform 300ms ease-out;
}
#menu.active
{
    transform   : translateX(0);
}
#menu .cmn:hover
{
    font-weight : bold;
}
#menu .cmn
{
    width       : 100%;
    box-sizing  : border-box;
    padding     : 1.4rem 5.3rem;
    font-size   : 1.8rem;
    color       : #ffffff;
    text-align  : left;
    cursor      : pointer;
    font-weight : bolder;
    text-shadow : -3px -1px 52px #000000;
}
#menu .back:hover
{
    transform   : scale(1.1);
}
#menu .back
{
    cursor          : pointer;
    color           : #ffffff;
    font-size       : 1.7rem;
    margin-bottom   : 1rem;
    padding         : 0.5rem 1.3rem;
    box-sizing      : border-box;
    width           : 100%;
}
#menu footer
{
    position    : absolute;
    bottom      : 0;
    left        : 0;
    width       : 100%;
    height      : 35px;
    font-size   : 1rem;
    text-align  : right;
    color       : #ffffff;
    box-sizing  : border-box;
    padding     : 0 2rem;
}
#bg_grad
{
    position            : relative;
    left                : 0;
    top                 : 0;
    width               : 100%;
    height              : 100%;
    z-index             : 0;

    background-color    : #A06ACE;
    opacity             : 1;
    background          : #cc6add;
    background          : -moz-linear-gradient(-45deg,  #cc6add 0%, #6ba0e0 100%);
    background          : -webkit-linear-gradient(-45deg,  #cc6add 0%,#6ba0e0 100%);
    background          : linear-gradient(135deg,  #cc6add 0%,#6ba0e0 100%);
    filter              : progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc6add', endColorstr='#6ba0e0',GradientType=1 );

}
#brg
{
    cursor      : pointer;
    width       : 50px;
    height      : 50px;
    position    : absolute;
    left        : 0.5rem;
    top         : 0.5rem;
    z-index     : 2;
    color       : #ffffff;
}

```

### ABRECIERRA.JS :
```JS
var $fn_aoc = function()
{
    if(obgral.instance == 0)
    {
        obgral.elm.classList.add('active');
        obgral.instance = 1;
    }
    else if(obgral.instance == 1)
    {
        obgral.elm.classList.remove('active');
        obgral.instance = 0;
    }
}

const   mnu     = document.getElementById("menu");
var     obgral  = {instance:0,elm: mnu};

var     back    = document.getElementById("back");
var     brg     = document.getElementById("brg");
        brg.addEventListener('click', $fn_aoc,false);
        back.addEventListener('click', $fn_aoc,false);
```


## My Socials 👩‍👦‍👦

- _Official_
  - [_Github_](https://github.com/Lsalar)
  - [_Instagram_](https://www.instagram.com/rdigital.me)
  - [_Email_](be@rdigital.me)
- _Personal_
  - [Instagram](https://www.instagram.com/lewi.me/)


## Found this project useful? ❤️

If you found this tuto useful, buy me a coffee. - [Buy me a coffee ☕](https://www.buymeacoffee.com/Lsalar)

## License ⚖️

- [MIT](https://github.com/RitickSaha/glassmophism/blob/master/LICENSE)

