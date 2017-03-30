import { h, Component } from 'preact';
import style from './style';
import Header from './header';

export default () => (
	<section class={style.main}>
		<div class={style.container}>
			<Header />
			<div class={style.about__navwrap}>
				<nav class="about__nav">
	        		<a class={style.about__nav_link} href="about.php">About</a>
	        		<a class={style.about__nav_link} href="press.php">Press</a>
					<a class={style.about__nav_link_active} href="careers.php">Jobs</a>
	    		 </nav>
			</div>
		</div>
	</section>
);
