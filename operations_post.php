<!doctype html>

<html>
    <head>
        <title>Operations</title>
    </head>

    <body>
        <?php
            if (isset($_POST['do'])) {
                $a = $_POST['a'];
                $b = $_POST['b'];

                if (!is_numeric($a) || !is_numeric($b)) {
                    echo "Numbers are not valid!";
                } else {
                    echo "Sum: " . ($a + $b) . "<br/>";
                    echo "Difference: " . ($a - $b) . "<br/>";
                    echo "Multiplication: " . ($a * $b) . "<br/>";
                    if ($b != 0) {
                        echo "Division: " . ($a / $b) . "<br/>";
                    } else {
                        echo "Division can not occur.<br/>";
                    }
                    if ($a != 0 || $b != 0) {
                        echo "Power: " . pow($a, $b) . "<br/>";
                    } else {
                        echo "Power can not occur.<br/>";
                    }
                }
            }
        ?>
        <form action="" method="post">
            <input type="text" name="a" />
            <input type="text" name="b" />
            <input type="submit" name="do" value="Do operations!" />
        </form>
    </body>
</html>
