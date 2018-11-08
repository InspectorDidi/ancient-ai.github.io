<!DOCTYPE html>
<html lang="en">
<!-- InstanceBegin template="/Templates/php.fixed.dwt.php" codeOutsideHTMLIsLocked="false" -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
<head>

<!-- InstanceBeginEditable name="doctitle" -->
<title>website</title>
<!-- InstanceEndEditable -->
<!-- InstanceBeginEditable name="head" -->

<?php 
	if ($_SERVER["HTTPS"] !="on") {

		header("Location: https:// . $_SERVER["REQUEST_URI"]");
		exit();
	}
?>
<?php include("templates_4.1/includes/scriptandstyles.html"); ?>
<?php include("templates_4.1/includes/metanfavico.html"); ?>
<?php include("xssClean.php")?>
</head>

<body class="" data-version="4.1">
	<?php include("templates_4.1/includes/skipnav.html"); ?>
	<div id="content-wrapper">
		<input type="checkbox" id="menu_toggle" value="Show navigation menu" class="content-slide input-driver" />
		<?php include("templates_4.1/includes/noscript-padding.html"); ?>
		<header id="header" role="banner" class="content-slide band">
			<div id="wdn_header_top">
				<span id="gang_title"><a href="#">discord&ndash;ganggang</a></span> <!-- add link -->
			</div>
		</header>
		<div id="navigation_bar" class="band">
			<nav id="breadcrumbs" class="inner-wrapper" role="navigation" aria-label="breadcrumbs">
				<ul>
					<li><a href="#">asdf</a></li><!-- add link -->
					<?php echo $navigation ?>
				</ul>
			</nav>
			<div id="navigation_wrapper">
				<nav id="navigation" role="navigation" aria-label="main navigation">
					<!-- InstanceBeginEditable name="navlinks"-->
						<ul>
							