  import { h, Component } from 'preact';
  import style from './style'; // if you create style file, you can import it


  export default () => ( // this is es6 function notation. equivalent to `function() {}`
        <div class={style.main_header}>
			<nav class={style.main_nav}>
        		<li class={style.main_nav__item}>
            		<a href="/en/pricing.php">Pricing</a>
            	</li>
            	<li class={style.main_nav__item}>
                	<a href="/en/agencies.php">Agencies</a>
            	</li>
            	<li class={style.main_nav__item}>
                	<a href="/en/careers.php">Jobs</a>
            	</li>
            	<li class={style.main_nav__item}>
                	<a href="http://en.promorepublic.com/blog">Social Media Academy</a>
            	</li>
        	</nav>
        	<div class={style.main_header_controls}>
        		<a href="http://app.promorepublic.com/en" class={style.button1}>Sign in</a>
        		<a href="http://app.promorepublic.com#signup" class={style.button2}>Get Started</a>
        	</div>
		</div>
  );