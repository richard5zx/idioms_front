<template>
	<div id="app">
		<header><h1>Idiom App</h1></header>
		<main><RouterView></RouterView></main>
		<aside>
			<h3><RouterLink to="/AddIdiom">Add Idiom</RouterLink></h3>
			<h3><RouterLink to="/SearchIdiom">All Idiom</RouterLink></h3>
			<h3><RouterLink to="/UpdateIdiom">Update Idiom</RouterLink></h3>
			<h3><RouterLink to="/DeleteIdiom">Delete Idiom</RouterLink></h3>
		</aside>
		<footer><h1>@R</h1></footer>
	</div>
</template>

<script>
</script>

<style>
	@charset "UTF-8";
	* {
		margin: 0;
		padding: 0;
	}
	.aside{
		margin-top: 30px;
		margin-left: 40px;
	}
	body {
		width: 100%; 
		min-width: 600px; 
		max-width: 960px;		
		background: beige;
		margin: 0 auto;
	}	
	header {
		width: 100%;	  
		background: #eaeaea;		
	}	  
	main {
		width: 70%;
		height: 300px;
		background: deepskyblue;
		float: right;	
	}
	aside {
		width: 28%;
		height: 300px;		
		background: orange;
		float: left;	
	}
	footer {
		width: 100%;
		background: #eaeaea;		
		clear: both;        
	}
</style>