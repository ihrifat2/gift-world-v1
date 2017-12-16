<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en" xml:lang="en" xmlns:fb="http://www.facebook.com/2008/fbml">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head profile="http://www.w3.org/1999/xhtml/vocab">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="shortcut icon" href="http://shoppica.themesnap.net/misc/favicon.ico" type="image/vnd.microsoft.icon" />  
    <title>Gift World</title>
    <link type="text/css" rel="stylesheet" href="../css/x.css" media="all" />
    <link type="text/css" rel="stylesheet" href="../css/t.css" media="all" />
    <link type="text/css" rel="stylesheet" href="../css/m.css" media="all" />
    <link type="text/css" rel="stylesheet" href="../css/p.css" media="all" />
    <link type="text/css" rel="stylesheet" href="../css/c.css" media="screen" />
    <link type="text/css" rel="stylesheet" href="../css/a.css" media="all" />
    <script type="text/javascript" src="../js/x.js"></script>
    <script type="text/javascript" src="../js/o.js"></script>
    <script type="text/javascript" src="../js/w.js"></script>
    <script type="text/javascript" src="../js/l.js"></script>
    <script type="text/javascript" src="../js/s.js"></script>
    <script type="text/javascript" src="../js/b.js"></script>
    <script type="text/javascript" src="../js/c.js"></script>
    
</head>
<body class="s_layout_fixed html front not-logged-in no-sidebars page-node" >
<div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable">Skip to main content</a>
</div>
<div id="wrapper">
    <!-- ---------------------- -->
    <!--      H E A D E R       -->
    <!-- ---------------------- -->
    <div id="header" class="container_12">
        <div class="grid_12">
            <a id="site_logo" href="/"><img src="pic/logo.png" title="Shoppica" alt="Shoppica" /></a>
            <?php if(Auth::guest()): ?>
            <div id="system_navigation" class="s_nav">
                <ul class="s_list_1 clearfix">
                    <li><a href="<?php echo e(url('../user/login')); ?>">Log in</a></li>
                    <li><a href="<?php echo e(url('../user/reg')); ?>">Register</a></li>
                </ul>
            </div>
            <?php else: ?>

                <li class="s_list_1 clearfix">
                    <ul class="s_list_1 clearfix" role="menu">
                        <li><a href="#"><?php echo e(Auth::User()->firstName); ?></a></li>
                        <li><a href="<?php echo e(url('/logout')); ?>">Logout</a></li>
                    </ul>
                </li>

            <?php endif; ?>

    <!-- ---------------------- -->
    <!--     Layout start       -->
    <!-- ---------------------- -->

    <div class="container_12">
        <div class="row">
            <table align="center" style="position:absolute; right:250px;top:250px; color:black; font-size:15px"  class=" table-bordered ">

                <thead>
                <tr>

                    <th class="text-center">email</th>
                    <th class="text-center">mobile</th>
                    <th class="text-center">address</th>

                </tr>
                </thead>
                
                <tbody>
                <?php foreach($sales_platinum as $sales_silver): ?>
                    <tr>

                        <td class="text-center"><?php echo e($sales_silver->email); ?></td>
                        <td class="text-center"><?php echo e($sales_silver->mobile); ?></td>
                        <td class="text-center"><?php echo e($sales_silver->address); ?></td>

                    </tr>
                <?php endforeach; ?>
                </tbody>

            </table>

        </div>
    </div>


</body>
</html>
