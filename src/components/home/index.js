import { h, Component } from 'preact';
import style from './style';


export default () => (

	<section class={style.about__section}>
		<div class={style.about__wrap}>
			<div class={style.about__sub_container}>
				<h1 class={style.about__h1}>We are hiring</h1>
			</div>
			<div>
			<img src="http://promorepublic.com/img-new/careers/team.jpg" alt="PromoRepublic Team" class={style.careers__team_photo}></img>
			</div>
			<div class={style.about__sub_container}>
				<div class={style.positions_about__text}>
					<h2 class={style.about__h2_careers__h2}>Open positions</h2>
					<div class={style.vacancies}>
						<a href="career.php?id=1" class={style.vacancies__link}>Rockstar Customer Success Lead</a>
					</div>
					<div class={style.vacancies}>
						<a href="career.php?id=2" class={style.vacancies__link}>Badass Chief Content Producer</a>
					</div>
					<div class={style.vacancies}>
						<a href="career.php?id=3" class={style.vacancies__link}>Social Media Marketing Top Hat / Evangelist</a>
					</div>
				</div>
			</div>
		</div>
	</section>

);
