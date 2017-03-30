import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import Mainheader from './mainheader/index.js'

export default () => (
	<header class={style.header}>
		<a href="/" class={style.logo}></a>
		<Mainheader />
	</header>
);
