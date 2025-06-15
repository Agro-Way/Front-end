import { createGlobalStyle } from 'styled-components';
import headingImg from '@/assets/img/heading.jpg';
import smallImgOne from '@/assets/img/small-1.jpg';
import smallImgTwo from '@/assets/img/small-2.jpg';
import largeImgOne from '@/assets/img/large-1.jpg';
import largeImgTwo from '@/assets/img/large-2.jpg';
import parallaxImg from '@/assets/img/parallax.jpg';

const GlobalStyle = createGlobalStyle`

:root{
    --main: #063d1e;
    --primary: #2fa866;
    --secondary: #ffba43;
    --light-green: #c3e3d4;
    --black: #000;
    --light-black: #2c2929;
    --white:#fff;
    --white-dark: #edeaef;
    --red: #dc3545;
    --bg: rgba(0, 0, 0, .7);
    --bg2: rgba(0, 0, 0, .5);
    --box-shadow: 0 .5rem 1rem rgba(0,0,0,.5);
    --border: .1rem solid rgba(0, 0, 0, .3);
    --border2: .1rem solid var(--white);
    --border3: .1rem solid var(--primary);
}

*{
    font-family: 'Poppins', sans-serif;
    margin: 0; padding: 0;
    box-sizing: border-box;
    outline: none; border: none;
    text-decoration: none; list-style: none;
    transition: all .2s linear;
}
*::selection{
    color: var(--white);
    background-color: var(--main);
}
html{
    font-size: 62.5%;
    overflow-x: hidden !important;
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
}
html::-webkit-scrollbar{
    width: .8rem;
}
html::-webkit-scrollbar-track{
    background: var(--white);
}
html::-webkit-scrollbar-thumb{
    background: var(--primary);
    border-radius: 5rem;
}

body{
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden !important;
    background-color: var(--white);
}

section, footer{
    padding: 3rem 9%;
}

.heading{
	text-align: center;
	color: var(--main);
	text-transform: capitalize;
	margin-bottom: 4rem;
	margin-top: 2rem;
	font-size: 4rem;
}

.heading span {
	color: var(--primary);
}

.btn{
	display: inline-block;
	margin-top: 1rem;
	padding: 1rem 3rem;
	border-radius: 5rem;
	color: var(--white);
	background-color: var(--primary);
	cursor: pointer;
	font-size: 1.7rem;
	text-transform: capitalize;
    text-align: center;
    font-weight: 700;
}
.btn:hover{
	background-color: var(--main);
	color: var(--white);
}
.btn > i{
	margin-left: .5rem;
}

.sub-heading{
    min-height: 50vh;
    background: url(${headingImg}) no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 12rem 0;
    z-index: 0;
    width: 100vw;
}

.sub-heading h1{
    font-size: 4rem;
    color: var(--white);
}

.p-size{
    font-size: 1.6rem;
}

.d-flex{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.pt-8{
    margin-top: 8rem;
}

/* header */
.header{
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1200;
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 7%;
}
.header .logo{
    font-size: 2.5rem;
    font-weight: bolder;
    color: var(--main);
}
.header .logo span{
    color: var(--secondary);
}
.header .logo i{
    color: var(--main);
}
.header .navbar a{
    font-size: 1.7rem;
    margin-left: 1.5rem;
    color: var(--black);
    padding-block: 1.6rem;
    position: relative;
}
.header .navbar a::before{
    content: '';
    position: absolute;
    height: .3rem;
    border-block: .1rem solid var(--main);
    bottom: .5rem;
    width: 100%;
    transform: scaleX(0);
    transform-origin: center;
    transition: .5s ease;
}
.header .navbar a:is(:hover, :focus)::before{
    transform: scale(1);
}
.header .navbar a:hover{
    color: var(--main);
}
.header .icons div,
.header .icons a{
    width: 4.5rem;
    height: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    background-color: var(--main);
    border-radius: .5rem;
    margin-left: .5rem;
    color: var(--white);
    cursor: pointer;
    position: relative;
}
.header .icons div:hover,
.header .icons a:hover{
    color: var(--white);
    background-color: var(--primary);
}
.header .icons a .count{
    position: absolute;
    top: -.9rem; right: -.9rem;
    background-color: var(--primary);
    color: var(--white);
    font-size: 1.2rem;
    line-height: 1.8;
    font-weight: 700;
    padding: 0;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
}
#menu{
    display: none;
}
/* header end */

/*category*/
.category{
    padding: 1.4rem 7%;
    border-bottom: .1rem solid #eee;
}
.category .category-slider{
	padding: 1rem;
}
.category .slide a{
    font-size: 1.6rem;
    padding: 1rem;
    background-color: var(--main);
    border-radius: .5rem;
    color: var(--white);
}
.category .slide a:hover{
    background-color: var(--primary);
}
/*category end*/

/*home*/
.home{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    position: relative;
}
.home .content{
    text-align: center;
}
.home .content h1{
    font-size: 4.5rem;
    color: var(--white);
    text-transform: uppercase;
    text-shadow: 0 .3rem .5rem rgba(0,0,0,0.2);
}
.home .content p{
    font-size: 2.5rem;
    color: var(--white);
    padding: .5rem 0;
}
.home .video-container #video{
    position: absolute;
    top: 0; left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/*about*/
.about .row{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}
.about .row .image{
    flex: 1 1 40rem;
}
.about .row .image img{
    width: 100%;
    border-radius: .5rem;
}
.about .row .content{
    flex: 1 1 40rem;
}
.about .row .content h3{
    font-size: 3rem;
    color: var(--main);
    padding-bottom: 1rem;
}
.about .row .content h3 span{
    color: var(--primary);
}
.about .row .content p{
    font-size: 1.6rem;
    color: var(--black);
    padding: 1rem 0;
    line-height: 1.5;
}
/*about end*/

/*banner*/
.banner{
	background-color: var(--white-dark);
	display: flex;
	align-items: center;
	flex-direction: column;
}
.banner .grid{
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 2rem;
}
.banner .grid li{
	height: 35rem;
	padding: 1rem;
	border-radius: .5rem;
	background-size: cover;
	background-position: center;
	background-clip: content-box;
}
.banner .grid li.small{
	flex-basis: 40%;
}
.banner .grid li.large{
	flex-basis: 60%;
}
#small-1{
	background-image: url(${smallImgOne});
	background-size: cover;
}
#small-2{
	background-image: url(${smallImgTwo});
	background-size: cover;
}
#large-1{
	background-image: url(${largeImgOne});
	background-size: cover;
}
#large-2{
	background-image: url(${largeImgTwo});
	background-size: cover;
}
/*banner end*/

/*serviçes*/
.services .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.5rem;
}
.services .box-container .box{
    text-align: center;
    padding: 2rem;
    box-shadow: var(--box-shadow);
    border: var(--border);
    border-radius: .5rem;
    background-color: var(--primary);
}
.services .box-container .box:hover{
    background-color: var(--main);
}
.services .box-container .box i{
    font-size: 2rem;
    line-height: 6rem;
    width: 6rem;
    height: 6rem;
    margin: 1rem 0;
    color: var(--white);
    background-color: var(--main);
    border-radius: 50%;
}
.services .box-container .box i:hover{
    background-color: var(--primary);
}
.services .box-container .box h3{
    font-size: 2rem;
    font-weight: bolder;
    color: var(--white);
    padding: 1rem 0;
}
.services .box-container .box p{
    font-size: 1.5rem;
    line-height: 2;
    color: var(--white-dark);
}
/*service end*/

/*produtcs*/
.product{
    background-color: var(--white-dark);
}
.product .box-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
}
.product .box-container .box{
  text-align: center;
  background: var(--white);
  border-radius: .5rem;
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
}
.product .box-container .box .image{
  height: 25rem;
  width: 100%;
  padding: 1rem;
}
.product .box-container .box .image img{
  height: 100%;
  width: 100%;
  border-radius: .5rem;
  object-fit: cover;
}
.product .box-container .box .content{
  padding: 0 2rem 2rem 2rem;
}
.product .box-container .box .content h3{
  color: var(--black);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.product .box-container .box .content .price{
  display: inline-block;
  font-size: 2.5rem;
  color: var(--primary);
}
.product .box-container .box .content .fa-shopping-cart,
.product .box-container .box .content .fa-eye{
  text-align: center;
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.5rem;
  border-radius: .5rem;
  font-size: 2rem;
  background: none;
  color: var(--primary);
  border: .1rem solid var(--primary);
  cursor: pointer;
  margin-left: .5rem;
}
.product .box-container .box .content .fa-shopping-cart:hover,
.product .box-container .box .content .fa-eye:hover{
  color: var(--white);
  background: var(--primary);
  box-shadow: var(--box-shadow);
  transition: .4s linear;
}
/*produtcs end*/

/*parallax*/
.parallax{
    background: url(${parallaxImg}) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    z-index: 0;
    position: relative;
    min-height: 50vh;
    display: flex;
    align-items: center;
}
.parallax::before{
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: var(--bg);
}
.parallax .content h3{
    font-size: 2.5rem;
    color: var(--white);
    text-transform: uppercase;
    font-weight: bolder;
    margin-bottom: 3rem;
}
.parallax .content p{
    font-size: 2rem;
    color: var(--white);
    line-height: 1.5;
    padding: 1rem 0;
}
/*parallax end*/

/*blog*/
.blog .box-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}
.blog .box-container .box{
  box-shadow: var(--box-shadow);
}
.blog .box-container .box .image{
  height: 25rem;
  width: 100%;
  overflow: hidden;
}
.blog .box-container .box .image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.blog .box-container .box:hover .image img{
  transform: scale(1.2);
}
.blog .box-container .box .content{
  padding: 2rem;
}
.blog .box-container .box .content .icons{
  margin-bottom: 1rem;
}
.blog .box-container .box .content .icons a{
  font-size: 1.4rem;
  color: var(--primary);
}
.blog .box-container .box .content .icons a:hover{
  color: var(--primary);
}
.blog .box-container .box .content .icons a i{
  padding-right: .5rem;
}
.blog .box-container .box .content h3{
  font-size: 2.5rem;
  color: var(--black);
}
.blog .box-container .box .content p{
  font-size: 1.5rem;
  color: var(--black);
  line-height: 2;
  padding: 1rem 0;
}
/*blog end*/

/*search form*/
.search-form{
    width: 100%;
    height: 5.5rem;
    background: var(--white);
    border-radius: .5rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    border: var(--border);
    margin: 3rem 0;
}
.search-form input{
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    background: var(--white);
    color: var(--black);
    padding: 0 1.2rem;
}
.search-form button{
    font-size: 2.2rem;
    color: var(--white);
    cursor: pointer;
    background: var(--white);
    -webkit-text-stroke: .1rem var(--black);
    padding: 1rem;
}
.search-form button:hover{
    -webkit-text-stroke: .1rem var(--black);
}
/*search form end*/

/*pagination*/
.nav-page{
    margin-top: 3rem;
}
.nav-page .pagination{
    display: flex;
    font-size: 1.7rem;
    font-weight: 600;
}
.nav-page .pagination .page-item{
    border: var(--border);
    padding: 1rem;
    cursor: pointer;
    background-color: var(--white);
}
.nav-page .pagination .page-item:first-child,
.nav-page .pagination .page-item:last-child{
    border-radius: .5rem 0 0 .5rem;
    background-color: var(--primary);
}
.nav-page .pagination .page-item:first-child:hover,
.nav-page .pagination .page-item:last-child:hover{
    background-color: var(--main);
}
.nav-page .pagination .page-link{
    color: var(--main);
}
.nav-page .pagination .page-link:hover{
    color: var(--primary);
}
.nav-page .pagination .page-link i{
   color: var(--white);
   font-weight: 700;
}
/*pagination end*/

/*error*/
.error{
    width: 100vw;
}
.error .content h1{
    font-size: 6rem;
    color: var(--red);
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bolder;
}
.error .content p{
    font-size: 3rem;
    color: var(--primary);
    text-align: center;
    line-height: 1.5;
    padding: 1rem 0;
    font-weight: 700;
}
/*error end*/

/*footer*/
.footer{
    background: var(--main);
}
.footer .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 2rem;
}
.footer .box-container .box h3{
    font-size: 2.2rem;
    color: var(--white);
    padding: 1rem 0;
}
.footer .box-container .box p{
    font-size: 1.6rem;
    line-height: 2;
    color: var(--white);
    padding: 1rem 0;
}
.footer .box-container .box .share{
    margin-top: 1rem;
}
.footer .box-container .box .share a{
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    border: var(--border2);
    font-size: 1.7rem;
    border-radius: 30%;
    color: var(--white);
    margin-right: .4rem;
    text-align: center;
}
.footer .box-container .box .share a:hover{
    background: var(--primary);
    color: var(--white);
}
.footer .box-container .box .links{
    display: block;
    font-size: 1.6rem;
    color: var(--white);
    padding: 1rem 0;
}
.footer .box-container .box .links:hover{
    color: var(--primary);
}
.footer .credit{
    text-align: center;
    margin-top: 3rem;
    padding-top: 3rem;
    font-size: 2rem;
    color: var(--white);
    border-top: var(--border2);
}
.footer .credit span {
    color: var(--secondary);
}
/*footer end*/

.error-msg{
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 500;
  color: var(--red) !important;
  display: block;
}

.toast-tam {
  font-size: 1.6rem;
}

/* media query */
@media(max-width: 992px){
    html{
        font-size: 55%;
    }
    .header{
        padding: 1.5rem 3.5rem;
    }
    section, footer{
        padding: 3rem;
    }
}

@media(max-width: 768px){
    #menu{
        display: inline-block;
    }
    .header .navbar{
        position: absolute;
        top: 99%; left: 0; right: 0;
        background: var(--white);
        border-top: .1rem solid var(--primary);
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
    .header .navbar.active{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    .header .navbar a{
        display: flex;
        font-size: 2rem;
        justify-content: center;
    }
}

@media(max-width: 480px){
    html{
        font-size: 50%;
    }
}
`
export default GlobalStyle;
